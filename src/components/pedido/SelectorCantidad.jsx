export default function SelectorCantidad({ cantidad, setCantidad }) {
  const opciones = [
    { label: "Unidad", value: 1, sub: "Para el antojo" },
    { label: "Media Docena", value: 6, sub: "Para compartir" },
    { label: "Docena", value: 12, sub: "Para fanáticos" },
  ];

  return (
    <div className="space-y-8">
      {/* Eliminamos el H2 de aquí porque ya lo pusimos en el contenedor padre PedidoSection, 
          así evitamos repetir títulos y mantenemos la limpieza visual. */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {opciones.map((op) => {
          const isActive = cantidad === op.value;
          
          return (
            <button
              key={op.value}
              onClick={() => setCantidad(op.value)}
              className={`
                relative overflow-hidden group p-6 rounded-[2rem] transition-all duration-300 
                flex flex-col items-center justify-center gap-1 border-2
                ${
                  isActive
                    ? "bg-[var(--c-primary)] border-[var(--c-primary)] text-white shadow-xl shadow-[var(--c-primary)]/20 scale-[1.02]"
                    : "bg-white border-gray-100 text-[var(--c-primary)] hover:border-[var(--c-primary)]/30 hover:shadow-lg"
                }
              `}
            >
              {/* Badge sutil para la opción más popular (opcional) */}
              {op.value === 12 && (
                <span className={`absolute top-3 right-3 text-[10px] font-black uppercase px-2 py-1 rounded-full ${isActive ? 'bg-white text-[var(--c-primary)]' : 'bg-[var(--c-primary)] text-white'}`}>
                  Best Value
                </span>
              )}

              <span className={`text-3xl font-black ${isActive ? 'text-white' : 'text-[var(--c-primary)]'}`}>
                {op.value}
              </span>
              
              <span className="font-bold text-sm uppercase tracking-wider">
                {op.label}
              </span>
              
              <span className={`text-xs opacity-70 ${isActive ? 'text-white' : 'text-gray-500'}`}>
                {op.sub}
              </span>

              {/* Efecto de fondo al estar activo */}
              {isActive && (
                <div className="absolute -bottom-2 -right-2 text-white/10 text-6xl font-black rotate-12">
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