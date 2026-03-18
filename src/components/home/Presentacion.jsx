export default function Presentacion() {
  const pasos = [
    {
      nro: "01",
      titulo: "Elegí el tamaño",
      desc: "Desde una unidad para el antojo hasta cajas de 12 para compartir (o no).",

    },
    {
      nro: "02",
      titulo: "Armá tu mix",
      desc: "Combiná sabores clásicos y premium. ¡El límite lo pone tu caja!",

    },
    {
      nro: "03",
      titulo: "Directo al WhatsApp",
      desc: "Recibimos tu pedido al instante para coordinar la entrega o retiro.",

    }
  ];

  return (
    <section className="py-24 bg-[var(--c-secundary)]/10 overflow-hidden relative">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--c-secundary)]/5 -skew-x-12 transform origin-top" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabecera Refinada */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-[var(--c-gray)] uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
              Proceso Simple
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[var(--c-primary)] tracking-tighter leading-none">
              ¿Cómo pedir tus <br /> 
              <span className="italic font-serif text-[var(--c-graylite)]">alfajores?</span>
            </h2>
          </div>
          <div className="h-px flex-grow bg-[var(--c-secundary)]/30 mb-4 hidden md:block mx-8"></div>
          <p className="text-[var(--c-primary)] opacity-60 font-medium italic text-sm md:text-base md:max-w-[200px]">
            Tres pasos para tener la dulzura en tus manos.
          </p>
        </div>

        {/* Grid de Pasos */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          
          {/* Línea conectora visual (solo en desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-[var(--c-secundary)]/40 -z-10" />

          {pasos.map((paso, index) => (
            <div 
              key={index} 
              className="
                group relative p-10 rounded-[3rem] bg-white border border-[var(--c-secundary)]/20 
                hover:border-[var(--c-primary)]/20 hover:shadow-[0_20px_50px_-20px_rgba(46,52,88,0.1)] 
                transition-all duration-500 ease-out flex flex-col items-start
              "
            >
              {/* Número y Icono */}
              <div className="w-full flex justify-between items-center mb-10">
                
                <span className="text-5xl font-black text-[var(--c-primary)] group-hover:text-[var(--c-primary)] transition-colors duration-500 leading-none select-none italic">
                  {paso.nro}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[var(--c-primary)] tracking-tight">
                  {paso.titulo}
                </h3>
                
                <p className="text-[var(--c-gray)] leading-relaxed text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {paso.desc}
                </p>
              </div>

              {/* Indicador de progreso lateral interno */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-1 h-0 bg-[var(--c-primary)]/20 group-hover:h-12 transition-all duration-700 rounded-full" />
            </div>
          ))}

        </div>

        {/* Call to Action Final */}
        <div className="mt-20 text-center">
           <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[var(--c-secundary)]/30 text-[var(--c-primary)] text-xs font-bold uppercase tracking-widest shadow-sm">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             Atención inmediata de Lunes a Sábados
           </div>
        </div>
      </div>
    </section>
  );
}