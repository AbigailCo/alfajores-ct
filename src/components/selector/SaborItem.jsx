export default function SaborItem({
  sabor,
  cantidad,
  agregar,
  quitar
}) {
  const tieneSeleccion = cantidad > 0;

  return (
    <div className={`
      relative p-4 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between h-full
      ${tieneSeleccion 
        ? "border-[var(--c-primary)] bg-white shadow-sm ring-1 ring-[var(--c-primary)]/10" 
        : "border-[var(--c-secundary)]/20 bg-gray-50/50 hover:border-[var(--c-graylite)]/50"}
    `}>
      
      {/* Etiqueta del Sabor */}
      <div className={`
        text-sm font-bold leading-tight mb-4
        ${tieneSeleccion ? "text-[var(--c-primary)]" : "text-[var(--c-gray)]"}
      `}>
        {sabor}
      </div>

      {/* Controles de Cantidad */}
      <div className="flex items-center justify-between bg-white rounded-xl border border-[var(--c-secundary)]/30 p-1 shadow-inner">
        
        <button
          onClick={quitar}
          disabled={cantidad === 0}
          className={`
            w-8 h-8 rounded-lg flex items-center justify-center transition-colors
            ${cantidad === 0 
              ? "text-gray-300 cursor-not-allowed" 
              : "text-[var(--c-primary)] hover:bg-[var(--c-secundary)]/20 active:scale-90"}
          `}
        >
          <span className="text-xl font-bold">-</span>
        </button>

        <span className={`
          text-base font-bold tabular-nums
          ${tieneSeleccion ? "text-[var(--c-primary)]" : "text-[var(--c-gray)]"}
        `}>
          {cantidad}
        </span>

        <button
          onClick={agregar}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--c-primary)] hover:bg-[var(--c-secundary)]/20 active:scale-90 transition-colors"
        >
          <span className="text-xl font-bold">+</span>
        </button>

      </div>

      {/* Badge flotante de cantidad (Opcional, muy visual) */}
      {tieneSeleccion && (
        <div className="absolute -top-2 -right-2 bg-[var(--c-primary)] text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in">
          {cantidad}
        </div>
      )}
    </div>
  );
}