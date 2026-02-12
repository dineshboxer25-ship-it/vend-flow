import { useState } from "react";

export default function WorkerControl() {
  const [workers, setWorkers] = useState(4);

  return (
    <div className="card">
      <h3>👨‍🍳 Worker Control</h3>
      <p>Active Workers Today</p>

      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <button onClick={() => setWorkers(workers - 1)}>-</button>
        <strong>{workers}</strong>
        <button onClick={() => setWorkers(workers + 1)}>+</button>
      </div>

      <p style={{ marginTop: 10 }}>
        Capacity adjusts based on workforce
      </p>
    </div>
  );
}
