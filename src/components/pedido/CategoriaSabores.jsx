export default function CategoriaSabores({
  titulo,
  sabores,
  precio,
  seleccionados,
  agregarSabor,
  quitarSabor,
  disabled, // Recibimos la prop que definimos en el padre
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-black text-(--c-primary) uppercase tracking-tighter italic">
        {titulo} – ${precio}
      </h3>

      <div className="grid gap-3">
        {sabores.map((sabor) => {
          const cantidad = seleccionados[sabor] || 0;
          const hasItems = cantidad > 0;

          return (
            <div
              key={sabor}
              className={`
                              flex justify-between items-center px-5 py-4 rounded-3xl transition-all duration-300
                              ${
                                hasItems
                                  ? "bg-(--c-primary)/5 border-2 border-(--c-primary) shadow-sm"
                                  : "bg-white border-2 border-gray-100 hover:border-gray-200"
                              }
              `}
            >
              <div className="flex flex-col">
                <span
                  className={`font-bold ${hasItems ? "text-(--c-primary)" : "text-gray-700"}`}
                >
                  {sabor}
                </span>
                {hasItems && (
                  <span className="text-[10px] font-black uppercase text-(--c-primary)/60 animate-pulse">
                    En tu caja
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 bg-gray-50 rounded-full p-1 border border-gray-100">
                <button
                  onClick={() => quitarSabor(sabor)}
                  disabled={cantidad === 0}
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-all
                    ${
                      cantidad === 0
                        ? "text-gray-300 cursor-not-allowed"
                        : "bg-white text-(--c-primary) shadow-sm hover:bg-red-50 hover:text-red-500"
                    }
                  `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M20 12H4"
                    />
                  </svg>
                </button>

                <div className="w-8 text-center font-black text-lg text-(--c-primary)">
                  {cantidad}
                </div>

                <button
                  onClick={() => agregarSabor(sabor)}
                  disabled={disabled}
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-all
                    ${
                      disabled
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-(--c-primary) text-white shadow-md hover:scale-110 active:scale-95"
                    }
                  `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 4v16m8-8H4"
                    />
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
