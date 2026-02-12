import React from "react";
import { Link } from "react-router-dom";

const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 24px",
    background: "#0b0f14",
    borderBottom: "1px solid #1f2933",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },

  logo: {
    fontWeight: 700,
    fontSize: 20,
    color: "#fbbf24",
  },

  link: {
    color: "#9ca3af",
    textDecoration: "none",
    fontSize: 14,
  },

  activeLink: {
    color: "#fbbf24",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },

  live: {
    color: "#22c55e",
    fontWeight: 600,
  },

  vendor: {
    textAlign: "right",
    fontSize: 12,
    color: "#9ca3af",
  },
};

const Navbar: React.FC = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <div style={styles.logo}>VendFlow</div>

        <Link to="/" style={{ ...styles.link, ...styles.activeLink }}>
          Dashboard
        </Link>
        <Link to="/buyer" style={styles.link}>
          Buyer App
        </Link>
        <Link to="/delivery" style={styles.link}>
          Delivery
        </Link>
      </div>

      <div style={styles.right}>
        <span style={styles.live}>● Live</span>
        <div style={styles.vendor}>
          <div>Spice Garden</div>
          <div>Kormangala, Bangalore</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
