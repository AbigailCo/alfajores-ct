import CajaItem from "./CajaItem";

export default function CajaSelector({ cajas, cajaActiva, onSelect }) {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Cabecera del selector */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-[var(--c-primary)]">
            Paso 1: Elegí el tamaño
          </h2>
          <p className="text-sm text-[var(--c-gray)] font-medium">
            Seleccioná la presentación que prefieras
          </p>
        </div>
        
        {/* Badge de estado (opcional) */}
        {cajaActiva && (
          <span className="bg-[var(--c-primary)] text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-tighter animate-bounce">
            Caja Elegida
          </span>
        )}
      </div>

      {/* Lista de Cajas */}
      <div className="grid gap-4 sm:grid-cols-1">
        {cajas.map((caja) => (
          <CajaItem
            key={caja.id}
            caja={caja}
            activa={cajaActiva?.id === caja.id}
            onClick={() => onSelect(caja)}
          />
        ))}
      </div>

      {/* Sugerencia visual inferior */}
      {!cajaActiva && (
        <div className="mt-4 p-4 border-2 border-dashed border-[var(--c-secundary)]/30 rounded-2xl flex items-center justify-center">
          <p className="text-sm italic text-[var(--c-gray)]/60">
            Toca una opción para empezar a armarla
          </p>
        </div>
      )}
    </div>
  );
}