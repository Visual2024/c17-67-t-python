/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { EmpleadoOnline } from "../Icons/EmpleadoOnline";

const ordenarEmpleados = (empleados) => {
  if (!empleados) {
    return [];
  }
  return empleados.sort((a, b) =>
    a.status === b.status ? 0 : a.status ? -1 : 1
  );
};

export function QuienEstaAdentroCard() {
  const [verSoloOnline, setVerSoloOnline] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [filteredName, setFilteredName] = useState("");
  const [filterByRole, setFilterByRole] = useState(null);
  const [data, setData] = useState(null);

  const url = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/api/v1/employees`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("La respuesta de la red no fue exitosa");
        }

        const data = await response.json();

        console.log("Datos recibidos:", data);

        const modifiedData = data.results.map((empleado) => ({
          ...empleado,
          status: Math.random() < 0.5,
        }));

        setData(modifiedData);
        setCandidates(modifiedData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [url]);

  const handleOnlineButtonClick = () => {
    setVerSoloOnline((prevState) => !prevState);
  };

  const handleRoleFilter = (role) => {
    setFilterByRole(role);
  };

  const handleNameFilterChange = (e) => {
    setFilteredName(e.target.value);
  };

  const filterEmployees = (empleado) => {
    const nameMatch = filteredName
      ? empleado.first_name.toLowerCase().includes(filteredName.toLowerCase())
      : true;

    const onlineMatch = verSoloOnline ? empleado.status : true;

    const roleMatch =
      filterByRole && empleado.role === filterByRole ? true : !filterByRole;

    return nameMatch && onlineMatch && roleMatch;
  };

  const empleadosFiltrados = candidates.filter(filterEmployees);
  const empleadosOrdenados = ordenarEmpleados(empleadosFiltrados);

  return (
    <section className="shadow-[4px_5px_10px_1px_rgba(0,0,0,0.3)] w-96 h-dvh  p-4 overflow-y-hidden">
      <header className="flex flex-col  gap-1 mb-3">
        <EmpleadoOnline />
        <h1 className="">En Línea</h1>
        <input
          type="text"
          placeholder="Filtrar por nombre"
          value={filteredName}
          onChange={handleNameFilterChange}
          className="ml-auto border border-gray-300 rounded px-2 py-1"
        />
        <div>
        <button
          onClick={handleOnlineButtonClick}
          className={`ml-3 ${
            verSoloOnline ? "bg-blue-500 text-white" : "bg-gray-200"
          } px-2 py-1 rounded`}
        >
          Ver solo En Línea
        </button>
        <button
          onClick={() => handleRoleFilter("backend")}
          className={`ml-3 ${
            filterByRole === "backend" ? "bg-blue-500 text-white" : "bg-gray-200"
          } px-2 py-1 rounded`}
        >
          Backend
        </button>
        <button
          onClick={() => handleRoleFilter("frontend")}
          className={`ml-3 ${
            filterByRole === "frontend" ? "bg-blue-500 text-white" : "bg-gray-200"
          } px-2 py-1 rounded`}
        >
          Frontend
        </button>

        </div>
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
      </div>
    </section>
  );
}
