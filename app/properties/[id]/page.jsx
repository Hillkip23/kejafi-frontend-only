import Link from "next/link";

const properties = {
  "charlotte_mfk_001": {
    id: "charlotte_mfk_001",
    address: "1421 N Caldwell St, Charlotte, NC 28206",
    token_symbol: "FINE5",
    token_price: 5.48,
    list_price: 685000,
    noi: 47808,
    cap_rate: 0.0551,
    irr: 0.2523
  }
};

export default async function PropertyPage({ params }) {
  const { id } = await params;
  const data = properties[id];
  
  return (
    <main style={{ maxWidth: 900, margin: "2rem auto", padding: "1.5rem" }}>
      <h1>{data.address}</h1>
      <ul>
        <li>List price: ${data.list_price.toLocaleString()}</li>
        <li>NOI: ${data.noi.toLocaleString()}</li>
        <li>Cap rate: {(data.cap_rate * 100).toFixed(2)}%</li>
        <li>Token: {data.token_symbol} @ ${data.token_price}</li>
      </ul>
      <Link href={`/properties/${data.id}/checkout`}>Buy tokens</Link>
    </main>
  );
}
