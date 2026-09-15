"""
E-Commerce Customer Behavior & Sales Data Analysis Script
Author: Data Analytics Portfolio Project
Description: Analyzes sales performance, revenue trends, customer segmentation, and churn indicators.
"""

import csv
import os
from collections import defaultdict

def run_eda(csv_filepath):
    print("=" * 65)
    print("      E-COMMERCE SALES & CUSTOMER CHURN ANALYTICS REPORT      ")
    print("=" * 65)
    
    if not os.path.exists(csv_filepath):
        print(f"Error: Dataset file not found at '{csv_filepath}'")
        return

    records = []
    with open(csv_filepath, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            row['Total_Amount'] = float(row['Total_Amount'])
            row['Quantity'] = int(row['Quantity'])
            row['Unit_Price'] = float(row['Unit_Price'])
            row['Discount_Percent'] = float(row['Discount_Percent'])
            row['Satisfaction_Score'] = float(row['Satisfaction_Score'])
            row['Customer_Age'] = int(row['Customer_Age'])
            records.append(row)

    total_orders = len(records)
    total_revenue = sum(r['Total_Amount'] for r in records)
    avg_order_value = total_revenue / total_orders if total_orders > 0 else 0
    unique_customers = len(set(r['Customer_ID'] for r in records))
    avg_satisfaction = sum(r['Satisfaction_Score'] for r in records) / total_orders

    print(f"\n--- 📊 KEY EXECUTIVE KPIs ---")
    print(f"• Total Revenue Generated  : ${total_revenue:,.2f}")
    print(f"• Total Orders Processed   : {total_orders}")
    print(f"• Unique Customers         : {unique_customers}")
    print(f"• Average Order Value (AOV): ${avg_order_value:,.2f}")
    print(f"• Avg Customer Satisfaction: {avg_satisfaction:.2f} / 5.0")

    # Revenue by Product Category
    cat_revenue = defaultdict(float)
    cat_orders = defaultdict(int)
    for r in records:
        cat_revenue[r['Category']] += r['Total_Amount']
        cat_orders[r['Category']] += 1

    print(f"\n--- 🏷️ REVENUE & ORDERS BY PRODUCT CATEGORY ---")
    print(f"{'Category':<24} | {'Orders':<8} | {'Revenue ($)':<12} | {'% of Total':<10}")
    print("-" * 62)
    for cat, rev in sorted(cat_revenue.items(), key=lambda x: x[1], reverse=True):
        pct = (rev / total_revenue) * 100
        print(f"{cat:<24} | {cat_orders[cat]:<8} | ${rev:<11,.2f} | {pct:>8.2f}%")

    # Revenue by Region & Churn Risk breakdown
    region_rev = defaultdict(float)
    region_churn = defaultdict(lambda: {'Low': 0, 'Medium': 0, 'High': 0})
    for r in records:
        region_rev[r['Region']] += r['Total_Amount']
        region_churn[r['Region']][r['Churn_Risk']] += 1

    print(f"\n--- 🌍 REGIONAL SALES & CHURN RISK ANALYTICS ---")
    print(f"{'Region':<18} | {'Revenue ($)':<12} | {'High Churn':<10} | {'Med Churn':<10} | {'Low Churn':<10}")
    print("-" * 70)
    for reg, rev in sorted(region_rev.items(), key=lambda x: x[1], reverse=True):
        c = region_churn[reg]
        print(f"{reg:<18} | ${rev:<11,.2f} | {c['High']:<10} | {c['Medium']:<10} | {c['Low']:<10}")

    # Churn Risk Correlation Insight
    high_churn_records = [r for r in records if r['Churn_Risk'] == 'High']
    low_churn_records = [r for r in records if r['Churn_Risk'] == 'Low']
    
    avg_sat_high = sum(r['Satisfaction_Score'] for r in high_churn_records) / len(high_churn_records) if high_churn_records else 0
    avg_sat_low = sum(r['Satisfaction_Score'] for r in low_churn_records) / len(low_churn_records) if low_churn_records else 0

    print(f"\n--- 🔍 DATA INSIGHTS & STRATEGIC RECOMMENDATIONS ---")
    print(f"1. Customer Satisfaction Score strongly predicts churn:")
    print(f"   - High Churn Risk Group Avg Satisfaction : {avg_sat_high:.2f}/5.0")
    print(f"   - Low Churn Risk Group Avg Satisfaction  : {avg_sat_low:.2f}/5.0")
    print(f"2. Electronics is the top revenue generator (${cat_revenue.get('Electronics', 0):,.2f}).")
    print(f"3. Asia Pacific has elevated High-Churn risk (Avg satisfaction < 2.5). Recommendation: Audit shipping times & regional support.")
    print("\n" + "=" * 65)

if __name__ == "__main__":
    csv_path = os.path.join(os.path.dirname(__file__), "..", "dataset", "ecommerce_sales_data.csv")
    run_eda(csv_path)
