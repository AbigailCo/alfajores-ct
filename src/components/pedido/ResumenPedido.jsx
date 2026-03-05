import { obtenerPrecio } from "../../hooks/precios";

export default function ResumenPedido({
  cantidad,
  seleccionados,
  totalSeleccionados,
}) {
  if (!cantidad) return null;

  const items = Object.entries(seleccionados).filter(([_, qty]) => qty > 0);

  const total = items.reduce((acc, [sabor, qty]) => {
    return acc + obtenerPrecio(sabor) * qty;
  }, 0);

  const faltaRellenar = cantidad - totalSeleccionados;

  return (
    <div className="mt-12 overflow-hidden bg-white border border-(--c-primary)/10 rounded-4xl shadow-2xl shadow-(--c-primary)/5">
      
      {/* Cabecera del Resumen */}
      <div className="bg-(--c-primary) px-8 py-4 flex justify-between items-center">
        <h2 className="text-white font-bold uppercase tracking-widest text-sm">
          Tu Selección
        </h2>
        <span className="text-white/80 text-xs font-mono">
          {new Date().toLocaleDateString()}
        </span>
      </div>

      <div className="p-8 space-y-6">

        {/* Estado de la Caja */}
        <div className="flex justify-between items-end border-b border-dashed border-gray-200 pb-6">
          <div className="space-y-1">
            <p className="text-xs text-gray-400 uppercase font-bold tracking-tighter">
              Capacidad de la caja
            </p>
            <p className="text-2xl font-black text-(--c-primary)">
              {cantidad} Alfajores
            </p>
          </div>

          <div className="text-right space-y-1">
            <p className="text-xs text-gray-400 uppercase font-bold tracking-tighter">
              Estado
            </p>
            <p
              className={`text-lg font-mono font-bold ${
                faltaRellenar === 0 ? "text-green-500" : "text-orange-400"
              }`}
            >
              {totalSeleccionados} / {cantidad}
            </p>
          </div>
        </div>

        {/* Lista de Sabores */}
        <div className="space-y-3">
          {items.length > 0 ? (
            <div className="space-y-2">
              {items.map(([sabor, qty]) => {
                const precio = obtenerPrecio(sabor);
                const subtotal = precio * qty;

                return (
                  <div
                    key={sabor}
                    className="flex justify-between items-center group"
                  >
                    <span className="text-(--c-gray) font-medium group-hover:text-(--c-primary) transition-colors">
                      {sabor}
                    </span>

                    <div className="flex-1 border-b border-dotted border-gray-200 mx-2 mb-1"></div>

                    <span className="text-xs text-gray-400 mr-2">
                      ${precio}
                    </span>

                    <span className="font-mono font-bold text-(--c-primary) bg-(--c-primary)/5 px-2 py-0.5 rounded">
                      x{qty}
                    </span>

                    <span className="ml-3 text-sm font-bold text-(--c-primary)">
                      ${subtotal}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center py-4 text-gray-400 italic text-sm">
              Todavía no sumaste sabores a tu caja...
            </p>
          )}
        </div>

        {/* Total del pedido */}
        {items.length > 0 && (
          <div className="border-t pt-4 flex justify-between items-center">
            <span className="font-bold text-(--c-primary)">
              Total estimado
            </span>

            <span className="text-2xl font-black text-(--c-primary)">
              ${total}
            </span>
          </div>
        )}

        {/* Alerta de cantidad */}
        {faltaRellenar > 0 && (
          <div className="bg-orange-50 p-4 rounded-xl flex items-center gap-3 border border-orange-100">
            <span className="text-xl">💡</span>
            <p className="text-xs text-orange-700 font-medium">
              Te faltan{" "}
              <span className="font-bold underline">{faltaRellenar}</span>{" "}
              alfajores para completar tu caja de {cantidad}.
            </p>
          </div>
        )}

        {faltaRellenar < 0 && (
          <div className="bg-red-50 p-4 rounded-xl flex items-center gap-3 border border-red-100">
            <span className="text-xl">⚠️</span>
            <p className="text-xs text-red-700 font-medium">
              Tenés{" "}
              <span className="font-bold underline">
                {Math.abs(faltaRellenar)}
              </span>{" "}
              de más. Sacá algunos para poder pedir.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}