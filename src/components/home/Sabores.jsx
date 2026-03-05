import { sabores } from "../../data/sabores";

export default function SaboresSection() {
  const categorias = Object.entries(sabores);

  const titulos = {
    basicos: { label: "Clásicos", icon: "✨", color: "border-gray-200", bg: "group-hover:bg-gray-50" },
    medios: { label: "Especiales", icon: "🍫", color: "border-orange-200", bg: "group-hover:bg-orange-50/50" },
    premium: { label: "Premium", icon: "👑", color: "border-yellow-400", bg: "group-hover:bg-yellow-50/50" },
  };

  return (
    <section id="sabores" className="py-20 bg-[var(--c-secundary)] relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--c-primary)] tracking-tight">
            Sabores que enamoran
          </h2>
          <p className="text-[var(--c-primary)] max-w-xl mx-auto italic opacity-80">
            Explorá nuestras variedades y encontrá tu favorito.
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {categorias.map(([categoria, data]) => (
            <div
              key={categoria}
              className={`
                group flex flex-col h-full p-8 rounded-[2.5rem] bg-white border-2 shadow-sm transition-all duration-500
                hover:shadow-xl ${titulos[categoria].color} ${titulos[categoria].bg}
              `}
            >
              {/* Título y Precio */}
              <div className="text-center mb-6">
                <span className="text-3xl block mb-2">{titulos[categoria].icon}</span>
                <h3 className="text-xl font-black text-[var(--c-primary)] uppercase tracking-tight">
                  {titulos[categoria].label}
                </h3>
                <p className="text-sm font-bold text-[var(--c-primary)] opacity-60">
                  ${data.precio} <span className="text-[10px] font-normal uppercase">u.</span>
                </p>
              </div>

              {/* CONTENEDOR DE SABORES (Modo Tags) */}
              <div className="flex-grow">
                <div className="flex flex-wrap justify-center gap-2">
                  {data.items.map((sabor) => (
                    <span
                      key={sabor}
                      className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-[var(--c-gray)] text-xs font-semibold rounded-full group-hover:bg-white group-hover:border-[var(--c-primary)]/20 transition-all"
                    >
                      {sabor}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botón de acción */}
              <div className="mt-8 pt-6 border-t border-dashed border-gray-200">
                <a 
                  href="#pedido" 
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[var(--c-primary)]/5 text-[var(--c-primary)] text-xs font-black uppercase tracking-widest hover:bg-[var(--c-primary)] hover:text-white transition-all"
                >
                  Elegir estos
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Nota al pie */}
        <p className="mt-12 text-center text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--c-primary)] opacity-40">
          • Hechos a mano en Neuquén •
        </p>
      </div>
    </section>
  );
}