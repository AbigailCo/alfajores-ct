export default function BotonWhatsApp({
  cantidad,
  generarMensaje,
  total,
}) {
  if (!cantidad) return null;

 const habilitado = total === cantidad;

  return (
    <div className="mt-8 text-center">
      <a
        href={habilitado ? generarMensaje() : "#"}
        target="_blank"
        className={`inline-block px-8 py-3 rounded-xl font-semibold transition
          ${
            habilitado
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
      >
        Enviar pedido por WhatsApp
      </a>

      {!habilitado && (
        <p className="text-sm text-gray-500 mt-3">
          Debés completar la cantidad seleccionada.
        </p>
      )}
    </div>
  );
}