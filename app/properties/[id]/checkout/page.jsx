// app/properties/[id]/checkout/page.jsx
import React from "react";
import SwapPanel from "./SwapPanel";

const API_URL = process.env.NEXT_PUBLIC_KEJAFI_API_URL;

async function fetchProperty(id) {
  const res = await fetch(`${API_URL}/properties/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to fetch property ${id}: ${res.status}`);
  return res.json();
}

export default async function CheckoutPage({ params }) {
  const { id } = await params;
  const data = await fetchProperty(id);

  return (
    <main style={{ maxWidth: 900, margin: "2rem auto", padding: "1.5rem" }}>
      <h1 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
        Invest in {data.token_symbol}
      </h1>
      <p style={{ marginBottom: "1.25rem", color: "#555" }}>
        {data.address} · Token price ${data.token_price}, total supply{" "}
        {data.total_supply.toLocaleString()}
      </p>

      <SwapPanel
        tokenPrice={data.token_price}
        tokenSymbol={data.token_symbol}
        propertyId={data.id}
      />
    </main>
  );
}
