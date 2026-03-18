export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-white min-h-screen flex items-center overflow-hidden relative md:pt-0"
    >
      {/* Fondo Orgánico con iluminación de estudio */}
      <div className="absolute inset-0 bg-gradient-radial from-[var(--c-secundary)]/20 via-white to-white opacity-60" />

      {/* Elementos decorativos de fondo para dar profundidad (reubicados) */}
      <div className="absolute -top-10 -left-20 w-96 h-96 bg-[var(--c-primary)] opacity-[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--c-secundary)] opacity-[0.04] rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-16 md:gap-20 items-center relative z-10">
        
        {/* Lado Izquierdo: Texto y Acciones (mejor espaciado y jerarquía) */}
        <div className="space-y-10 md:space-y-12 animate-fade-in-up text-center md:text-left order-2 md:order-1">
          
          <span className="inline-block text-[var(--c-gray)] uppercase tracking-[0.3em] text-[10px] font-bold">
            Pastelería Artesanal en Neuquén
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-[var(--c-primary)] leading-[1.05] tracking-tighter relative group">
            El placer de un <br className="hidden md:block" />
            <span className="relative">
              <span className="italic font-serif text-[var(--c-graylite)] tracking-tight">buen</span>
              {' '}alfajor.
              {/* Efecto Shimmer en el título al cargar */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_ease-out]" />
            </span>
          </h1>

          <p className="text-base md:text-xl text-[var(--c-primary)] leading-relaxed max-w-lg mx-auto md:mx-0 opacity-80 font-medium">
            Textura suave, relleno generoso y ese toque artesanal que estabas buscando. **Armá tu caja a medida** y recibila en casa.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-4">
            <a
              href="#pedido"
              className="
                group relative flex items-center justify-center gap-3
                bg-gradient-to-r from-[var(--c-primary)] to-[#3d4574]
                text-white px-10 py-5 rounded-2xl font-bold text-lg
                shadow-[0_10px_20px_-10px_rgba(46,52,88,0.4)]
                hover:shadow-[0_15px_25px_-5px_rgba(46,52,88,0.3)]
                hover:-translate-y-1 active:scale-95
                transition-all duration-300
                overflow-hidden
              "
            >
              <span className="relative z-10">Empezar mi pedido</span>
              {/* Efecto de destello al pasar el mouse */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1s_infinite]" />
            </a>
            
            <a
              href="#sabores"
              className="
                inline-flex items-center justify-center gap-2
                bg-[var(--c-secundary)]/10 text-[var(--c-primary)] px-10 py-5 rounded-2xl 
                font-bold text-lg border border-[var(--c-primary)]/5
                hover:bg-[var(--c-secundary)]/20 hover:border-[var(--c-primary)]/10 
                transition-all duration-300 text-center
              "
            >
              Ver Sabores
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Lado Derecho: Imagen Principal (más "Gallery" y orgánica) */}
        <div className="relative order-1 md:order-2 flex justify-center items-center">
          {/* Círculo de luz detrás de la imagen (más suave) */}
          <div className="absolute w-[130%] h-[130%] bg-[var(--c-secundary)]/30 rounded-full blur-3xl scale-110 opacity-70"></div>
          
          <div className="relative w-full max-w-[340px] sm:max-w-xl aspect-[4/5] transform-gpu">
            {/* El Marco Estilo Galería Premium */}
            <div className="
              relative w-full h-full bg-white rounded-[3rem] md:rounded-[4rem] 
              shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden 
              border-[8px] md:border-[16px] border-white 
              transform md:rotate-2 hover:rotate-0 transition-all duration-700 
              group shadow-[var(--c-primary)]/5
            ">
              <img 
                src='/portada.png' 
                alt="Alfajores Camila Tisnado"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Micro-leyenda integrada en la imagen */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-sm p-3 rounded-2xl text-center border border-white/40">
                <p className="text-xs font-medium text-[var(--c-primary)] opacity-90">
                  Nuestra variedad de chocolate negro con dulce de leche.
                </p>
              </div>
            </div>
            
            {/* Badge flotante mejorado y reubicado */}
            <div className="
              absolute -top-6 -left-6 md:-top-10 md:-left-10 
              bg-[var(--c-primary)] text-white font-bold 
              p-5 md:p-7 rounded-full shadow-2xl shadow-[var(--c-primary)]/20 
              transform rotate-[-15deg] group-hover:rotate-0
              animate-bounce flex flex-col items-center justify-center 
              leading-none text-xs md:text-sm border-4 border-white
              transition-all duration-500
            ">
              <span className="text-2xl md:text-3xl font-black">100%</span>
              <span className="uppercase tracking-widest text-[9px]">Artesanal</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}