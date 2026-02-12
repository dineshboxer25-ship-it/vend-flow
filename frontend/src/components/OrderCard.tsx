export default function OrderCard() {
  return (
    <div className="card">
      <h3>Incoming Order</h3>

      <p>2× Paneer Butter Masala</p>
      <p>4× Butter Naan</p>

      <h2 className="highlight">₹620</h2>
      <p>Prep time: 18 mins</p>

      <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
        <button className="btn-green">Accept</button>
        <button className="btn-yellow">Delay</button>
        <button className="btn-red">Reject</button>
      </div>
    </div>
  );
}
