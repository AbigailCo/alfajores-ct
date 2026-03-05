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
      label: "Consultar disponibilidad"
    }
  ];

  return (
    <section id="contacto" className="py-10 bg-(--c-secundary)  overflow-hidden relative">
      
      {/* Decoración circular de fondo */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-(--c-primary) opacity-[0.03] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Cabecera */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          
          <h2 className="text-4xl md:text-5xl font-black text-(--c-primary) tracking-tight">
            Hablemos de alfajores
          </h2>
          <p className="text-(--c-primary) max-w-md italic">
            Estamos en Neuquén para endulzar tus momentos especiales.
          </p>
        </div>

        {/* Cards de Contacto */}
        <div className="grid md:grid-cols-3 gap-8 bg-(--c-secundary) ">
          {contactos.map((item, index) => (
            <div
              key={index}
              className="group p-10 rounded-[2.5rem] bg-(--c-primary) border border-transparent hover:border-(--c-primary)/10 hover:bg-white hover:shadow-2xl hover:shadow-(--c-primary)/5 transition-all duration-500"
            >
              <div className="flex flex-col h-full items-center text-center">
                
                {/* Contenedor del Icono */}
                <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-(--c-primary) mb-6 group-hover:bg-(--c-primary) group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                  {item.icono}
                </div>

                <h3 className="text-2xl font-bold text-(--c-secundary) mb-3">
                  {item.titulo}
                </h3>

                <p className="text-(--c-gray) text-sm leading-relaxed mb-8 grow">
                  {item.desc}
                </p>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-xs font-black uppercase tracking-widest text-(--c-primary) bg-gray-100 px-6 py-3 rounded-full hover:bg-(--c-primary) hover:text-white transition-all duration-300"
                  >
                    {item.label}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <div className="text-xs font-black uppercase tracking-widest text-(--c-primary) bg-gray-100 px-6 py-3 rounded-full">
                    {item.label}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Botón Final */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col items-center text-center">
            <p className="text-(--c-primary) text-sm mb-8 opacity-70">
              ¿Listo para probar los mejores alfajores de la Patagonia?
            </p>
            
            <a
              href="#pedido"
              className="group relative px-12 py-5 bg-(--c-primary) text-white font-black rounded-full shadow-xl shadow-(--c-primary)/20 hover:scale-105 active:scale-95 transition-all"
            >
              <span className="flex items-center gap-3 text-lg">
                Hacer mi pedido ahora 🍪
              </span>
            </a>
        </div>

      </div>
    </section>
  );
}