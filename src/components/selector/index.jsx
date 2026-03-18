import { cajas } from "../../data/cajas";
import { sabores } from "../../data/sabores";
import { getSaboresParaCaja } from "../../utils/getSaboresParaCaja";
import { usePedido } from "../../hooks/usePedido";

import CajaSelector from "./CajaSelector";
import SaboresSelector from "./SaboresSelector";
import ContadorSeleccion from "./ContadorSeleccion";
import BotonPedido from "./BotonPedido";

export default function PedidoAlfajores() {

  const {
    caja,
    cantidad,
    seleccionados,
    cambiarCaja,
    agregarSabor,
    quitarSabor,
    totalSeleccionados,
    generarMensaje
  } = usePedido();

  const saboresDisponibles = caja
    ? getSaboresParaCaja(caja, sabores)
    : null;

  const linkPedido = generarMensaje();

  return (
    <section id="pedido" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Encabezado visual (Opcional pero recomendado) */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-[var(--c-primary)] tracking-tight">
            Armá tu Caja de Alfajores
          </h1>
          <p className="text-[var(--c-gray)] font-medium">
            Seleccioná el tamaño y tus sabores favoritos
          </p>
        </div>

        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[var(--c-secundary)]/30">
          <CajaSelector
            cajas={cajas}
            cajaActiva={caja}
            onSelect={cambiarCaja}
          />

          {caja && (
            <div className="mt-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <hr className="border-[var(--c-secundary)]/20 mb-10" />
              
              <ContadorSeleccion
                total={totalSeleccionados}
                max={cantidad}
              />

              <SaboresSelector
                sabores={saboresDisponibles}
                seleccionados={seleccionados}
                agregar={agregarSabor}
                quitar={quitarSabor}
              />

              <div className="mt-10 pt-6 border-t border-[var(--c-secundary)]/20">
                <BotonPedido link={linkPedido} />
              </div>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}