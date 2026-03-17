import { sabores } from "../../data/sabores";

export default function SaboresSection() {
  const categorias = Object.entries(sabores);

  const titulos = {
    basicos: {
      label: "Clásicos",
      color: "border-gray-200",
      bg: "group-hover:bg-gray-50",
    },
    medios: {
      label: "Especiales",
      color: "border-orange-200",
      bg: "group-hover:bg-orange-50/50",
    },
    premium: {
      label: "Premium",
      color: "border-yellow-400",
      bg: "group-hover:bg-yellow-50/50",
    },
    golosinas: {
      label: "Golosinas",
      color: "border-pink-300",
      bg: "group-hover:bg-pink-50",
    },
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

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {categorias.map(([categoria, data]) => {
            const config = titulos[categoria];

            return (
              <div
                key={categoria}
                className={`
                  group flex flex-col h-full p-8 rounded-[2.5rem] bg-white border-2 shadow-sm transition-all duration-500
                  hover:shadow-xl ${config.color} ${config.bg}
                `}
              >
                {/* Título */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-black text-[var(--c-primary)] uppercase tracking-tight">
                    {config.label}
                  </h3>

                  <p className="text-xs text-[var(--c-gray)] italic mt-1">
                    Disponible en nuestras cajas personalizadas
                  </p>
                </div>

                {/* Sabores */}
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

                {/* Botón */}
                <div className="mt-8 pt-6 border-t border-dashed border-gray-200">
                  <a
                    href="#pedido"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[var(--c-primary)]/5 text-[var(--c-primary)] text-xs font-black uppercase tracking-widest hover:bg-[var(--c-primary)] hover:text-white transition-all"
                  >
                    Armar mi caja
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota */}
        <p className="mt-12 text-center text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--c-primary)] opacity-40">
          • Hechos a mano en Neuquén •
        </p>
      </div>
    </section>
  );
}