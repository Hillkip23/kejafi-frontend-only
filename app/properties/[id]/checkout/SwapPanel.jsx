"use client";

import { useState, useEffect } from "react";

const API_URL = "https://kejafi-api.onrender.com";

export default function SwapPanel({ property }) {
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState(null);
  const [amount, setAmount] = useState("");
  const [reserves, setReserves] = useState({ reserve0: 102342, reserve1: 98939 });

  const handleSwap = async () => {
    setLoading(true);
    try {
      // Your swap logic here
      setTxHash("0xexample_tx_hash");
    } catch (error) {
      console.error("Swap failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <h2 className="text-xl font-bold mb-4">Swap {property?.token_symbol}</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter amount"
        />
      </div>
      <div className="mb-4">
        <p className="font-medium">Pool Reserves:</p>
        <p>FINE5: {reserves.reserve0.toLocaleString()}</p>
        <p>FINE6: {reserves.reserve1.toLocaleString()}</p>
        <p className="text-sm text-gray-500 mt-1">
          Constant product k = {(reserves.reserve0 * reserves.reserve1).toLocaleString()}
        </p>
      </div>
      <button
        onClick={handleSwap}
        disabled={loading || !amount}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Swapping..." : "Swap"}
      </button>
      {txHash && (
        <p className="mt-2 text-sm">
          Tx: <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
            {txHash.slice(0, 10)}...
          </a>
        </p>
      )}
    </div>
  );
}
