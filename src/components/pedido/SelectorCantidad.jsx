export default function SelectorCantidad({ cantidad, setCantidad }) {
  const opciones = [
    { label: "Unidad", value: 1, sub: "Para el antojo" },
    { label: "Media Docena", value: 6, sub: "Para compartir" },
    { label: "Docena", value: 12, sub: "Para fanáticos" },
  ];

  return (
    <div className="w-full">
      {/* Grid: 1 columna en móvil, 3 en tablets/desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {opciones.map((op) => {
          const isActive = cantidad === op.value;
          
          return (
            <button
              key={op.value}
              onClick={() => setCantidad(op.value)}
              className={`
                relative overflow-hidden group transition-all duration-300 
                flex md:flex-col items-center justify-start md:justify-center 
                gap-4 md:gap-1 border-2 p-4 md:p-6 rounded-3xl md:rounded-4xl
                ${
                  isActive
                    ? "bg-(--c-primary) border-(--c-primary) text-white shadow-lg md:scale-[1.02]"
                    : "bg-white border-gray-100 text-(--c-primary) hover:border-(--c-primary)/30"
                }
              `}
            >
              {/* Badge sutil - Solo visible en desktop o ajustado para móvil */}
              {op.value === 12 && (
                <span className={`
                  absolute top-2 right-2 text-[8px] md:text-[10px] font-black uppercase px-2 py-0.5 rounded-full 
                  ${isActive ? 'bg-white text-(--c-primary)' : 'bg-(--c-primary) text-white'}
                `}>
                  Más vendido
                </span>
              )}

              {/* Número de cantidad */}
              <span className={`
                text-2xl md:text-3xl font-black leading-none
                ${isActive ? 'text-white' : 'text-(--c-primary)'}
              `}>
                {op.value}
              </span>
              
              {/* Textos */}
              <div className="flex flex-col items-start md:items-center">
                <span className="font-bold text-xs md:text-sm uppercase tracking-wider leading-tight">
                  {op.label}
                </span>
                <span className={`
                  text-[10px] md:text-xs opacity-70 leading-tight
                  ${isActive ? 'text-white' : 'text-gray-500'}
                `}>
                  {op.sub}
                </span>
              </div>

              {/* Icono decorativo: Solo visible en pantallas grandes para no estorbar en móvil */}
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