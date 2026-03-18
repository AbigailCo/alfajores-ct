import { sabores } from "../../data/sabores";

export default function SaboresSection() {
  const categorias = Object.entries(sabores);

  // Mapeamos los estilos para que usen tu paleta y se sientan coherentes
  const titulos = {
    basicos: {
      label: "Clásicos",
      tagline: "Los de toda la vida",
      accent: "border-[var(--c-secundary)]/40",
      dot: "bg-[var(--c-secundary)]",
    },
    medios: {
      label: "Especiales",
      tagline: "Combinaciones únicas",
      accent: "border-[var(--c-graylite)]/40",
      dot: "bg-[var(--c-graylite)]",
    },
    premium: {
      label: "Premium",
      tagline: "Experiencias gourmet",
      accent: "border-[var(--c-primary)]/20",
      dot: "bg-[var(--c-primary)]",
    },
    golosinas: {
      label: "Golosinas",
      tagline: "Explosión de sabor",
      accent: "border-[var(--c-terciario)]/40",
      dot: "bg-[var(--c-terciario)]",
    },
  };

  return (
    <section id="sabores" className="py-24 bg-white relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[var(--c-secundary)]/10 -skew-y-3 origin-top-left" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabecera Refinada */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-[var(--c-gray)] uppercase tracking-[0.3em] text-[10px] font-bold">
            Nuestra Pastelería
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[var(--c-primary)] tracking-tight">
            Sabores que <span className="text-[var(--c-graylite)] italic font-serif">enamoran</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--c-secundary)] mx-auto rounded-full" />
        </div>

        {/* Grid con mejor espaciado */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categorias.map(([categoria, data]) => {
            const config = titulos[categoria] || titulos.basicos;

            return (
              <div
                key={categoria}
                className={`
                  group flex flex-col h-full p-8 rounded-[3rem] bg-white border shadow-[0_4px_20px_rgba(0,0,0,0.03)] 
                  transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--c-primary)]/5
                  ${config.accent}
                `}
              >
                {/* Título de Categoría */}
                <div className="mb-8 relative">
                  <div className={`w-2 h-2 rounded-full ${config.dot} mb-3`} />
                  <h3 className="text-2xl font-black text-[var(--c-primary)] leading-none">
                    {config.label}
                  </h3>
                  <p className="text-[10px] text-[var(--c-gray)] uppercase tracking-widest mt-2 font-bold opacity-60">
                    {config.tagline}
                  </p>
                </div>

                {/* Lista de Sabores Estilizada */}
                <div className="flex-grow">
                  <ul className="space-y-3">
                    {data.items.map((sabor) => (
                      <li
                        key={sabor}
                        className="flex items-center gap-3 text-[var(--c-primary)] text-sm font-medium group/item"
                      >
                        <span className="w-1 h-1 rounded-full bg-[var(--c-secundary)] group-hover/item:scale-150 transition-transform" />
                        {sabor}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Acción */}
                <div className="mt-10">
                  <a
                    href="#pedido"
                    className="
                      flex items-center justify-between w-full p-4 rounded-2xl
                      bg-gray-50 text-[var(--c-primary)] text-xs font-black uppercase tracking-widest
                      group-hover:bg-[var(--c-primary)] group-hover:text-white transition-all duration-300
                    "
                  >
                    Armar caja
                    <div className="bg-white/20 p-1 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer de sección */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-[var(--c-secundary)] to-transparent" />
          <p className="text-center text-[10px] uppercase font-bold tracking-[0.3em] text-[var(--c-primary)] opacity-40">
            • Hechos a mano en Neuquén •
          </p>
        </div>
      </div>
    </section>
  );
}