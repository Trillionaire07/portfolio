"""
SIEM Security Log Parser & Automated Threat Detection Engine
Author: Cybersecurity Portfolio Project
Description: Parses auth.log and access.log files, detects web attack vectors & SSH brute force,
             and generates structured threat intelligence reports.
"""

import re
import json
import os
from collections import defaultdict

class SIEMEngine:
    def __init__(self):
        # Regex Attack Signature Definitions
        self.signatures = {
            'SQL_INJECTION': [
                r"(\%27|\'|\-\-|\%23|#)",
                r"(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|EXEC)\s+",
                r"OR\s+1\s*=\s*1"
            ],
            'XSS_ATTACK': [
                r"<script.*?>.*?</script>",
                r"javascript:",
                r"onerror\s*=",
                r"onload\s*="
            ],
            'PATH_TRAVERSAL': [
                r"\.\./\.\./",
                r"/etc/passwd",
                r"/win\.ini",
                r"\.env"
            ],
            'RECONNAISSANCE': [
                r"nikto",
                r"sqlmap",
                r"nmap",
                r"wp-config",
                r"\.bak"
            ]
        }

    def parse_access_log(self, filepath):
        incidents = []
        if not os.path.exists(filepath):
            print(f"[!] Access log file not found: {filepath}")
            return incidents

        log_pattern = r'^(?P<ip>\S+) \S+ \S+ \[(?P<time>[^\]]+)\] "(?P<method>\S+) (?P<url>\S+) \S+" (?P<status>\d+) \d+ "(?P<ref>[^"]*)" "(?P<agent>[^"]*)"'

        with open(filepath, 'r', encoding='utf-8') as f:
            for line_no, line in enumerate(f, 1):
                match = re.search(log_pattern, line)
                if not match:
                    continue

                ip = match.group('ip')
                time_str = match.group('time')
                url = match.group('url')
                agent = match.group('agent')
                status = match.group('status')

                # Check URL and User Agent against attack signatures
                for attack_type, patterns in self.signatures.items():
                    for pattern in patterns:
                        if re.search(pattern, url, re.IGNORECASE) or re.search(pattern, agent, re.IGNORECASE):
                            severity = 'CRITICAL' if attack_type in ['SQL_INJECTION', 'XSS_ATTACK'] else 'HIGH'
                            incidents.append({
                                'type': attack_type,
                                'severity': severity,
                                'source_ip': ip,
                                'timestamp': time_str,
                                'payload': url,
                                'log_file': 'access.log',
                                'line_number': line_no
                            })
                            break
        return incidents

    def parse_auth_log(self, filepath):
        incidents = []
        if not os.path.exists(filepath):
            print(f"[!] Auth log file not found: {filepath}")
            return incidents

        failed_ip_counts = defaultdict(int)

        with open(filepath, 'r', encoding='utf-8') as f:
            for line_no, line in enumerate(f, 1):
                if "Failed password" in line or "Invalid user" in line:
                    ip_match = re.search(r'from\s+(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})', line)
                    time_match = re.search(r'^([A-Z][a-z]{2}\s+\d+\s+\d+:\d+:\d+)', line)
                    if ip_match:
                        ip = ip_match.group(1)
                        timestamp = time_match.group(1) if time_match else "N/A"
                        failed_ip_counts[ip] += 1

                        # Immediate alert on high count (Brute force threshold > 3)
                        if failed_ip_counts[ip] >= 4:
                            incidents.append({
                                'type': 'SSH_BRUTE_FORCE',
                                'severity': 'CRITICAL',
                                'source_ip': ip,
                                'timestamp': timestamp,
                                'payload': f'Repeated login failures (Count: {failed_ip_counts[ip]})',
                                'log_file': 'auth.log',
                                'line_number': line_no
                            })

        return incidents

    def generate_report(self, incidents, output_filepath):
        total = len(incidents)
        critical = sum(1 for i in incidents if i['severity'] == 'CRITICAL')
        high = sum(1 for i in incidents if i['severity'] == 'HIGH')

        report = {
            'summary': {
                'total_threats_detected': total,
                'critical_alerts': critical,
                'high_alerts': high
            },
            'incidents': incidents
        }

        with open(output_filepath, 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2)

        print("=" * 65)
        print("          🛡️ SIEM THREAT DETECTION EXECUTIVE REPORT 🛡️          ")
        print("=" * 65)
        print(f"• Total Threats Detected : {total}")
        print(f"• Critical Threat Level  : {critical}")
        print(f"• High Threat Level      : {high}")
        print("-" * 65)
        print(f"{'TYPE':<18} | {'SEVERITY':<10} | {'SOURCE IP':<16} | {'PAYLOAD/ACTION'}")
        print("-" * 65)
        for inc in incidents:
            payload_snip = inc['payload'][:30] + ('...' if len(inc['payload']) > 30 else '')
            print(f"{inc['type']:<18} | {inc['severity']:<10} | {inc['source_ip']:<16} | {payload_snip}")
        print("=" * 65)
        print(f"\n[+] Threat Intelligence report exported to: {output_filepath}\n")

if __name__ == '__main__':
    base_dir = os.path.dirname(__file__)
    access_log = os.path.join(base_dir, '..', 'sample_logs', 'access.log')
    auth_log = os.path.join(base_dir, '..', 'sample_logs', 'auth.log')
    report_output = os.path.join(base_dir, 'threat_report.json')

    engine = SIEMEngine()
    access_incidents = engine.parse_access_log(access_log)
    auth_incidents = engine.parse_auth_log(auth_log)
    
    all_incidents = access_incidents + auth_incidents
    engine.generate_report(all_incidents, report_output)
