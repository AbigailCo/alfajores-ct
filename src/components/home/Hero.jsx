export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-(--c-secundary) min-h-screen flex items-center overflow-hidden relative md:pt-0"
    >
      {/* Elementos decorativos de fondo para dar profundidad */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-(--c-primary) opacity-[0.03] rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ab8c75] opacity-[0.05] rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        
        {/* Lado Izquierdo: Texto y Acciones */}
        <div className="space-y-8 md:space-y-10 animate-fade-in-up text-center md:text-left order-2 md:order-1">
          
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-(--c-primary) leading-[1.1] tracking-tight">
            El placer de un <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--c-primary) to-[#ab8c75]">
              buen alfajor.
            </span>
          </h1>

          <p className="text-base md:text-xl text-(--c-gray) leading-relaxed max-w-md mx-auto md:mx-0 opacity-90">
            Textura suave, relleno generoso y ese toque artesanal que estabas buscando en Neuquén. **Armá tu caja a medida.**
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#pedido"
              className="group relative inline-block bg-(--c-primary) text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-(--c-primary)/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 text-center overflow-hidden"
            >
              <span className="relative z-10">Empezar mi pedido</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a
              href="#sabores"
              className="inline-block bg-white/40 backdrop-blur-md border border-(--c-primary)/10 text-(--c-primary) px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:border-(--c-primary) transition-all duration-300 text-center"
            >
              Ver Sabores
            </a>
          </div>
        </div>

        {/* Lado Derecho: Imagen Principal */}
        <div className="relative order-1 md:order-2 flex justify-center items-center">
          {/* Círculo de luz detrás de la imagen */}
          <div className="absolute w-[120%] h-[120%] bg-white/40 rounded-full blur-3xl scale-110 animate-pulse"></div>
          
          <div className="relative w-full max-w-[320px] sm:max-w-md aspect-square">
            {/* El Marco Estilo Galería */}
            <div className="relative w-full h-full bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl overflow-hidden border-[6px] md:border-[12px] border-white transform md:rotate-3 hover:rotate-0 transition-all duration-700 group shadow-(--c-primary)/10">
              <img 
                src='/portada.png' 
                alt="Alfajores Camila Tisnado"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay suave al hacer hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            </div>
            
            {/* Badge flotante mejorado */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-yellow-400 text-yellow-950 font-black p-4 md:p-6 rounded-full shadow-2xl transform -rotate-12 animate-bounce flex flex-col items-center justify-center leading-none text-xs md:text-sm border-4 border-white">
              <span className="text-lg md:text-xl">100%</span>
              <span>RELLENO</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}