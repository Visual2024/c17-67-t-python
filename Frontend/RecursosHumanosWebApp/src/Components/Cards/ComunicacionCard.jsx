/* eslint-disable react/prop-types */
import { Comunicación } from "@/../public/img/Categorias";
import { useState, useEffect } from "react";

const comunicados = [
  { id: 1, titulo: "Nuevo horario de trabajo" },
  { id: 2, titulo: "Recordatorio: Reunión de equipo" },
  { id: 3, titulo: "Actualización de políticas internas" },
  { id: 4, titulo: "Felicidades al equipo por los logros recientes" }
];

export default function ComunicacionCard({ rol }) {
  const [comunicadosList, setComunicadosList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setComunicadosList(comunicados);
    }, 1000);
  }, []);

  const handleEliminarComunicado = id => {
    const nuevosComunicados = comunicadosList.filter(comunicado => comunicado.id !== id);
    setComunicadosList(nuevosComunicados);
  };

  return (
    <div className="relative shadow-[4px_5px_10px_1px_rgba(0,0,0,0.3)] w-96 h-48 rounded-xl p-4">
      <header className="flex items-center gap-1 p-2">
        <Comunicación height="25px" />
        <h1 className="pb-1">Anuncios</h1>
      </header>
      <div className="p-2 max-h-28 overflow-y-auto">
        <ul>
          {comunicadosList.length > 0 ? (
            comunicadosList.map(comunicado => (
              <li key={comunicado.id} className="text-sm flex items-center gap-1 mb-1">
                <Comunicación height="15px" />
                <small className="text-blue-950 font-medium">{comunicado.titulo}</small>
                {(rol === "GERENTE" || rol === "ADMIN") && (
                  <button onClick={() => handleEliminarComunicado(comunicado.id)} className="ml-auto text-red-700">
                    X
                  </button>
                )}
              </li>
            ))
          ) : (
            <li className="absolute top-1/2 left-1/2 -translate-x-1/2">No hay anuncios recientes</li>
          )}
        </ul>
      </div>
    </div>
  );
}
