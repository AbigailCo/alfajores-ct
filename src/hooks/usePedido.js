import { useMemo, useState } from "react";

export function usePedido() {

  const [caja, setCaja] = useState(null);
  const [seleccionados, setSeleccionados] = useState({});

  const cambiarCaja = (nuevaCaja) => {
    setCaja(nuevaCaja);
    setSeleccionados({});
  };

  const cantidad = caja?.cantidad || 0;

  const totalSeleccionados = useMemo(() => {
    return Object.values(seleccionados).reduce((acc, val) => acc + val, 0);
  }, [seleccionados]);

  const agregarSabor = (sabor) => {
    if (!cantidad) return;

    setSeleccionados((prev) => {
      const totalActual = Object.values(prev).reduce(
        (acc, val) => acc + val,
        0
      );

      if (totalActual >= cantidad) return prev;

      return {
        ...prev,
        [sabor]: (prev[sabor] || 0) + 1,
      };
    });
  };

  const quitarSabor = (sabor) => {
    setSeleccionados((prev) => {
      if (!prev[sabor]) return prev;

      const nuevo = { ...prev };
      nuevo[sabor] -= 1;

      if (nuevo[sabor] === 0) {
        delete nuevo[sabor];
      }

      return nuevo;
    });
  };

  const generarMensaje = () => {
    if (!caja || totalSeleccionados !== cantidad) return null;

    const listaSabores = Object.entries(seleccionados)
      .map(([sabor, qty]) => `• ${sabor} x${qty}`)
      .join("\n");

    const texto = `Hola! 

Quiero hacer un pedido de alfajores

Caja: ${caja.label}
Peso: ${caja.peso}

Sabores:
${listaSabores}

Total: $${caja.precio.toLocaleString("es-AR")}

Muchas gracias!`;

    const numero = "5492996088511";

    return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  };

  return {
    caja,
    cantidad,
    seleccionados,
    cambiarCaja,
    agregarSabor,
    quitarSabor,
    totalSeleccionados,
    generarMensaje,
  };
}