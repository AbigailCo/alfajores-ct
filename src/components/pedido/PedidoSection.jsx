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
    <section id="pedido" className="py-12 md:py-24 bg-(--c-secundary) relative overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-(--c-primary) opacity-[0.03] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-(--c-primary) tracking-tight">
            Personalizá tu caja
          </h2>
          <p className="text-(--c-gray) text-sm md:text-base font-medium italic px-4">
            Paso a paso, armá la combinación de tus sueños.
          </p>
        </div>

        {/* El "Taller" - Ajuste de bordes y padding para mobile */}
        <div className="bg-white rounded-4xl md:rounded-[3rem] shadow-xl shadow-(--c-primary)/5 p-5 md:p-12 border border-white/50 backdrop-blur-sm">

          <div className="space-y-10 md:space-y-12">
            
            {/* 1. Selección de tamaño */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="shrink-0 flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-(--c-primary) text-white text-[10px] md:text-xs font-bold">1</span>
                <h3 className="text-lg md:text-xl font-bold text-(--c-primary) uppercase tracking-wider italic">¿Cuántos querés llevar?</h3>
              </div>
              <C.SelectorCantidad cantidad={cantidad} setCantidad={cambiarCantidad} />
            </div>

            <hr className="border-gray-100" />

            {/* 2. Selección de sabores */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-(--c-primary) text-white text-[10px] md:text-xs font-bold">2</span>
                  <h3 className="text-lg md:text-xl font-bold text-(--c-primary) uppercase tracking-wider italic">Elegí los sabores</h3>
                </div>
                
                {/* Indicador de "cupo" ajustable */}
                <div className={`self-start md:self-center px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black tracking-widest transition-colors ${totalSeleccionados === cantidad ? 'bg-green-500 text-white' : 'bg-orange-100 text-orange-700'}`}>
                   {totalSeleccionados} / {cantidad} SELECCIONADOS
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

            {/* 3. Resumen y envío - Background más suave en mobile */}
            <div className="space-y-6 md:space-y-8 bg-(--c-secundary)/20 p-5 md:p-8 rounded-[1.5rem] md:rounded-4xl border border-(--c-primary)/5">
              <C.ResumenPedido
                cantidad={cantidad}
                seleccionados={seleccionados}
                total={totalSeleccionados}
              />

              <div className="flex justify-center pt-2">
                {/* El BotonWhatsApp dentro del componente ya debería ser responsive (w-full en mobile) */}
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

        <p className="mt-8 text-center text-[10px] md:text-xs text-(--c-gray) opacity-60 px-4">
          * Una vez que envíes el mensaje, te confirmaremos el stock y el costo de envío.
        </p>
      </div>
    </section>
  );
}