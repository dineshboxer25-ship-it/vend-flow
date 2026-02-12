import StressPanel from "../components/StressPanel";
import OrderCard from "../components/OrderCard";

export default function Dashboard() {
  return (
    <div className="container">
      <h1>
        Good evening,{" "}
        <span className="highlight">Spice Garden ✨</span>
      </h1>
      <p>AI-powered order management optimizing sustainable profit</p>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 14, marginTop: 22 }}>
        <button className="btn-yellow">All Orders 0</button>
        <button>Pending 0</button>
        <button>Active 0</button>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "2.2fr 1fr",
          marginTop: 28
        }}
      >
        <div className="card" style={{ textAlign: "center" }}>
          <div style={{ fontSize: 40, opacity: 0.3 }}>〰</div>
          <h3>No orders yet</h3>
          <p>Orders will appear here when customers place them</p>
        </div>

        <StressPanel />
      </div>
    </div>
  );
}
