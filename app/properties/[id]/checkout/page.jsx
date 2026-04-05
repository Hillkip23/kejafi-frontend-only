"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");

  const handleSwap = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Swap completed! (Demo)");
    } catch (error) {
      alert("Swap failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: 600, margin: "2rem auto", padding: "1.5rem" }}>
      <h1>Swap FINE5 ↔ FINE6</h1>
      
      <div style={{ marginBottom: 16 }}>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "100%", padding: 8, marginTop: 8 }}
          placeholder="Enter amount"
        />
      </div>
      
      <div style={{ marginBottom: 16, padding: 12, background: "#f3f4f6", borderRadius: 4 }}>
        <p>Pool Reserves:</p>
        <p>FINE5: 102,342</p>
        <p>FINE6: 98,939</p>
      </div>
      
      <button
        onClick={handleSwap}
        disabled={loading || !amount}
        style={{
          width: "100%",
          padding: 10,
          background: loading ? "#9ca3af" : "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: "pointer"
        }}
      >
        {loading ? "Processing..." : "Execute Swap"}
      </button>
    </main>
  );
}
