import { sabores } from "../data/sabores";

export function obtenerPrecio(sabor) {
  for (const categoria in sabores) {
    const grupo = sabores[categoria];

    if (grupo.items.includes(sabor)) {
      return grupo.precio;
    }
  }

  return 0;
}