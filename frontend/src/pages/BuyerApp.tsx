import { useState } from "react";

type MenuItem = {
  id: number;
  name: string;
  price: number;
};

type CartItem = MenuItem & {
  qty: number;
};

const MENU: MenuItem[] = [
  { id: 1, name: "Butter Chicken", price: 320 },
  { id: 2, name: "Paneer Tikka Masala", price: 280 },
  { id: 3, name: "Biryani Special", price: 350 },
  { id: 4, name: "Dal Makhani", price: 220 },
];

export default function BuyerApp() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [platform, setPlatform] = useState("ONDC Buyer App A");

  const addItem = (item: MenuItem) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id);
      if (found) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );
  };

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <h1 style={styles.title}>ONDC Buyer Platform</h1>
      <p style={styles.subtitle}>
        Simulate orders from different ONDC buyer apps
      </p>

      {/* PLATFORM SELECT */}
      <div style={styles.platformBox}>
        <span style={{ color: "#9ca3af" }}>Select Platform:</span>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          style={styles.select}
        >
          <option>ONDC Buyer App A</option>
          <option>ONDC Buyer App B</option>
          <option>ONDC Buyer App C</option>
        </select>
      </div>

      {/* MAIN GRID */}
      <div style={styles.grid}>
        {/* MENU */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🍽 Spice Garden Menu</h2>

          {MENU.map((item) => (
            <div key={item.id} style={styles.menuItem}>
              <div>
                <div style={styles.itemName}>{item.name}</div>
                <div style={styles.price}>₹{item.price}</div>
              </div>
              <button
                onClick={() => addItem(item)}
                style={styles.addBtn}
              >
                + Add
              </button>
            </div>
          ))}
        </div>

        {/* CART */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🛒 Your Cart</h2>

          {cart.length === 0 && (
            <div style={styles.emptyCart}>
              Your cart is empty<br />
              Add items from the menu
            </div>
          )}

          {cart.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <div>
                <div style={styles.itemName}>{item.name}</div>
                <div style={styles.price}>
                  ₹{item.price} × {item.qty}
                </div>
              </div>

              <div style={styles.qtyControls}>
                <button
                  style={styles.qtyBtn}
                  onClick={() => decreaseQty(item.id)}
                >
                  −
                </button>
                <span style={{ color: "white" }}>{item.qty}</span>
                <button
                  style={styles.qtyBtn}
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {cart.length > 0 && (
            <>
              <div style={styles.total}>
                Total: ₹{total}
              </div>

              <button
                style={styles.placeBtn}
                onClick={() => {
                  alert("Order placed successfully 🚀");
                  setCart([]);
                }}
              >
                Place Order
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    background: "#0b0f14",
    minHeight: "100vh",
    padding: "40px",
    color: "white",
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "#9ca3af",
    marginBottom: 30,
  },
  platformBox: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    marginBottom: 30,
  },
  select: {
    background: "#111827",
    color: "white",
    border: "1px solid #fbbf24",
    borderRadius: 8,
    padding: "8px 12px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
  },
  card: {
    background: "#0f172a",
    borderRadius: 16,
    padding: 20,
    boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
  },
  cardTitle: {
    marginBottom: 16,
    fontSize: 20,
    fontWeight: 600,
  },
  menuItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
  itemName: {
    fontSize: 16,
    fontWeight: 500,
  },
  price: {
    color: "#fbbf24",
    fontSize: 14,
  },
  addBtn: {
    background: "transparent",
    border: "1px solid #fbbf24",
    color: "#fbbf24",
    borderRadius: 8,
    padding: "6px 14px",
    cursor: "pointer",
  },
  emptyCart: {
    textAlign: "center",
    color: "#9ca3af",
    padding: 40,
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
  },
  qtyControls: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  qtyBtn: {
    background: "#1f2933",
    border: "none",
    color: "white",
    width: 28,
    height: 28,
    borderRadius: 6,
    cursor: "pointer",
  },
  total: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 600,
    textAlign: "right",
  },
  placeBtn: {
    marginTop: 16,
    width: "100%",
    padding: "12px",
    background: "#fbbf24",
    border: "none",
    borderRadius: 10,
    fontWeight: 700,
    cursor: "pointer",
  },
};
