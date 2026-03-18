export default function CajaItem({ caja, activa, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-5 flex justify-between items-center transition-all duration-300
        border-2 rounded-2xl group relative overflow-hidden
        ${activa 
          ? "border-[var(--c-primary)] bg-[var(--c-secundary)]/10 shadow-md transform scale-[1.02]" 
          : "border-[var(--c-secundary)]/30 hover:border-[var(--c-gray)] hover:bg-white/50"
        }
      `}
    >
      {/* Indicador visual lateral si está activo */}
      {activa && (
        <div className="absolute left-0 top-0 h-full w-1.5 bg-[var(--c-primary)]" />
      )}

      <div className="text-left">
        <h3 className={`
          font-bold text-lg leading-tight transition-colors
          ${activa ? "text-[var(--c-primary)]" : "text-[var(--c-gray)]"}
        `}>
          {caja.label}
        </h3>

        <p className="text-sm font-medium text-[var(--c-gray)]/70 mt-1">
          {caja.peso} • <span className="italic opacity-80">Ideal para regalo</span>
        </p>
      </div>

      <div className="flex flex-col items-end">
        <span className={`
          text-xl font-bold tracking-tight
          ${activa ? "text-[var(--c-primary)]" : "text-[var(--c-terciario)]"}
        `}>
          ${caja.precio.toLocaleString("es-AR")}
        </span>
        {activa && (
          <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--c-primary)] opacity-60">
            Seleccionado
          </span>
        )}
      </div>
    </button>
  );
}