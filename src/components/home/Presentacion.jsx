export default function Presentacion() {
  const pasos = [
    {
      nro: "01",
      titulo: "Elegí el tamaño",
      desc: "Llevate desde una unidad hasta una docena completa para compartir (o no).",
      icono: "📦"
    },
    {
      nro: "02",
      titulo: "Armá tu mix",
      desc: "Combiná sabores clásicos y premium. ¡El límite es el tamaño de tu caja!",
      icono: "✨"
    },
    {
      nro: "03",
      titulo: "Directo al WhatsApp",
      desc: "Recibimos tu pedido al instante para coordinar la entrega o retiro.",
      icono: "💬"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabecera de sección */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-(--c-primary) font-bold uppercase tracking-[0.2em] text-xs">
            Experiencia CT
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-(--c-primary) tracking-tight">
            ¿Cómo pedir tus alfajores?
          </h2>
          <div className="h-1 w-20 bg-(--c-primary) mx-auto rounded-full opacity-20"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {pasos.map((paso, index) => (
            <div 
              key={index} 
              className="group relative p-10 rounded-[2.5rem] bg-(--c-graylite)/5 border border-transparent hover:border-(--c-primary)/10 hover:bg-white hover:shadow-2xl hover:shadow-(--c-primary)/5 transition-all duration-500"
            >
              {/* Número de fondo decorativo */}
              <span className="absolute top-6 right-8 text-6xl font-black text-(--c-primary)/5 group-hover:text-(--c-primary)/10 transition-colors">
                {paso.nro}
              </span>

              <div className="relative z-10 space-y-5">
                <div className="w-14 h-14 bg-(--c-primary)/10 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {paso.icono}
                </div>
                
                <h3 className="text-2xl font-bold text-(--c-primary)">
                  {paso.titulo}
                </h3>
                
                <p className="text-(--c-gray) leading-relaxed text-sm">
                  {paso.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Decoración sutil inferior */}
        <div className="mt-20 text-center">
          <p className="text-sm italic text-(--c-gray) opacity-60">
            * Tomamos pedidos todos los días hasta las 20hs.
          </p>
        </div>

      </div>
    </section>
  );
}