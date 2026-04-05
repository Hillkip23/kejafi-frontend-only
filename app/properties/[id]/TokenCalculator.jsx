"use client";

import { useState } from "react";

export default function TokenCalculator({ tokenPrice }) {
  const [usd, setUsd] = useState("");
  const [tokens, setTokens] = useState("");

  const handleUsdChange = (e) => {
    const value = e.target.value;
    setUsd(value);
    const n = parseFloat(value);
    if (!isNaN(n) && tokenPrice > 0) {
      setTokens((n / tokenPrice).toFixed(2));
    } else {
      setTokens("");
    }
  };

  const handleTokensChange = (e) => {
    const value = e.target.value;
    setTokens(value);
    const n = parseFloat(value);
    if (!isNaN(n) && tokenPrice > 0) {
      setUsd((n * tokenPrice).toFixed(2));
    } else {
      setUsd("");
    }
  };

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <h3 style={{ marginBottom: "0.75rem" }}>Token purchase calculator</h3>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "0.5rem" }}>
        <div>
          <label style={{ display: "block", fontSize: "0.85rem" }}>
            Invest amount (USD)
          </label>
          <input
            type="number"
            value={usd}
            onChange={handleUsdChange}
            min="0"
            step="0.01"
            style={{ padding: "0.4rem 0.5rem", width: "160px" }}
          />
        </div>

        <div>
          <label style={{ display: "block", fontSize: "0.85rem" }}>
            Tokens
          </label>
          <input
            type="number"
            value={tokens}
            onChange={handleTokensChange}
            min="0"
            step="0.01"
            style={{ padding: "0.4rem 0.5rem", width: "160px" }}
          />
        </div>
      </div>

      <p style={{ fontSize: "0.85rem", color: "#666" }}>
        Token price: ${tokenPrice} per token.
      </p>
    </div>
  );
}
