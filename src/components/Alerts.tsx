export default function Alerts() {
  return (
    <div className="bg-red-100 border-l-4 border-red-600 p-4 rounded">
      <h2 className="text-lg font-semibold mb-2 text-red-700">⚠️ Alerta</h2>
      <p className="text-red-600 font-bold">Risco de geada nas próximas 48h!</p>
      <p className="text-sm text-gray-700">
        Temperaturas abaixo de 3ºC previstas na região.
      </p>
    </div>
  );
}
