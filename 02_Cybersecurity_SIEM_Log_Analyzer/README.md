# 🛡️ SIEM Security Log Analyzer & Threat Detection Engine

A beginner-to-intermediate Cybersecurity portfolio project featuring a Python SIEM threat parsing engine, regex attack detection, automated threat reporting, and a live Security Operations Center (SOC) dashboard.

---

## 📌 Project Overview
Modern Security Operations Centers (SOCs) rely on Security Information and Event Management (SIEM) systems to parse log telemetry and detect cyber threats in real time.

This project implements a lightweight SIEM engine that ingests web server (`access.log`) and Linux authentication (`auth.log`) logs to detect:
1. **SQL Injection (SQLi)** attacks (e.g., `' OR '1'='1`, `UNION SELECT`)
2. **Cross-Site Scripting (XSS)** payloads (`<script>`, `onerror=`, stolen cookie scripts)
3. **Path Traversal & Reconnaissance** probing (`../../etc/passwd`, `.env`, `wp-config.php.bak`)
4. **SSH Brute Force Attacks** (>3 failed password attempts within a short timeframe)

---

## 🛠️ Technology Stack
- **Engine & Parser**: Python 3 (`re`, `json`, `collections`)
- **Telemetry Sources**: Nginx/Apache Web Server Access Logs & Linux Syslog Auth Logs
- **SOC Dashboard**: HTML5, Cyberpunk Dark CSS3, Chart.js, Vanilla JavaScript

---

## 🚨 Threat Detection Engine Features
- **Regex Signature Engine**: Scans incoming URI strings, query parameters, and User-Agents against known malicious payloads.
- **Anomaly Scoring & Severity Rating**: Classifies threats into `CRITICAL`, `HIGH`, or `MEDIUM` severity alerts based on impact potential.
- **Automated Incident Reporting**: Exports structured JSON logs (`threat_report.json`) detailing source IP, payload snippet, timestamp, and log file line numbers.
- **Interactive SOC Interface**: Visualizes attack vector distributions, origin IP frequency, and automated firewall mitigation playbooks.

---

## 📁 Repository Structure
```
02_Cybersecurity_SIEM_Log_Analyzer/
├── sample_logs/
│   ├── auth.log                        # Linux authentication telemetry
│   └── access.log                      # Apache/Nginx web access telemetry
├── parser_engine/
│   ├── siem_parser.py                  # Python log parsing & threat detection engine
│   └── threat_report.json              # Output JSON threat report
├── dashboard/
│   ├── index.html                      # Security Operations Center (SOC) UI
│   ├── styles.css                      # Cyberpunk dark mode styling
│   └── app.js                          # Dynamic incident telemetry & Chart.js engine
└── README.md                           # Documentation & resume portfolio guide
```

---

## 🚀 How to Run the Project

### Option 1: View the SOC Security Operations Dashboard
Open `dashboard/index.html` directly in any modern browser to interact with live threat feeds, attack charts, and filtering by IP/vector.

### Option 2: Run Python Threat Detection Parser
Execute the parser in Python:
```bash
python parser_engine/siem_parser.py
```
This generates `threat_report.json` and displays the terminal incident summary table.

---

## 📝 Resume Bullet Points (Copy & Paste Ready)

Add these high-impact bullet points to your resume under **Projects**:

- **SIEM Security Log Analyzer & Threat Detection Tool**
  - Engineered a Python-based SIEM log parser utilizing regular expressions to ingest syslog and Apache access logs, detecting SQLi, XSS, and SSH brute force attacks.
  - Developed a threshold-based anomaly detection algorithm identifying suspicious IP addresses exceeding 3+ failed authentication attempts, classifying threats by severity (`CRITICAL`, `HIGH`).
  - Designed an interactive Security Operations Center (SOC) dashboard using Chart.js and Vanilla JS to visualize real-time attack vectors, top malicious IPs, and automated response playbooks.
