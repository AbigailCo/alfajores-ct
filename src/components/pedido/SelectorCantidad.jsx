import { cajas } from "../../data/cajas";

export default function SelectorCantidad({ caja, setCaja }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {cajas.map((op) => {
          const isActive = caja?.id === op.id;

          return (
            <button
              key={op.id}
              onClick={() => setCaja(op)}
              className={`
                relative overflow-hidden group transition-all duration-300
                flex md:flex-col items-center justify-start md:justify-center
                gap-4 md:gap-2 border-2 p-4 md:p-6 rounded-3xl md:rounded-4xl
                ${
                  isActive
                    ? "bg-(--c-primary) border-(--c-primary) text-white shadow-lg md:scale-[1.02]"
                    : "bg-white border-gray-100 text-(--c-primary) hover:border-(--c-primary)/30"
                }
              `}
            >
              {/* Badge */}
              {op.cantidad === 12 && (
                <span
                  className={`
                  absolute top-2 right-2 text-[8px] md:text-[10px] font-black uppercase px-2 py-0.5 rounded-full
                  ${
                    isActive
                      ? "bg-white text-(--c-primary)"
                      : "bg-(--c-primary) text-white"
                  }
                `}
                >
                  Más vendido
                </span>
              )}

              {/* Cantidad */}
              <span
                className={`
                text-2xl md:text-3xl font-black leading-none
                ${isActive ? "text-white" : "text-(--c-primary)"}
              `}
              >
                {op.cantidad}
              </span>

              {/* Textos */}
              <div className="flex flex-col items-start md:items-center">
                <span className="font-bold text-xs md:text-sm uppercase tracking-wider leading-tight">
                  {op.label}
                </span>

                <span
                  className={`
                  text-[10px] md:text-xs opacity-70
                  ${isActive ? "text-white" : "text-gray-500"}
                `}
                >
                  {op.peso}
                </span>

                <span
                  className={`
                  text-sm md:text-base font-black
                  ${isActive ? "text-white" : "text-(--c-primary)"}
                `}
                >
                  ${op.precio.toLocaleString("es-AR")}
                </span>
              </div>

              {/* decoración */}
              {isActive && (
                <div className="hidden md:block absolute -bottom-2 -right-2 text-white/10 text-6xl font-black rotate-12">
                  🍪
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}