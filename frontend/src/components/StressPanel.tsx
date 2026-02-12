export default function StressPanel() {
  return (
    <div
      className="card"
      style={{
        boxShadow: "0 0 0 1px #22c55e33, 0 0 40px #22c55e22"
      }}
    >
      <h3>⚡ Vendor Stress Level</h3>

      <p style={{ marginTop: 10 }}>Current Load</p>
      <h1 style={{ color: "#22c55e" }}>0%</h1>

      <p>Kitchen is running smoothly</p>

      <div style={{ marginTop: 12 }}>
        <p>Order Capacity</p>
        <strong>0 / 8</strong>
      </div>
    </div>
  );
}
