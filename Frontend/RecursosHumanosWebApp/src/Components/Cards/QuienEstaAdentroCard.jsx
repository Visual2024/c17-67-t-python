import { useState, useEffect } from "react";
import { EmpleadoOnline } from "../Icons/EmpleadoOnline";

// Función para ordenar los empleados con status true primero
const ordenarEmpleados = (empleados) => {
  if (!empleados) {
    return []; // Devuelve un array vacío si no hay empleados
  }
  return empleados.sort((a, b) =>
    a.status === b.status ? 0 : a.status ? -1 : 1
  );
};

export default function QuienEstaAdentroCard() {
  const [verSoloOnline, setVerSoloOnline] = useState(false);
  const [candidates, setCandidates] = useState([]);

  const [data, setData] = useState(null);

  const url = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(`${url}/api/v1/postulants`, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        // Simulación de estado online y offline aleatorio
        const modifiedData = data.results.map((empleado) => ({
          ...empleado,
          status: Math.random() < 0.5, // Establece el status aleatoriamente
        }));
        setData(modifiedData);
        setCandidates(modifiedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  const handleCheckboxChange = () => {
    setVerSoloOnline((prevState) => !prevState);
  };

  const empleadosFiltrados = verSoloOnline
    ? candidates.filter((empleado) => empleado.status)
    : candidates;
  const empleadosOrdenados = ordenarEmpleados(empleadosFiltrados);

  return (
    <section className="shadow-[4px_5px_10px_1px_rgba(0,0,0,0.3)] w-96 h-[520px] rounded-xl p-4 overflow-y-hidden">
      <header className="flex items-center gap-1 mb-3">
        <EmpleadoOnline />
        <h1 className="">Quien esta adentro</h1>
      </header>
      <div className="flex flex-col justify-between h-full py-2">
        <ul className=" max-h-96 overflow-y-auto flex flex-col gap-1">
          {empleadosOrdenados.map((empleado, index) => (
            <li key={index} className="flex items-center ">
              <div>
                <header>
                  <span
                    className={`inline-block h-2 w-2 rounded-full mr-3 ${
                      empleado.status ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></span>
                  <span className="text-sm font-medium mr-2">
                    {empleado.first_name}
                  </span>
                  <span className="text-sm">{empleado.last_name}</span>
                </header>
                <small className="ml-6 text-xs">{empleado.email}</small>
              </div>
            </li>
          ))}
        </ul>
        <label htmlFor="verOnline" className="block mb-5">
          <input
            type="checkbox"
            id="verOnline"
            checked={verSoloOnline}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          Ver solo Online
        </label>
      </div>
    </section>
  );
}
