import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">🏘️ Kejafi</h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Tokenized Real Estate Swap Platform
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pool Reserves</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-sm text-gray-600">FINE5 (Property A)</p>
              <p className="text-2xl font-bold">102,342</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <p className="text-sm text-gray-600">FINE6 (Property B)</p>
              <p className="text-2xl font-bold">98,939</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Constant product k = x · y ≈ 10,125,615,138
          </p>
        </div>
        
        <div className="text-center">
          <Link 
            href="/properties/charlotte_mfk_001" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Launch Swap Interface →
          </Link>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Connected to Sepolia Testnet</p>
          <p>API: https://kejafi-api.onrender.com</p>
        </div>
      </div>
    </main>
  );
}
