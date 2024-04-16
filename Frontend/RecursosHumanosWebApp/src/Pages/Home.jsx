import { useEffect, useState } from "react";
import ComunicacionCard from "../Components/Cards/ComunicacionCard";
import { NameCard } from "../Components/Cards/NameCard";
import ProyectosActivosCard from "../Components/Cards/ProyectosActivosCard";
import QuienEstaAdentroCard from "../Components/Cards/QuienEstaAdentroCard";

export function Home() {
  const [usuario, setUsuario] = useState(null);
  const [rol, setRol] = useState(null);

  useEffect(() => {
    const usuarioSessionStorage = JSON.parse(
      sessionStorage.getItem("nombreUsuario")
    );
    const rolSessionStorage = JSON.parse(sessionStorage.getItem("rol"));

    if (usuarioSessionStorage && rolSessionStorage) {
      setUsuario(usuarioSessionStorage);
      setRol(rolSessionStorage);
    } else {
      window.location.replace("/login");
    }
  }, []);

  return (
    <section>
      {rol === "GERENTE"|| rol === "ADMIN" ? (
        <>
          <NameCard />
          <QuienEstaAdentroCard />
          <ComunicacionCard />
          <ProyectosActivosCard />
        </>
      ) : (
        <NameCard />
      )}
    </section>
  );
}
