// Embedded E-Commerce Dataset
const rawOrdersData = [
  { orderId: "ORD-1001", customerId: "CUST-2041", date: "2025-01-05", month: "Jan 2025", region: "North America", category: "Electronics", product: "Wireless Headphones", qty: 2, price: 99.99, discount: 0.10, total: 179.98, csat: 4.5, churn: "Low" },
  { orderId: "ORD-1002", customerId: "CUST-1182", date: "2025-01-06", month: "Jan 2025", region: "Europe", category: "Apparel", product: "Running Shoes", qty: 1, price: 120.00, discount: 0.00, total: 120.00, csat: 3.8, churn: "Low" },
  { orderId: "ORD-1003", customerId: "CUST-3904", date: "2025-01-07", month: "Jan 2025", region: "Asia Pacific", category: "Home & Kitchen", product: "Smart Coffee Maker", qty: 1, price: 150.00, discount: 0.15, total: 127.50, csat: 2.1, churn: "High" },
  { orderId: "ORD-1004", customerId: "CUST-1049", date: "2025-01-08", month: "Jan 2025", region: "North America", category: "Electronics", product: "4K Monitor", qty: 1, price: 349.99, discount: 0.05, total: 332.49, csat: 4.9, churn: "Low" },
  { orderId: "ORD-1005", customerId: "CUST-4412", date: "2025-01-10", month: "Jan 2025", region: "Latin America", category: "Beauty & Personal Care", product: "Skincare Serum Set", qty: 3, price: 45.00, discount: 0.20, total: 108.00, csat: 4.0, churn: "Low" },
  { orderId: "ORD-1006", customerId: "CUST-3904", date: "2025-01-12", month: "Jan 2025", region: "Asia Pacific", category: "Home & Kitchen", product: "Robot Vacuum", qty: 1, price: 299.99, discount: 0.10, total: 269.99, csat: 1.8, churn: "High" },
  { orderId: "ORD-1007", customerId: "CUST-5120", date: "2025-01-15", month: "Jan 2025", region: "Europe", category: "Electronics", product: "Mechanical Keyboard", qty: 1, price: 89.50, discount: 0.00, total: 89.50, csat: 4.7, churn: "Low" },
  { orderId: "ORD-1008", customerId: "CUST-6119", date: "2025-01-18", month: "Jan 2025", region: "North America", category: "Apparel", product: "Denim Jacket", qty: 2, price: 75.00, discount: 0.10, total: 135.00, csat: 3.5, churn: "Medium" },
  { orderId: "ORD-1009", customerId: "CUST-7231", date: "2025-01-20", month: "Jan 2025", region: "Europe", category: "Books", product: "Data Science & AI Guide", qty: 3, price: 35.00, discount: 0.05, total: 99.75, csat: 4.8, churn: "Low" },
  { orderId: "ORD-1010", customerId: "CUST-8302", date: "2025-01-22", month: "Jan 2025", region: "Asia Pacific", category: "Electronics", product: "Noise-Canceling Earbuds", qty: 1, price: 149.99, discount: 0.15, total: 127.49, csat: 2.4, churn: "High" },
  { orderId: "ORD-1011", customerId: "CUST-9110", date: "2025-01-25", month: "Jan 2025", region: "Latin America", category: "Sports & Outdoors", product: "Yoga Mat & Blocks", qty: 2, price: 40.00, discount: 0.00, total: 80.00, csat: 4.2, churn: "Low" },
  { orderId: "ORD-1012", customerId: "CUST-1182", date: "2025-02-02", month: "Feb 2025", region: "Europe", category: "Apparel", product: "Winter Coat", qty: 1, price: 210.00, discount: 0.20, total: 168.00, csat: 4.1, churn: "Low" },
  { orderId: "ORD-1013", customerId: "CUST-2041", date: "2025-02-05", month: "Feb 2025", region: "North America", category: "Electronics", product: "Smart Watch", qty: 1, price: 199.99, discount: 0.00, total: 199.99, csat: 4.6, churn: "Low" },
  { orderId: "ORD-1014", customerId: "CUST-3105", date: "2025-02-08", month: "Feb 2025", region: "Europe", category: "Home & Kitchen", product: "Air Fryer Pro", qty: 1, price: 110.00, discount: 0.10, total: 99.00, csat: 3.2, churn: "Medium" },
  { orderId: "ORD-1015", customerId: "CUST-4819", date: "2025-02-12", month: "Feb 2025", region: "North America", category: "Electronics", product: "Gaming Mouse", qty: 2, price: 59.99, discount: 0.05, total: 113.98, csat: 4.9, churn: "Low" },
  { orderId: "ORD-1016", customerId: "CUST-5221", date: "2025-02-15", month: "Feb 2025", region: "Asia Pacific", category: "Apparel", product: "Leather Boots", qty: 1, price: 180.00, discount: 0.15, total: 153.00, csat: 2.0, churn: "High" },
  { orderId: "ORD-1017", customerId: "CUST-6340", date: "2025-02-18", month: "Feb 2025", region: "Latin America", category: "Electronics", product: "Bluetooth Speaker", qty: 2, price: 65.00, discount: 0.10, total: 117.00, csat: 4.3, churn: "Low" },
  { orderId: "ORD-1018", customerId: "CUST-7109", date: "2025-02-22", month: "Feb 2025", region: "North America", category: "Books", product: "Cybersecurity Fundamentals", qty: 2, price: 45.00, discount: 0.00, total: 90.00, csat: 5.0, churn: "Low" },
  { orderId: "ORD-1019", customerId: "CUST-8812", date: "2025-02-26", month: "Feb 2025", region: "Europe", category: "Beauty & Personal Care", product: "Hair Dryer Brush", qty: 1, price: 85.00, discount: 0.10, total: 76.50, csat: 3.6, churn: "Medium" },
  { orderId: "ORD-1020", customerId: "CUST-9321", date: "2025-03-01", month: "Mar 2025", region: "Asia Pacific", category: "Home & Kitchen", product: "Blender High-Speed", qty: 1, price: 130.00, discount: 0.20, total: 104.00, csat: 2.3, churn: "High" },
  { orderId: "ORD-1021", customerId: "CUST-1049", date: "2025-03-04", month: "Mar 2025", region: "North America", category: "Electronics", product: "USB-C Hub Multiport", qty: 3, price: 35.00, discount: 0.10, total: 94.50, csat: 4.8, churn: "Low" },
  { orderId: "ORD-1022", customerId: "CUST-2041", date: "2025-03-07", month: "Mar 2025", region: "North America", category: "Electronics", product: "Wireless Charger Pad", qty: 2, price: 29.99, discount: 0.00, total: 59.98, csat: 4.7, churn: "Low" },
  { orderId: "ORD-1023", customerId: "CUST-3904", date: "2025-03-10", month: "Mar 2025", region: "Asia Pacific", category: "Sports & Outdoors", product: "Adjustable Dumbbells", qty: 1, price: 250.00, discount: 0.10, total: 225.00, csat: 1.9, churn: "High" },
  { orderId: "ORD-1024", customerId: "CUST-4412", date: "2025-03-14", month: "Mar 2025", region: "Latin America", category: "Apparel", product: "Summer Dress", qty: 2, price: 55.00, discount: 0.05, total: 104.50, csat: 4.4, churn: "Low" },
  { orderId: "ORD-1025", customerId: "CUST-5120", date: "2025-03-18", month: "Mar 2025", region: "Europe", category: "Electronics", product: "Ergonomic Chair", qty: 1, price: 320.00, discount: 0.15, total: 272.00, csat: 4.9, churn: "Low" },
  { orderId: "ORD-1026", customerId: "CUST-6119", date: "2025-03-21", month: "Mar 2025", region: "North America", category: "Sports & Outdoors", product: "Camping Tent 4-Person", qty: 1, price: 180.00, discount: 0.10, total: 162.00, csat: 3.8, churn: "Low" },
  { orderId: "ORD-1027", customerId: "CUST-7231", date: "2025-03-25", month: "Mar 2025", region: "Europe", category: "Electronics", product: "Standing Desk Converter", qty: 1, price: 210.00, discount: 0.10, total: 189.00, csat: 4.6, churn: "Low" },
  { orderId: "ORD-1028", customerId: "CUST-8302", date: "2025-03-28", month: "Mar 2025", region: "Asia Pacific", category: "Books", product: "Financial Analytics Handbook", qty: 2, price: 50.00, discount: 0.00, total: 100.00, csat: 2.5, churn: "High" },
  { orderId: "ORD-1029", customerId: "CUST-9110", date: "2025-04-02", month: "Apr 2025", region: "Latin America", category: "Home & Kitchen", product: "Espresso Machine", qty: 1, price: 299.00, discount: 0.15, total: 254.15, csat: 4.5, churn: "Low" },
  { orderId: "ORD-1030", customerId: "CUST-1182", date: "2025-04-05", month: "Apr 2025", region: "Europe", category: "Sports & Outdoors", product: "Trekking Backpack", qty: 1, price: 95.00, discount: 0.05, total: 90.25, csat: 4.0, churn: "Low" }
];

