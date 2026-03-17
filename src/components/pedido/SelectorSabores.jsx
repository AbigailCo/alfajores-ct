import CategoriaSabores from "./CategoriaSabores";
import { sabores } from "../../data/sabores";

export default function SelectorSabores({
  caja,
  seleccionados,
  agregarSabor,
  quitarSabor,
  total,
}) {
  if (!caja) return null;

  const cantidad = caja.cantidad;
  const estaLleno = total === cantidad;

  const categoriasDisponibles = caja.categorias;

  return (
    <div className="space-y-10 md:space-y-16 animate-fade-in">
      
      {/* Indicador progreso */}
      <div className="sticky top-20 md:top-24 z-40 flex justify-center -translate-y-4 md:-translate-y-8">
        <div
          className={`
          px-5 py-2 md:px-8 md:py-3 rounded-full shadow-2xl border backdrop-blur-lg transition-all duration-500
          ${
            estaLleno
              ? "bg-green-600 border-green-400 text-white scale-105 md:scale-110"
              : "bg-white/95 border-(--c-primary)/20 text-(--c-primary) shadow-(--c-primary)/10"
          }
        `}
        >
          <div className="text-[10px] md:text-sm font-black tracking-tighter flex items-center gap-3">
            <span className="uppercase whitespace-nowrap">
              {estaLleno ? "✅ Caja Completa" : "Rellenando tu caja"}
            </span>

            <span
              className={`
              px-2 md:px-3 py-0.5 rounded-lg text-base md:text-xl font-mono
              ${estaLleno ? "bg-white/20" : "bg-(--c-primary) text-white"}
            `}
            >
              {total} / {cantidad}
            </span>
          </div>
        </div>
      </div>

      {/* Categorías dinámicas */}
      <div className="space-y-12 md:space-y-20">

        {categoriasDisponibles.includes("basicos") && (
          <div className="relative border-l-[3px] md:border-l-4 border-gray-200 pl-4 md:pl-8 hover:border-(--c-primary) transition-colors">
            <CategoriaSabores
              titulo="Los Clásicos"
              sabores={sabores.basicos.items}
              seleccionados={seleccionados}
              agregarSabor={agregarSabor}
              quitarSabor={quitarSabor}
              disabled={estaLleno}
            />
          </div>
        )}

        {categoriasDisponibles.includes("medios") && (
          <div className="relative border-l-[3px] md:border-l-4 border-gray-200 pl-4 md:pl-8 hover:border-orange-300 transition-colors">
            <CategoriaSabores
              titulo="Especiales de la Casa"
              sabores={sabores.medios.items}
              seleccionados={seleccionados}
              agregarSabor={agregarSabor}
              quitarSabor={quitarSabor}
              disabled={estaLleno}
            />
          </div>
        )}

        {categoriasDisponibles.includes("premium") && (
          <div className="relative border-l-[3px] md:border-l-4 border-yellow-400 pl-4 md:pl-8 bg-yellow-50/40 py-6 rounded-r-4xl -mr-2 md:mr-0">
            <div className="absolute -top-3 left-4 md:left-8 bg-yellow-400 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-full uppercase text-yellow-900 shadow-sm">
              Recomendado ✨
            </div>

            <CategoriaSabores
              titulo="Línea Premium"
              sabores={sabores.premium.items}
              seleccionados={seleccionados}
              agregarSabor={agregarSabor}
              quitarSabor={quitarSabor}
              disabled={estaLleno}
            />
          </div>
        )}

        {categoriasDisponibles.includes("golosinas") && (
          <div className="relative border-l-[3px] md:border-l-4 border-pink-400 pl-4 md:pl-8">
            <CategoriaSabores
              titulo="Línea Golosinas"
              sabores={sabores.golosinas.items}
              seleccionados={seleccionados}
              agregarSabor={agregarSabor}
              quitarSabor={quitarSabor}
              disabled={estaLleno}
            />
          </div>
        )}

      </div>

      {estaLleno && (
        <div className="text-center space-y-2 py-4 animate-bounce">
          <p className="text-green-600 font-black text-sm md:text-base uppercase tracking-widest">
            ¡Excelente elección! 🍪
          </p>

          <p className="text-gray-400 text-[10px] md:text-xs">
            Revisá tu resumen abajo para finalizar.
          </p>
        </div>
      )}
    </div>
  );
}