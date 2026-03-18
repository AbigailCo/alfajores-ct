export default function ContadorSeleccion({ total, max }) {
  const progreso = (total / max) * 100;
  const estaCompleta = total === max;
  const sePaso = total > max;

  return (
    <div className="sticky top-4 z-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-[var(--c-secundary)]/30 shadow-sm mb-8">
      <div className="flex justify-between items-end mb-2">
        <div>
          <h4 className={`text-xs uppercase tracking-widest font-bold ${estaCompleta ? 'text-green-600' : 'text-[var(--c-gray)]'}`}>
            {estaCompleta ? '¡Caja Lista!' : 'Tu Selección'}
          </h4>
          <p className="text-2xl font-bold text-[var(--c-primary)] tabular-nums">
            {total} <span className="text-[var(--c-secundary)] text-lg">/ {max}</span>
          </p>
        </div>
        
        <div className="text-right">
          <span className={`text-sm font-semibold ${sePaso ? 'text-red-500' : 'text-[var(--c-gray)]'}`}>
            {sePaso ? `Sobran ${total - max}` : `${max - total} restantes`}
          </span>
        </div>
      </div>

      {/* Barra de Progreso */}
      <div className="h-3 w-full bg-[var(--c-secundary)]/20 rounded-full overflow-hidden border border-[var(--c-secundary)]/10">
        <div 
          className={`h-full transition-all duration-500 ease-out rounded-full ${
            sePaso ? 'bg-red-400' : estaCompleta ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]' : 'bg-[var(--c-primary)]'
          }`}
          style={{ width: `${Math.min(progreso, 100)}%` }}
        />
      </div>

      {estaCompleta && (
        <p className="text-[10px] text-center mt-2 text-green-600 font-bold animate-pulse uppercase tracking-tight">
          ¡Perfecto! Ya podés finalizar tu pedido
        </p>
      )}
    </div>
  );
}