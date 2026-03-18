import { Instagram, MessageCircle, Clock, ArrowRight, MapPin } from "lucide-react";

export default function Contacto() {
  const contactos = [
    {
      titulo: "WhatsApp",
      desc: "Chateá con nosotros para pedidos personalizados o eventos especiales.",
      icono: <MessageCircle className="w-6 h-6" />,
      link: "https://wa.me/5492996088511",
      label: "Enviar mensaje ahora"
    },
    {
      titulo: "Instagram",
      desc: "Seguinos para ver el proceso artesanal y nuevos lanzamientos.",
      icono: <Instagram className="w-6 h-6" />,
      link: "https://www.instagram.com/camilatisnadopasteleria/",
      label: "@camilatisnadopasteleria"
    },
    {
      titulo: "Horarios",
      desc: "Te esperamos para entregas y consultas de Lunes a Sábados.",
      icono: <Clock className="w-6 h-6" />,
      link: null,
      label: "Lunes a Sábados"
    }
  ];

  return (
    <section id="contacto" className="py-24 bg-white overflow-hidden relative">
      {/* Fondo decorativo orgánico */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[var(--c-secundary)]/10 -skew-y-3 origin-bottom-left" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Cabecera Editorial */}
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--c-primary)]/5 text-[var(--c-primary)] text-[10px] font-bold uppercase tracking-[0.2em]">
            <MapPin className="w-3 h-3" /> Neuquén Capital
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[var(--c-primary)] tracking-tighter leading-none">
            Hablemos de <span className="italic font-serif text-[var(--c-graylite)]">alfajores</span>
          </h2>
          <p className="text-[var(--c-gray)] max-w-md text-base md:text-lg font-medium opacity-80">
            ¿Tenés un evento o simplemente un antojo? Estamos a un mensaje de distancia.
          </p>
        </div>

        {/* Cards de Contacto Refinadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactos.map((item, index) => (
            <div
              key={index}
              className="
                group p-10 rounded-[3rem] transition-all duration-500
                flex flex-col items-center text-center bg-white border border-[var(--c-secundary)]/20
                hover:shadow-[0_30px_60px_-15px_rgba(46,52,88,0.1)] hover:-translate-y-2
              "
            >
              {/* Icono con Círculo Orgánico */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-[var(--c-secundary)]/20 rounded-full scale-150 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-16 h-16 bg-[var(--c-primary)] text-white rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                  {item.icono}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[var(--c-primary)] mb-4">
                {item.titulo}
              </h3>

              <p className="text-[var(--c-gray)] text-sm leading-relaxed mb-10 grow font-medium">
                {item.desc}
              </p>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full flex items-center justify-center gap-2 py-4 rounded-2xl
                    bg-gray-50 text-[var(--c-primary)] text-xs font-black uppercase tracking-widest
                    hover:bg-[var(--c-primary)] hover:text-white transition-all duration-300
                  "
                >
                  {item.label}
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <div className="w-full py-4 rounded-2xl bg-[var(--c-secundary)]/10 text-[var(--c-primary)] text-xs font-black uppercase tracking-widest border border-[var(--c-primary)]/5">
                  {item.label}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer de Sección / CTA Final */}
        <div className="mt-24 pt-16 border-t border-[var(--c-secundary)]/30">
          <div className="bg-[var(--c-primary)] rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Brillo decorativo */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <h3 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight relative z-10">
              ¿Listo para el primer bocado?
            </h3>
            
            <a
              href="#pedido"
              className="
                inline-flex items-center gap-3 px-10 py-5 bg-white text-[var(--c-primary)] 
                font-black rounded-2xl text-lg hover:scale-105 active:scale-95 
                transition-all shadow-xl hover:bg-[var(--c-secundary)] relative z-10
              "
            >
              Armar mi pedido ahora
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <p className="mt-8 text-white/50 text-[10px] uppercase tracking-[0.4em] font-bold">
              Neuquén • Patagonia Argentina
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}