let chartInstances = {};

// Chart Setup & Rendering
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  renderDashboard(rawOrdersData);
});

function setupEventListeners() {
  document.getElementById("regionFilter").addEventListener("change", applyFilters);
  document.getElementById("categoryFilter").addEventListener("change", applyFilters);
  document.getElementById("searchInput").addEventListener("input", applyFilters);
  document.getElementById("resetFiltersBtn").addEventListener("click", () => {
    document.getElementById("regionFilter").value = "ALL";
    document.getElementById("categoryFilter").value = "ALL";
    document.getElementById("searchInput").value = "";
    applyFilters();
  });
}

function applyFilters() {
  const selectedRegion = document.getElementById("regionFilter").value;
  const selectedCat = document.getElementById("categoryFilter").value;
  const searchText = document.getElementById("searchInput").value.toLowerCase();

  const filtered = rawOrdersData.filter(item => {
    const matchesRegion = selectedRegion === "ALL" || item.region === selectedRegion;
    const matchesCat = selectedCat === "ALL" || item.category === selectedCat;
    const matchesSearch = item.orderId.toLowerCase().includes(searchText) ||
                          item.product.toLowerCase().includes(searchText) ||
                          item.customerId.toLowerCase().includes(searchText);
    return matchesRegion && matchesCat && matchesSearch;
  });

  renderDashboard(filtered);
}

