import React from "react";
import { calculateProfit } from "../utils/profitCalculator";

const PerformancePanel: React.FC = () => {
  const revenue = 4250;
  const profit = calculateProfit(revenue);

  return (
    <div className="card">
      <h3>📊 Performance Summary</h3>

      <div className="stat-row">
        <span>Today's Revenue</span>
        <strong>₹{revenue}</strong>
      </div>

      <div className="stat-row">
        <span>Estimated Profit</span>
        <strong style={{ color: "#22c55e" }}>₹{profit}</strong>
      </div>

      <div className="stat-row">
        <span>Orders Completed</span>
        <strong>12</strong>
      </div>
    </div>
  );
};

export default PerformancePanel;
