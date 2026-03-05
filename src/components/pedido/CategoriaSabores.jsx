export default function CategoriaSabores({
  titulo,
  sabores,
  precio,
  seleccionados,
  agregarSabor,
  quitarSabor,
  disabled,
}) {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Título de categoría con precio adaptable */}
      <h3 className="text-lg md:text-xl font-black text-(--c-primary) uppercase tracking-tighter italic flex flex-wrap items-center gap-2">
        <span>{titulo}</span>
        <span className="text-(--c-primary)/40 font-bold text-sm md:text-base">
          — ${precio}
        </span>
      </h3>

      <div className="grid gap-2 md:gap-3">
        {sabores.map((sabor) => {
          const cantidad = seleccionados[sabor] || 0;
          const hasItems = cantidad > 0;

          return (
            <div
              key={sabor}
              className={`
                flex justify-between items-center px-4 md:px-5 py-3 md:py-4 rounded-3xl transition-all duration-300
                ${
                  hasItems
                    ? "bg-(--c-primary)/5 border-2 border-(--c-primary) shadow-sm scale-[1.01] md:scale-100"
                    : "bg-white border-2 border-gray-100"
                }
              `}
            >
              {/* Info del Sabor */}
              <div className="flex flex-col pr-2">
                <span
                  className={`text-sm md:text-base font-bold leading-tight ${
                    hasItems ? "text-(--c-primary)" : "text-gray-700"
                  }`}
                >
                  {sabor}
                </span>
                {hasItems && (
                  <span className="text-[9px] md:text-[10px] font-black uppercase text-(--c-primary)/60 animate-pulse mt-0.5">
                    En tu caja
                  </span>
                )}
              </div>

              {/* Controles de Cantidad */}
              <div className="flex items-center gap-1 bg-gray-50 rounded-full p-1 border border-gray-100 scale-90 md:scale-100 origin-right">
                <button
                  onClick={() => quitarSabor(sabor)}
                  disabled={cantidad === 0}
                  className={`
                    w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all
                    ${
                      cantidad === 0
                        ? "text-gray-300 cursor-not-allowed"
                        : "bg-white text-(--c-primary) shadow-sm active:bg-red-50 active:text-red-500"
                    }
                  `}
                >
                  <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                  </svg>
                </button>

                <div className="w-7 md:w-8 text-center font-black text-base md:text-lg text-(--c-primary)">
                  {cantidad}
                </div>

                <button
                  onClick={() => agregarSabor(sabor)}
                  disabled={disabled}
                  className={`
                    w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all
                    ${
                      disabled
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-inner"
                        : "bg-(--c-primary) text-white shadow-md active:scale-90 md:hover:scale-110"
                    }
                  `}
                >
                  <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}