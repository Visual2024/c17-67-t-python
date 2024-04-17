import { useState, useEffect } from "react";
// import { format, addSeconds } from "date-fns";

export const useContadorTiempo = () => {
  const [tiempoActual, setTiempoActual] = useState(
    new Date().setHours(0, 0, 0, 0)
  );
  const [inicio, setInicio] = useState(false);
  const [pausa, setPausa] = useState(false);
  const [tiempoPausado, setTiempoPausado] = useState(null);


  useEffect(() => {
    let interval;
    if (inicio && !pausa) {
      interval = setInterval(() => {
        setTiempoActual((prev) => addSeconds(prev, 1));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [inicio, pausa]);



  const iniciarContador = () => {
    setInicio(true);
    setPausa(false);
  };

  const pausarContador = () => {
    setPausa(true);
    setTiempoPausado(tiempoActual);
  };

  const reanudarContador = () => {
    setPausa(false);
    setTiempoActual(tiempoPausado);
  };

  const detenerContador = () => {
    setInicio(false);
    setPausa(false);
    setTiempoActual(new Date().setHours(0, 0, 0, 0));
    setTiempoPausado(null);

  };

  // const tiempoFormateado = format(tiempoActual, "HH'h' mm'min'");

  return {
    // tiempoFormateado,
    iniciarContador,
    pausarContador,
    reanudarContador,
    detenerContador,
    inicio,
    pausa,
  };
};
