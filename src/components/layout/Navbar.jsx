import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* LOGO Y NOMBRE */}
        <div className="flex items-center gap-4">
          <div className="relative group w-12 h-12 md:w-14 md:h-14">
            <div className="absolute inset-0 bg-[var(--c-primary)] opacity-10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="relative w-full h-full bg-white rounded-full overflow-hidden border border-[var(--c-primary)]/20 shadow-sm">
              <img 
                src="/logo.jpg" 
                alt="Logo Camila Tisnado"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-sm md:text-xl font-black tracking-tighter text-[var(--c-primary)] leading-none">
              CAMILA TISNADO
            </h1>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">
             Pasteleria
            </span>
          </div>
        </div>

        {/* LINKS DESKTOP (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-[var(--c-gray)] font-semibold uppercase text-[10px] tracking-widest">
            <a href="#inicio" className="hover:text-[var(--c-primary)] transition-colors">Inicio</a>
            <a href="#pedido" className="hover:text-[var(--c-primary)] transition-colors">Armá tu caja</a>
            <a href="#contacto" className="hover:text-[var(--c-primary)] transition-colors">Contacto</a>
          </div>
          
          <a
            href="#pedido"
            className="bg-[var(--c-primary)] text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg shadow-[var(--c-primary)]/20 hover:scale-105 active:scale-95 transition-all"
          >
            Hacer pedido
          </a>
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <button 
          className="md:hidden text-[var(--c-primary)] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <div className={`
        md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
      `}>
        <div className="flex flex-col p-6 gap-4 text-center font-bold uppercase text-xs tracking-widest text-[var(--c-gray)]">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="py-2">Inicio</a>
          <a href="#pedido" onClick={() => setIsOpen(false)} className="py-2">Armá tu caja</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="py-2">Contacto</a>
          <a 
            href="#pedido" 
            onClick={() => setIsOpen(false)}
            className="bg-[var(--c-primary)] text-white py-3 rounded-xl"
          >
            Hacer pedido
          </a>
        </div>
      </div>
    </nav>
  );
}