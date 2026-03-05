export default function Contacto() {
  const contactos = [
    {
      titulo: "WhatsApp",
      desc: "Hacé tu pedido o consultanos directamente por WhatsApp.",
      icono: "💬",
      link: "https://wa.me/5492996088511",
      label: "Enviar mensaje"
    },
    {
      titulo: "Instagram",
      desc: "Mirá nuestros alfajores, promos y novedades.",
      icono: "📸",
      link: "https://www.instagram.com/camilatisnadopasteleria/",
      label: "Ver Instagram"
    },
    {
      titulo: "Horarios",
      desc: "Tomamos pedidos todos los días.",
      icono: "⏰",
      link: null,
      label: "Pedilos con anticipacion"
    }
  ];

  return (
    <section id="contacto" className="py-24 bg-(--c-graylite)/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabecera */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-(--c-primary) font-bold uppercase tracking-[0.2em] text-xs">
            Contacto
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-(--c-primary) tracking-tight">
            Hablemos de alfajores 🍪
          </h2>

          <div className="h-1 w-20 bg-(--c-primary) mx-auto rounded-full opacity-20"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {contactos.map((item, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-[2.5rem] bg-white border border-transparent hover:border-(--c-primary)/10 hover:shadow-2xl hover:shadow-(--c-primary)/5 transition-all duration-500"
            >

              <div className="space-y-5">

                <div className="w-14 h-14 bg-(--c-primary)/10 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {item.icono}
                </div>

                <h3 className="text-2xl font-bold text-(--c-primary)">
                  {item.titulo}
                </h3>

                <p className="text-(--c-gray) leading-relaxed text-sm">
                  {item.desc}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    className="inline-block mt-2 text-sm font-semibold text-(--c-primary) hover:underline"
                  >
                    {item.label}
                  </a>
                )}

                {!item.link && (
                  <span className="text-sm font-semibold text-(--c-primary)">
                    {item.label}
                  </span>
                )}

              </div>

            </div>
          ))}

        </div>

        {/* CTA inferior */}
        <div className="mt-20 text-center space-y-6">

          <p className="text-(--c-gray) text-sm italic opacity-70">
            Respondemos lo antes posible para coordinar tu pedido.
          </p>

          <a
            href="https://wa.me/5492996088511"
            target="_blank"
            className="inline-block bg-(--c-primary) text-white font-semibold px-8 py-4 rounded-2xl hover:scale-105 hover:shadow-xl transition-all"
          >
            Pedir por WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}