// Parsed Incident Dataset from SIEM Engine
const incidentData = [
  { id: "INC-101", timestamp: "15/Sep/2026:10:12:30", sourceIp: "185.220.101.5", attackType: "SQL_INJECTION", severity: "CRITICAL", payload: "GET /login.php?id=1%20OR%201=1", status: "BLOCKED (HTTP 403)" },
  { id: "INC-102", timestamp: "15/Sep/2026:10:12:35", sourceIp: "185.220.101.5", attackType: "SQL_INJECTION", severity: "CRITICAL", payload: "GET /api/user?name=' UNION SELECT username,password FROM users--", status: "BLOCKED (HTTP 500)" },
  { id: "INC-103", timestamp: "15/Sep/2026:10:14:00", sourceIp: "45.33.32.156", attackType: "XSS_ATTACK", severity: "HIGH", payload: "GET /comment?q=<script>alert('XSS')</script>", status: "SANITIZED" },
  { id: "INC-104", timestamp: "15/Sep/2026:10:14:15", sourceIp: "45.33.32.156", attackType: "XSS_ATTACK", severity: "HIGH", payload: "GET /search?q=<img src=x onerror=document.location=...>", status: "SANITIZED" },
  { id: "INC-105", timestamp: "15/Sep/2026:10:15:10", sourceIp: "45.33.32.156", attackType: "SSH_BRUTE_FORCE", severity: "CRITICAL", payload: "Failed password for root (Port 49152)", status: "FLAGGED" },
  { id: "INC-106", timestamp: "15/Sep/2026:10:15:12", sourceIp: "45.33.32.156", attackType: "SSH_BRUTE_FORCE", severity: "CRITICAL", payload: "Failed password for root (Port 49154)", status: "FLAGGED" },
  { id: "INC-107", timestamp: "15/Sep/2026:10:15:14", sourceIp: "45.33.32.156", attackType: "SSH_BRUTE_FORCE", severity: "CRITICAL", payload: "Failed password for root (Port 49156)", status: "FLAGGED" },
  { id: "INC-108", timestamp: "15/Sep/2026:10:15:16", sourceIp: "45.33.32.156", attackType: "SSH_BRUTE_FORCE", severity: "CRITICAL", payload: "Failed password for admin (Port 49158)", status: "IP BLOCKED" },
  { id: "INC-110", timestamp: "15/Sep/2026:10:15:20", sourceIp: "45.33.32.156", attackType: "SSH_BRUTE_FORCE", severity: "CRITICAL", payload: "Failed password for test (Port 49162)", status: "IP BLOCKED" },
  { id: "INC-111", timestamp: "15/Sep/2026:10:16:22", sourceIp: "104.244.42.1", attackType: "PATH_TRAVERSAL", severity: "HIGH", payload: "GET /../../../../etc/passwd", status: "DENIED (HTTP 403)" },
  { id: "INC-112", timestamp: "15/Sep/2026:10:16:30", sourceIp: "104.244.42.1", attackType: "RECONNAISSANCE", severity: "HIGH", payload: "GET /.env", status: "DENIED (HTTP 403)" },
  { id: "INC-113", timestamp: "15/Sep/2026:10:16:35", sourceIp: "104.244.42.1", attackType: "RECONNAISSANCE", severity: "HIGH", payload: "GET /wp-config.php.bak", status: "NOT FOUND (HTTP 404)" },
  { id: "INC-114", timestamp: "15/Sep/2026:10:30:11", sourceIp: "185.220.101.5", attackType: "SSH_BRUTE_FORCE", severity: "CRITICAL", payload: "Invalid user postgres login failure", status: "IP BLOCKED" }
];

let charts = {};

document.addEventListener("DOMContentLoaded", () => {
  setupSOCListeners();
  renderSOCDashboard(incidentData);
});

function setupSOCListeners() {
  document.getElementById("severityFilter").addEventListener("change", applySOCFilters);
  document.getElementById("attackTypeFilter").addEventListener("change", applySOCFilters);
  document.getElementById("ipSearch").addEventListener("input", applySOCFilters);
  document.getElementById("resetSecFilters").addEventListener("click", () => {
    document.getElementById("severityFilter").value = "ALL";
    document.getElementById("attackTypeFilter").value = "ALL";
    document.getElementById("ipSearch").value = "";
    applySOCFilters();
  });
}

function applySOCFilters() {
  const sev = document.getElementById("severityFilter").value;
  const attack = document.getElementById("attackTypeFilter").value;
  const search = document.getElementById("ipSearch").value.toLowerCase();

  const filtered = incidentData.filter(item => {
    const matchSev = sev === "ALL" || item.severity === sev;
    const matchAttack = attack === "ALL" || item.attackType === attack;
    const matchSearch = item.sourceIp.toLowerCase().includes(search) ||
                        item.payload.toLowerCase().includes(search);
    return matchSev && matchAttack && matchSearch;
  });

  renderSOCDashboard(filtered);
}

function renderSOCDashboard(data) {
  renderFeedTable(data);
  renderAttackVectorChart(data);
  renderIPThreatChart(data);
}

function renderFeedTable(data) {
  const tbody = document.getElementById("incidentFeedBody");
  tbody.innerHTML = "";

  data.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.timestamp}</td>
      <td><code>${item.sourceIp}</code></td>
      <td><strong>${item.attackType}</strong></td>
      <td><span class="sev-badge ${item.severity}">${item.severity}</span></td>
      <td class="code-payload">${escapeHtml(item.payload)}</td>
      <td><span class="status-text">${item.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Chart 1: Attack Vector Distribution
function renderAttackVectorChart(data) {
  const vectorCounts = {};
  data.forEach(d => {
    vectorCounts[d.attackType] = (vectorCounts[d.attackType] || 0) + 1;
  });

  if (charts.vectorChart) charts.vectorChart.destroy();

  const ctx = document.getElementById("attackTypeChart").getContext("2d");
  charts.vectorChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(vectorCounts),
      datasets: [{
        data: Object.values(vectorCounts),
        backgroundColor: ['#ff2a5f', '#00f0ff', '#ffb703', '#8b5cf6', '#00ff87'],
        borderColor: '#050811',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { color: '#64748b', font: { family: 'JetBrains Mono', size: 10 } } }
      }
    }
  });
}

// Chart 2: Top Attacker Origin IPs
function renderIPThreatChart(data) {
  const ipCounts = {};
  data.forEach(d => {
    ipCounts[d.sourceIp] = (ipCounts[d.sourceIp] || 0) + 1;
  });

  if (charts.ipChart) charts.ipChart.destroy();

  const ctx = document.getElementById("ipThreatChart").getContext("2d");
  charts.ipChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(ipCounts),
      datasets: [{
        label: 'Threat Count',
        data: Object.values(ipCounts),
        backgroundColor: '#ff2a5f',
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { ticks: { color: '#64748b', font: { family: 'JetBrains Mono' } }, grid: { color: 'rgba(255,255,255,0.05)' } },
        x: { ticks: { color: '#64748b', font: { family: 'JetBrains Mono' } }, grid: { display: false } }
      }
    }
  });
}
