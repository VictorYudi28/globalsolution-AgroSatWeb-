export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">AgroSat Web – Monitoramento Espacial</h1>
      <div className="flex gap-4">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </header>
  );
}
