export function getSaboresParaCaja(caja, sabores) {
  if (caja.id === "6-golosinas") {
    return {
      golosinas: sabores.golosinas.items
    };
  }

  return {
    basicos: sabores.basicos.items,
    medios: sabores.medios.items,
    premium: sabores.premium.items,
    golosinas: sabores.golosinas.items
  };
}