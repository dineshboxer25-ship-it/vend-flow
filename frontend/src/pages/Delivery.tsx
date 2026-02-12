import React from "react";

const Delivery: React.FC = () => {
  return (
    <div className="page">
      {/* Header */}
      <div className="page-header">
        <div className="icon-circle">🚚</div>
        <h1>Delivery Agent View</h1>
        <p className="subtitle">
          Manage pickups and deliveries for <b>Spice Garden</b>
        </p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number yellow">0</div>
          <div className="stat-label">Pending</div>
        </div>

        <div className="stat-card">
          <div className="stat-number yellow">0</div>
          <div className="stat-label">In Transit</div>
        </div>

        <div className="stat-card">
          <div className="stat-number green">0</div>
          <div className="stat-label">Delivered</div>
        </div>
      </div>

      {/* Active Deliveries */}
      <div className="section">
        <h2 className="section-title">📦 Active Deliveries</h2>

        <div className="empty-card">
          <div className="empty-icon">🚚</div>
          <h3>No active deliveries</h3>
          <p>New orders will appear here when accepted by the restaurant</p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
