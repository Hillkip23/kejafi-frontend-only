// app/properties/[id]/page.jsx
import React from "react";
import Link from "next/link";
import TokenCalculator from "./TokenCalculator";

const API_URL = process.env.NEXT_PUBLIC_KEJAFI_API_BASE || "https://kejafi-api.onrender.com";

async function fetchProperty(id) {
  const res = await fetch(`${API_URL}/properties/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch property ${id}: ${res.status}`);
  }

  return res.json();
}

export default async function PropertyPage({ params }) {
  const { id } = await params;

  const data = await fetchProperty(id);

  // for now, hard‑code min ticket as 10 tokens; you can move this to API later
  const minTokens = 10;
  const minUsd = data.token_price * minTokens;

  return (
    <main style={{ maxWidth: 900, margin: "2rem auto", padding: "1.5rem" }}>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>{data.id}</p>

      <h1 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
        {data.address}
      </h1>
      <p style={{ marginBottom: "1rem", color: "#444" }}>
        {data.county} · {data.metro}
      </p>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2>Valuation</h2>
        <ul>
          <li>List price: ${data.list_price.toLocaleString()}</li>
          <li>NOI: ${Math.round(data.noi).toLocaleString()}</li>
          <li>Cap rate: {(data.cap_rate * 100).toFixed(2)}%</li>
          <li>IRR: {(data.irr * 100).toFixed(2)}%</li>
          <li>Equity multiple: {data.equity_multiple.toFixed(2)}x</li>
        </ul>
      </section>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2>Metro fundamentals</h2>
        <ul>
          <li>
            PCI 2023:{" "}
            {data.pci_2023 != null
              ? `$${data.pci_2023.toLocaleString()}`
              : "n/a"}
          </li>
          <li>
            Pop growth 13–17 → 18–22:{" "}
            {data.pop_growth != null
              ? `${(data.pop_growth * 100).toFixed(1)}%`
              : "n/a"}
          </li>
          <li>
            Housing elasticity:{" "}
            {data.metro_elasticity != null
              ? data.metro_elasticity.toFixed(2)
              : "n/a"}
          </li>
          <li>Supply bucket: {data.supply_bucket ?? "n/a"}</li>
          <li>
            Kejafi metro risk score:{" "}
            {data.risk_score != null
              ? `${data.risk_score.toFixed(0)}/100 (${data.risk_bucket})`
              : "n/a"}
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2>Tokenization terms</h2>
        <ul>
          <li>Token symbol: {data.token_symbol}</li>
          <li>Token price: ${data.token_price}</li>
          <li>Total supply: {data.total_supply.toLocaleString()}</li>
          <li>Lockup: {data.lockup_months} months</li>
        </ul>

        <TokenCalculator tokenPrice={data.token_price} />

        <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.75rem" }}>
          Minimum ticket size: {minTokens} tokens (≈ $
          {minUsd.toLocaleString()}).
        </p>

        <div style={{ marginTop: "1rem" }}>
          <Link
            href={`/properties/${data.id}/checkout`}
            style={{
              display: "inline-block",
              padding: "0.6rem 1.2rem",
              borderRadius: 6,
              backgroundColor: "#111827",
              color: "white",
              textDecoration: "none",
            }}
          >
            Proceed to buy
          </Link>
        </div>
      </section>

      <section>
        <h2>Marketplace link</h2>
        <p>
          Canonical URL:{" "}
          <a href={data.public_url} target="_blank" rel="noreferrer">
            {data.public_url}
          </a>
        </p>
        <p style={{ fontSize: "0.85rem", color: "#777" }}>
          is_published: {data.is_published ? "yes" : "no"}
        </p>
      </section>
    </main>
  );
}
