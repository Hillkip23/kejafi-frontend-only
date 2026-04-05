"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");

  const handleSwap = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert("Swap completed!");
    setLoading(false);
  };

  return (
    <main style={{ maxWidth: 600, margin: "2rem auto", padding: "1.5rem" }}>
      <h1>Swap FINE5 ↔ FINE6</h1>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <button onClick={handleSwap} disabled={loading}>{loading ? "Processing..." : "Swap"}</button>
      <p>Pool: FINE5: 102,342 | FINE6: 98,939</p>
    </main>
  );
}
