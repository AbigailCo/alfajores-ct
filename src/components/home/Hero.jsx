export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-(--c-secundary) min-h-[90vh] flex items-center overflow-hidden relative"
    >
      {/* Decoración de fondo (opcional para dar textura) */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-(--c-primary) opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Texto y CTA */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 bg-(--c-primary)/10 text-(--c-primary) rounded-full text-xs font-bold uppercase tracking-widest">
            ✨ Recetas Tradicionales
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-(--c-primary) leading-[1.1] tracking-tight">
            El placer de un <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--c-primary) to-[#ab8c75]">
              buen alfajor.
            </span>
          </h1>

          <p className="text-xl text-(--c-gray) leading-relaxed max-w-md">
            Textura suave, relleno generoso y ese toque artesanal que estabas buscando. Armá tu caja a medida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pedido"
              className="inline-block bg-(--c-primary) text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-(--c-primary)/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 text-center"
            >
              Empezar mi pedido
            </a>
            <a
              href="#sabores"
              className="inline-block bg-white/50 backdrop-blur-sm border border-(--c-primary)/20 text-(--c-primary) px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 text-center"
            >
              Ver Sabores
            </a>
          </div>
        </div>

        {/* Imagen con efectos visuales */}
        <div className="relative">
          {/* El "Blob" de fondo para la imagen */}
          <div className="absolute inset-0 bg-(--c-primary) opacity-10 blur-2xl rounded-full transform scale-110"></div>
          
          <div className="relative w-full aspect-square max-w-md mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer group">
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-(--c-gray) group-hover:scale-110 transition-transform duration-700">
              {/* Aquí iría tu <img src="..." /> */}
              <span className="text-center px-10 italic">
                [ Foto en alta resolución de un alfajor partido al medio ]
              </span>
            </div>
            
            {/* Badge flotante */}
            <div className="absolute bottom-6 right-6 bg-yellow-400 text-yellow-900 font-black p-4 rounded-full shadow-lg transform -rotate-12 animate-bounce">
              100% <br/> Relleno
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}