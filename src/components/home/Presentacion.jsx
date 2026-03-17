export default function Presentacion() {
  const pasos = [
    {
      nro: "01",
      titulo: "Elegí el tamaño",
      desc: "Llevate desde una unidad hasta una docena completa para compartir (o no).",
    },
    {
      nro: "02",
      titulo: "Armá tu mix",
      desc: "Combiná sabores clásicos y premium. ¡El límite es el tamaño de tu caja!",
    },
    {
      nro: "03",
      titulo: "Directo al WhatsApp",
      desc: "Recibimos tu pedido al instante para coordinar la entrega o retiro.",
    }
  ];

  return (
    <section className="py-20 bg-(--c-secundary) overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabecera de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-(--c-primary) tracking-tighter mb-4">
            ¿Cómo pedir tus alfajores?
          </h2>
          <div className="h-1.5 w-16 bg-(--c-primary) mx-auto rounded-full opacity-30"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          
          {pasos.map((paso, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-(--c-primary)/5 hover:border-(--c-primary)/20 hover:bg-white hover:shadow-xl transition-all duration-500 ease-out"
            >
              {/* Indicador numérico refinado */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-sm font-bold tracking-widest text-(--c-primary) opacity-50 uppercase">
                  Paso {paso.nro}
                </span>
                <span className="text-7xl font-black text-(--c-primary)/5 group-hover:text-(--c-primary)/10 transition-colors duration-500 leading-none select-none">
                  {paso.nro}
                </span>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="text-2xl font-bold text-(--c-primary) group-hover:translate-x-1 transition-transform duration-300">
                  {paso.titulo}
                </h3>
                
                <p className="text-(--c-primary)/80 leading-relaxed text-sm antialiased">
                  {paso.desc}
                </p>
              </div>

              {/* Detalle decorativo inferior */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-(--c-primary) group-hover:w-full transition-all duration-500 rounded-b-3xl opacity-40"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}