function renderDashboard(data) {
  updateKPIs(data);
  updateTable(data);
  renderTrendChart(data);
  renderCategoryDonutChart(data);
  renderRegionBarChart(data);
  renderChurnSatisfactionChart(data);
}

function updateKPIs(data) {
  const totalRev = data.reduce((acc, curr) => acc + curr.total, 0);
  const totalOrders = data.length;
  const aov = totalOrders > 0 ? totalRev / totalOrders : 0;
  const avgCsat = totalOrders > 0 ? (data.reduce((acc, curr) => acc + curr.csat, 0) / totalOrders) : 0;
  const highChurnCount = data.filter(item => item.churn === "High").length;
  const churnPct = totalOrders > 0 ? ((highChurnCount / totalOrders) * 100).toFixed(1) : 0;

  document.getElementById("kpiRevenue").textContent = `$${totalRev.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("kpiOrders").textContent = totalOrders;
  document.getElementById("kpiAOV").textContent = `$${aov.toFixed(2)}`;
  document.getElementById("kpiCSAT").textContent = `${avgCsat.toFixed(1)} / 5.0`;
  document.getElementById("kpiChurn").textContent = `${churnPct}% (${highChurnCount} High)`;
}

function updateTable(data) {
  const tbody = document.getElementById("ordersTableBody");
  const tableCount = document.getElementById("tableCount");
  tbody.innerHTML = "";
  tableCount.textContent = `Showing ${data.length} records`;

  data.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${item.orderId}</strong></td>
      <td>${item.date}</td>
      <td>${item.customerId}</td>
      <td>${item.region}</td>
      <td>${item.category}</td>
      <td>${item.product}</td>
      <td>${item.qty}</td>
      <td>$${item.total.toFixed(2)}</td>
      <td>${item.csat.toFixed(1)}</td>
      <td><span class="risk-tag ${item.churn}">${item.churn}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// Chart 1: Revenue Trend Line Chart
function renderTrendChart(data) {
  const monthlyData = {};
  data.forEach(d => {
    monthlyData[d.month] = (monthlyData[d.month] || 0) + d.total;
  });

  const labels = Object.keys(monthlyData);
  const values = Object.values(monthlyData);

  if (chartInstances.trendChart) chartInstances.trendChart.destroy();

  const ctx = document.getElementById("revenueTrendChart").getContext("2d");
  chartInstances.trendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Revenue ($)',
        data: values,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.15)',
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#8b5cf6',
        pointRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        x: { ticks: { color: '#9ca3af' }, grid: { display: false } }
      }
    }
  });
}

// Chart 2: Category Donut Chart
function renderCategoryDonutChart(data) {
  const catMap = {};
  data.forEach(d => {
    catMap[d.category] = (catMap[d.category] || 0) + d.total;
  });

  if (chartInstances.donutChart) chartInstances.donutChart.destroy();

  const ctx = document.getElementById("categoryDonutChart").getContext("2d");
  chartInstances.donutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(catMap),
      datasets: [{
        data: Object.values(catMap),
        backgroundColor: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#ec4899'],
        borderWidth: 2,
        borderColor: '#0b0f19'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { color: '#9ca3af', font: { size: 11 } } }
      }
    }
  });
}

// Chart 3: Region Bar Chart
function renderRegionBarChart(data) {
  const regMap = {};
  data.forEach(d => {
    regMap[d.region] = (regMap[d.region] || 0) + d.total;
  });

  if (chartInstances.barChart) chartInstances.barChart.destroy();

  const ctx = document.getElementById("regionBarChart").getContext("2d");
  chartInstances.barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(regMap),
      datasets: [{
        label: 'Revenue ($)',
        data: Object.values(regMap),
        backgroundColor: '#8b5cf6',
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        x: { ticks: { color: '#9ca3af' }, grid: { display: false } }
      }
    }
  });
}

// Chart 4: Churn vs Satisfaction Scatter
function renderChurnSatisfactionChart(data) {
  const scatterData = data.map(d => ({
    x: d.csat,
    y: d.total,
    churn: d.churn
  }));

  if (chartInstances.scatterChart) chartInstances.scatterChart.destroy();

  const ctx = document.getElementById("churnSatisfactionChart").getContext("2d");
  chartInstances.scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'High Risk',
          data: scatterData.filter(d => d.churn === 'High'),
          backgroundColor: '#ef4444',
          pointRadius: 7
        },
        {
          label: 'Medium Risk',
          data: scatterData.filter(d => d.churn === 'Medium'),
          backgroundColor: '#f59e0b',
          pointRadius: 6
        },
        {
          label: 'Low Risk',
          data: scatterData.filter(d => d.churn === 'Low'),
          backgroundColor: '#10b981',
          pointRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#9ca3af' } }
      },
      scales: {
        x: { title: { display: true, text: 'Satisfaction Score (CSAT)', color: '#9ca3af' }, ticks: { color: '#9ca3af' }, min: 1, max: 5 },
        y: { title: { display: true, text: 'Order Total ($)', color: '#9ca3af' }, ticks: { color: '#9ca3af' } }
      }
    }
  });
}
