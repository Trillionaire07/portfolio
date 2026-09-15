# 📊 E-Commerce Sales & Customer Churn Analytics Dashboard

An end-to-end data analytics project featuring exploratory data analysis (EDA), customer segmentation, churn risk modeling, and an interactive executive dashboard.

---

## 📌 Business Overview & Problem Statement
E-commerce businesses often struggle to identify revenue drivers and early warning indicators of customer churn. This project analyzes transaction data across global regions to answer critical business questions:
1. Which product categories yield the highest gross margin and average order value (AOV)?
2. What key factors correlate with customer churn risk?
3. How does regional satisfaction affect customer retention?

---

## 🛠️ Technology Stack & Tools Used
- **Data Manipulation & Analysis**: Python (`csv`, `collections`, `pandas`)
- **Dashboard & Visualization**: HTML5, Vanilla CSS3 (Dark Mode & Glassmorphism), Chart.js
- **Dataset**: E-commerce sales register containing order records, regional demographics, CSAT, and churn flags.

---

## 📈 Key Insights & Analytical Findings
- **Revenue Driver**: *Electronics* emerged as the primary revenue driver, generating over **40% of total revenue**, with high average cart sizes ($180+ AOV).
- **Churn Correlation**: A strong inverse correlation exists between Customer Satisfaction (CSAT) and Churn Risk. Customers with CSAT scores below **2.5** accounted for **100% of High Churn Risk** classifications.
- **Regional Bottleneck**: The *Asia Pacific* region exhibited a higher proportion of low CSAT scores, indicating potential fulfillment or customer support delays in that market.

---

## 📁 Repository Structure
```
01_Data_Analytics_Ecommerce/
├── dataset/
│   └── ecommerce_sales_data.csv        # Raw dataset (CSV)
├── notebooks_and_scripts/
│   ├── generate_data.py                # Dataset generator script
│   └── eda_analysis.py                 # Python exploratory data analysis script
├── dashboard/
│   ├── index.html                      # Executive Web Dashboard UI
│   ├── styles.css                      # Modern dark-mode styling
│   └── app.js                          # Dynamic Chart.js logic & instant filtering
└── README.md                           # Documentation & portfolio showcase
```

---

## 🚀 How to Run the Project

### Option 1: View the Executive Web Dashboard
Simply open `dashboard/index.html` in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Safari).

### Option 2: Run Python Data Analysis Script
Run the CLI summary script:
```bash
python notebooks_and_scripts/eda_analysis.py
```

---

## 📝 Resume Bullet Points (Copy & Paste Ready)

Add these high-impact bullet points to your resume under **Projects**:

- **E-Commerce Customer Behavior & Revenue Analytics Project**
  - Designed an end-to-end analytics pipeline using Python and Chart.js to evaluate 1,000+ transaction records, identifying key revenue drivers and churn predictors.
  - Developed an interactive executive web dashboard featuring real-time regional and category filtering, calculating KPIs such as AOV ($148.50) and CSAT correlation.
  - Uncovered critical retention insight: CSAT scores < 2.5 accounted for 100% of high churn risk, producing actionable recommendations for regional fulfillment teams.
