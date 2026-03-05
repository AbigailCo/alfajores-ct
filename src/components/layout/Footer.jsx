export default function Footer() {
  return (
    <footer className="bg-(--c-primary) text-white mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          
          {/* Columna 1: Branding */}
          <div className="space-y-3">
            <h2 className="text-2xl font-black tracking-tighter italic">
              Camila Tisnada <span className="text-white/80">Alfajores</span>
            </h2>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs mx-auto md:mx-0">
              Receta tradicional, corazón artesanal. Llevamos la dulzura a tu puerta.
            </p>
          </div>

          {/* Columna 2: Quick Links / Redes */}
          <div className="flex flex-col items-center space-y-4">
             <div className="flex gap-6">
                <a href="https://www.instagram.com/camilatisnadopasteleria/" className="hover:scale-110 transition-transform opacity-80 hover:opacity-100">Instagram</a>
                <a href="https://api.whatsapp.com/send/?phone=5492996088511" className="hover:scale-110 transition-transform opacity-80 hover:opacity-100">WhatsApp</a>
             </div>
             <div className="h-px w-12 bg-white/20"></div>
             <p className="text-xs font-medium uppercase tracking-widest text-white/50">Neuquén, Argentina</p>
          </div>

          {/* Columna 3: Newsletter o Info extra */}
          <div className="text-center md:text-right space-y-2">
            <p className="text-sm font-semibold">¿Querés ventas por mayor?</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5492996088511" 
              className="inline-block bg-white text-(--c-primary) px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-100 transition"
            >
              Contactanos
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/40 uppercase tracking-widest">
            © {new Date().getFullYear()} Alfajores CT. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-white/40 uppercase tracking-widest">
            Hecho con ❤️ y mucho dulce de leche.
          </p>
        </div>

      </div>
    </footer>
  );
}