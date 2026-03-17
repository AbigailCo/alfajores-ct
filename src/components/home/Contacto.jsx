import { Instagram, MessageCircle, Clock, ArrowRight } from "lucide-react";

export default function Contacto() {
  const contactos = [
    {
      titulo: "WhatsApp",
      desc: "Chateá con nosotros para pedidos personalizados o eventos.",
      icono: <MessageCircle className="w-6 h-6" />,
      link: "https://wa.me/5492996088511",
      label: "Enviar mensaje"
    },
    {
      titulo: "Instagram",
      desc: "Seguinos para no perderte los nuevos sabores y sorteos.",
      icono: <Instagram className="w-6 h-6" />,
      link: "https://www.instagram.com/camilatisnadopasteleria/",
      label: "@camilatisnadopasteleria"
    },
    {
      titulo: "Horarios",
      desc: "Atención y entregas de Lunes a Sábados.",
      icono: <Clock className="w-6 h-6" />,
      link: null,
      label: "Lunes a Sábados"
    }
  ];

  return (
    <section id="contacto" className="py-16 md:py-24 bg-(--c-secundary) overflow-hidden relative">
      
      {/* Decoración circular de fondo */}
      <div className="absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-(--c-primary) opacity-[0.03] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Cabecera */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-(--c-primary) tracking-tight">
            Hablemos de alfajores
          </h2>
          <p className="text-(--c-primary) max-w-md italic text-sm md:text-base opacity-90">
            Estamos en Neuquén para endulzar tus momentos especiales.
          </p>
        </div>

        {/* Cards de Contacto - Grid Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {contactos.map((item, index) => (
            <div
              key={index}
              className={`
                group p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] transition-all duration-500
                flex flex-col items-center text-center border-2
                ${index === 2 && "sm:col-span-2 lg:col-span-1"} 
                /* El tercer item ocupa 2 columnas en tablet para no dejar huecos */
                bg-(--c-primary) border-transparent hover:bg-white hover:border-(--c-primary)/10 hover:shadow-2xl
              `}
            >
              {/* Contenedor del Icono */}
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-3xl shadow-sm flex items-center justify-center text-(--c-primary) mb-6 group-hover:bg-(--c-primary) group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                {item.icono}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-(--c-secundary) group-hover:text-(--c-primary) mb-3 transition-colors">
                {item.titulo}
              </h3>

              <p className="text-white/80 group-hover:text-(--c-gray) text-sm leading-relaxed mb-8 grow">
                {item.desc}
              </p>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group/link flex items-center justify-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-(--c-primary) bg-white px-6 py-3.5 rounded-full hover:bg-(--c-primary) hover:text-white transition-all duration-300 shadow-md"
                >
                  {item.label}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              ) : (
                <div className="w-full text-[10px] md:text-xs font-black uppercase tracking-widest text-(--c-primary) bg-white/90 px-6 py-3.5 rounded-full">
                  {item.label}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Botón Final Responsive */}
        <div className="mt-16 md:mt-24 pt-10 border-t border-(--c-primary)/10 flex flex-col items-center text-center">
            <p className="text-(--c-primary) text-xs md:text-sm mb-8 opacity-70 font-medium">
              ¿Listo para probar los mejores alfajores de la Patagonia?
            </p>
            
            <a
              href="#pedido"
              className="w-full sm:w-auto group relative px-8 md:px-12 py-4 md:py-5 bg-(--c-primary) text-white font-black rounded-full shadow-xl shadow-(--c-primary)/20 hover:scale-105 active:scale-95 transition-all text-base md:text-lg"
            >
              Hacer mi pedido ahora 
            </a>
        </div>

      </div>
    </section>
  );
}