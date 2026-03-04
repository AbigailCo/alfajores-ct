export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Nombre con un toque de estilo */}
        <div className="flex items-center gap-2">
       
          <h1 className="text-2xl font-black tracking-tight text-[var(--c-primary)]">
            CAMILA TISNADO <span className="font-light text-gray-500">Alfajores</span>
          </h1>
        </div>

        {/* Links con hover animado */}
        <div className="hidden md:flex gap-8 text-[var(--c-gray)] font-semibold uppercase text-xs tracking-widest">
          <a href="#inicio" className="hover:text-[var(--c-primary)] transition-colors duration-300">
            Inicio
          </a>
          <a href="#pedido" className="hover:text-[var(--c-primary)] transition-colors duration-300">
            Armá tu caja
          </a>
          <a href="#contacto" className="hover:text-[var(--c-primary)] transition-colors duration-300">
            Contacto
          </a>
        </div>

        {/* Botón CTA con sombra suave */}
        <a
          href="#pedido"
          className="bg-[var(--c-primary)] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[var(--c-primary)]/20 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Hacer pedido
        </a>
      </div>
    </nav>
  );
}