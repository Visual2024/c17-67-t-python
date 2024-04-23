import { useEffect } from "react";
import {ComunicacionCard} from "../Components/Cards/ComunicacionCard";
import { NameCard } from "../Components/Cards/NameCard";
import {ProyectosActivosCard} from "../Components/Cards/ProyectosActivosCard";
import {Incidentes} from "../Components/Cards/Incidentes";
import '../Styles/Home.css'
import useUserRole from "../Hook/useUserRol";
import {QuienEstaAdentroCard} from "../Components/Cards/QuienEstaAdentroCard";


export function Home() {
  const { rol } = useUserRole();

  useEffect(() => {
    console.log('Rol del usuario:', rol);
  }, [rol]);

  return (
    <section>
      {rol === 'ADMIN' || rol === 'GERENTE' ? (
        <section className="flex justify-between" >
          <article className="HomeCard-Container">
          <div className="NameCard">
            <NameCard />
          </div>
          <div className="ComunicacionCard">
            <ComunicacionCard rol={rol} />
          </div>
          <div className="ProyectosActivosCard mt-12">
            <ProyectosActivosCard />
          </div>
          <div className="Incidentes">
            <Incidentes />
          </div>
          <div className="SolicitudVacaciones">
          </div>
          </article>
          <aside className="">
            <QuienEstaAdentroCard />
          </aside>
        </section>
      ) : (
        <section>
          <div className="NameCard">
            <NameCard />
          </div>
          <div className="ComunicacionCard">
            <ComunicacionCard rol={rol} />
          </div>
          <div className="Incidentes">
            <Incidentes />
          </div>
        </section>
      )}
    </section>
  );
}
