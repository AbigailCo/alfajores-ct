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
    <div className="mt-8 md:mt-12 overflow-hidden bg-white border border-(--c-primary)/10 rounded-4xl shadow-2xl shadow-(--c-primary)/5">
      
      {/* Cabecera del Resumen */}
      <div className="bg-(--c-primary) px-6 md:px-8 py-3 md:py-4 flex justify-between items-center">
        <h2 className="text-white font-bold uppercase tracking-widest text-[10px] md:text-sm">
          Tu Selección
        </h2>
        <span className="text-white/60 text-[10px] font-mono">
          {new Date().toLocaleDateString()}
        </span>
      </div>

      <div className="p-5 md:p-8 space-y-6">

        {/* Estado de la Caja */}
        <div className="flex justify-between items-end border-b border-dashed border-gray-100 pb-5">
          <div className="space-y-0.5">
            <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
              Caja de
            </p>
            <p className="text-xl md:text-2xl font-black text-(--c-primary)">
              {cantidad} unidades
            </p>
          </div>

          <div className="text-right space-y-0.5">
            <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
              Progreso
            </p>
            <p
              className={`text-base md:text-lg font-mono font-bold ${
                faltaRellenar === 0 ? "text-green-500" : "text-orange-400"
              }`}
            >
              {totalSeleccionados} / {cantidad}
            </p>
          </div>
        </div>

        {/* Lista de Sabores */}
        <div className="space-y-4">
          {items.length > 0 ? (
            <div className="space-y-3">
              {items.map(([sabor, qty]) => {
                const precio = obtenerPrecio(sabor);
                const subtotal = precio * qty;

                return (
                  <div
                    key={sabor}
                    className="flex flex-col gap-1 md:flex-row md:items-center group"
                  >
                    {/* Nombre del sabor y línea (en desktop) */}
                    <div className="flex items-center flex-1">
                      <span className="text-sm md:text-base text-(--c-gray) font-bold group-hover:text-(--c-primary) transition-colors">
                        {sabor}
                      </span>
                      <div className="hidden md:block flex-1 border-b border-dotted border-gray-200 mx-2 mb-1"></div>
                    </div>

                    {/* Precios y cantidades */}
                    <div className="flex items-center justify-between md:justify-end gap-3">
                      <span className="text-[10px] text-gray-400">
                        ${precio} c/u
                      </span>

                      <span className="font-mono font-black text-(--c-primary) bg-(--c-primary)/5 px-2 py-0.5 rounded text-sm">
                        x{qty}
                      </span>

                      <span className="text-sm md:text-base font-black text-(--c-primary) min-w-15 text-right">
                        ${subtotal}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-6 px-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
               <p className="text-gray-400 italic text-xs md:text-sm">
                Todavía no sumaste sabores a tu caja...
              </p>
            </div>
          )}
        </div>

        {/* Total del pedido */}
        {items.length > 0 && (
          <div className="border-t border-(--c-primary)/10 pt-5 flex justify-between items-center">
            <span className="font-black text-(--c-primary) uppercase text-xs tracking-widest">
              Total estimado
            </span>

            <span className="text-2xl md:text-3xl font-black text-(--c-primary)">
              ${total}
            </span>
          </div>
        )}

       

      </div>
    </div>
  );
}