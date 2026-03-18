import SaborItem from "./SaborItem";

export default function SaboresSelector({
  sabores,
  seleccionados,
  agregar,
  quitar
}) {
  const categorias = Object.entries(sabores);

  return (
    <div className="space-y-12 py-4">
      {categorias.map(([categoria, items]) => (
        <div key={categoria} className="group">
          
          {/* Título de Categoría con Estilo */}
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-lg font-bold text-[var(--c-primary)] capitalize tracking-wide shrink-0">
              {categoria}
            </h3>
            <div className="h-[1px] w-full bg-gradient-to-r from-[var(--c-secundary)]/40 to-transparent" />
          </div>

          {/* Grid de Sabores */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {items.map((sabor) => (
              <SaborItem
                key={sabor}
                sabor={sabor}
                cantidad={seleccionados[sabor] || 0}
                agregar={() => agregar(sabor)}
                quitar={() => quitar(sabor)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}