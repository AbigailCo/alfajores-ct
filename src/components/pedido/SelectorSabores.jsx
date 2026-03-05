import CategoriaSabores from "./CategoriaSabores";
import { sabores } from "../../data/sabores";

export default function SelectorSabores({
  cantidad,
  seleccionados,
  agregarSabor,
  quitarSabor,
  total,
}) {
  if (!cantidad) return null;

  const estaLleno = total === cantidad;

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Indicador Flotante de Progreso (Sticky) */}
      <div className="sticky top-24 z-30 flex justify-center translate-y-[-50%]">
        <div
          className={`
          px-6 py-2 rounded-full shadow-xl border backdrop-blur-md transition-all duration-500
          ${
            estaLleno
              ? "bg-green-500 border-green-400 text-white scale-110"
              : "bg-white/90 border-(--c-primary)/20 text-(--c-primary)"
          }
        `}
        >
          <p className="text-sm font-black tracking-tighter flex items-center gap-2">
            {estaLleno ? "✅ CAJA COMPLETA" : "RELLENANDO TU CAJA"}
            <span className="bg-current/10 px-2 py-0.5 rounded text-lg">
              {total} / {cantidad}
            </span>
          </p>
        </div>
      </div>

      {/* Listado de Categorías */}
      <div className="space-y-16">
        <div className="relative border-l-4 border-gray-200 pl-6 hover:border-(--c-primary) transition-colors">
          <CategoriaSabores
            titulo="Los Clásicos"
            sabores={sabores.basicos.items}
            precio={sabores.basicos.precio}
            seleccionados={seleccionados}
            agregarSabor={agregarSabor}
            quitarSabor={quitarSabor}
            disabled={estaLleno}
          />
        </div>

        <div className="relative border-l-4 border-gray-200 pl-6 hover:border-orange-300 transition-colors">
          <CategoriaSabores
            titulo="Especiales de la Casa"
            sabores={sabores.medios.items}
            precio={sabores.medios.precio}
            seleccionados={seleccionados}
            agregarSabor={agregarSabor}
            quitarSabor={quitarSabor}
            disabled={estaLleno}
          />
        </div>

        <div className="relative border-l-4 border-yellow-400 pl-6 bg-yellow-50/30 py-4 rounded-r-2xl">
          <div className="absolute -top-3 left-6 bg-yellow-400 text-[10px] font-black px-2 py-0.5 rounded uppercase text-yellow-900">
            Recomendado
          </div>
          <CategoriaSabores
            titulo="Línea Premium ✨"
            sabores={sabores.premium.items}
            precio={sabores.premium.precio}
            seleccionados={seleccionados}
            agregarSabor={agregarSabor}
            quitarSabor={quitarSabor}
            disabled={estaLleno}
          />
        </div>
      </div>

      {estaLleno && (
        <p className="text-center text-green-600 font-bold animate-bounce mt-8">
          ¡Excelente elección! Revisá tu resumen abajo. 👇
        </p>
      )}
    </div>
  );
}
