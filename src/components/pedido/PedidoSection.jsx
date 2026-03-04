import { usePedido } from "../../hooks/usePedido";
import * as C from "../index";

export default function PedidoSection() {
  const {
    cantidad,
    seleccionados,
    cambiarCantidad,
    agregarSabor,
    generarMensaje,
    totalSeleccionados,
    quitarSabor,
  } = usePedido();

  return (
    <section id="pedido" className="py-24 bg-[var(--c-secundary)]/30 relative overflow-hidden">
      
      {/* Decoración de fondo: círculos que parecen alfajores desenfocados */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--c-primary)] opacity-[0.03] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--c-primary)] tracking-tight">
            Personalizá tu caja 📦
          </h2>
          <p className="text-[var(--c-gray)] font-medium italic">
            Paso a paso, armá la combinación de tus sueños.
          </p>
        </div>

        {/* El "Taller" de Alfajores (Contenedor principal) */}
        <div className="bg-white rounded-[3rem] shadow-xl shadow-[var(--c-primary)]/5 p-8 md:p-12 border border-white/50 backdrop-blur-sm">
          
          <div className="space-y-12">
            
            {/* 1. Selección de tamaño */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--c-primary)] text-white text-xs font-bold">1</span>
                <h3 className="text-xl font-bold text-[var(--c-primary)] uppercase tracking-wider">¿Cuántos querés llevar?</h3>
              </div>
              <C.SelectorCantidad cantidad={cantidad} setCantidad={cambiarCantidad} />
            </div>

            <hr className="border-gray-100" />

            {/* 2. Selección de sabores */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--c-primary)] text-white text-xs font-bold">2</span>
                  <h3 className="text-xl font-bold text-[var(--c-primary)] uppercase tracking-wider">Elegí los sabores</h3>
                </div>
                {/* Indicador de "cupo" */}
                <div className={`px-4 py-1 rounded-full text-xs font-bold transition-colors ${totalSeleccionados === cantidad ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                   {totalSeleccionados} / {cantidad} seleccionados
                </div>
              </div>
              
              <C.SelectorSabores
                cantidad={cantidad}
                seleccionados={seleccionados}
                agregarSabor={agregarSabor}
                quitarSabor={quitarSabor}
                total={totalSeleccionados}
              />
            </div>

            <hr className="border-gray-100" />

            {/* 3. Resumen y envío */}
            <div className="space-y-8 bg-[var(--c-secundary)]/10 p-6 md:p-8 rounded-[2rem] border border-[var(--c-primary)]/5">
              <C.ResumenPedido
                cantidad={cantidad}
                seleccionados={seleccionados}
                total={totalSeleccionados}
              />

              <div className="flex justify-center pt-4">
                <C.BotonWhatsApp
                  cantidad={cantidad}
                  seleccionados={seleccionados}
                  generarMensaje={generarMensaje}
                  total={totalSeleccionados}
                />
              </div>
            </div>

          </div>
        </div>

        <p className="mt-8 text-center text-xs text-[var(--c-gray)] opacity-60">
          * Una vez que envíes el mensaje, te confirmaremos el stock y el costo de envío.
        </p>
      </div>
    </section>
  );
}