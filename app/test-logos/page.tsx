export default function TestLogos() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Logo Test Page</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border p-4">
          <h2 className="text-lg font-semibold mb-2">Bizinc.io Logo</h2>
          <img src="/logos/bizinc.png" alt="Bizinc.io" className="h-16" />
        </div>
        <div className="border p-4">
          <h2 className="text-lg font-semibold mb-2">Bristlecone Logo</h2>
          <img src="/logos/Bristlecone-Logo-White.png" alt="Bristlecone" className="h-16" />
        </div>
        <div className="border p-4">
          <h2 className="text-lg font-semibold mb-2">Binghamton University Logo</h2>
          <img src="/logos/binghamton.jpeg" alt="Binghamton University" className="h-16" />
        </div>
        <div className="border p-4">
          <h2 className="text-lg font-semibold mb-2">Pune University Logo</h2>
          <img src="/logos/pune.png" alt="Pune University" className="h-16" />
        </div>
      </div>
    </div>
  );
}
