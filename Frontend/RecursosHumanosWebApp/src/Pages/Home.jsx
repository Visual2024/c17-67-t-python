import { useEffect, useState } from "react";
import ComunicacionCard from "../Components/Cards/ComunicacionCard";
import { NameCard } from "../Components/Cards/NameCard";
import ProyectosActivosCard from "../Components/Cards/ProyectosActivosCard";
import QuienEstaAdentroCard from "../Components/Cards/QuienEstaAdentroCard";
import Incidentes from "../Components/Cards/Incidentes";
import SolicitudVacaciones from "../Components/Cards/SolicitudVacaciones";

export function Home() {
  const [rol, setRol] = useState(null);

  useEffect(() => {
    const rolSessionStorage = JSON.parse(sessionStorage.getItem("rol"));

    if (rolSessionStorage) {
      setRol(rolSessionStorage);
    } else {
      // window.location.replace("/login");
    }
  }, []);

  return (
    <section className="flex justify-center">
      {rol === "GERENTE" || rol === "ADMIN" ? (
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "288px 384px 384px",
            gridTemplateRows: "136px 1fr 1fr",
            gap: "1rem",
          }}
        >
          <div style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>
            <NameCard />
          </div>
          <div style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}>
            <ComunicacionCard rol={rol} />
          </div>
          <div style={{ gridColumn: "3 / 4", gridRow: "1 / 4" }}>
            <QuienEstaAdentroCard />
          </div>
          <div
            className=" mt-12"
            style={{ gridColumn: "2 / 2", gridRow: "2 / 4" }}
          >
            <ProyectosActivosCard />
          </div>
          <div className="" style={{ gridColumn: "1 / 2", gridRow: "2 / 4" }}>
            <Incidentes />
          </div>
          <div className="" style={{ gridColumn: "1 / 2", gridRow: "3 / 4" }}>
            <SolicitudVacaciones />
          </div>
        </section>
      ) : (
        <>
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "288px 384px 384px",
              gridTemplateRows: "136px 1fr 1fr",
              gap: "1rem",
            }}
          >
            <div style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>
              <NameCard />
            </div>
            <div style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}>
              <ComunicacionCard rol={rol} />
            </div>
          </section>
        </>
      )}
    </section>
  );
}
