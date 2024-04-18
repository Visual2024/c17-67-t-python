import { useState } from "react";
import { EmpleadoOnline } from "../Icons/EmpleadoOnline";

const empleados = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    cargo: "frontend",
    status: true,
  },
  {
    nombre: "María",
    apellido: "González",
    cargo: "backend",
    status: false,
  },
  {
    nombre: "Carlos",
    apellido: "López",
    cargo: "frontend",
    status: true,
  },
  {
    nombre: "Ana",
    apellido: "Martínez",
    cargo: "backend",
    status: false,
  },
  {
    nombre: "Pedro",
    apellido: "Sánchez",
    cargo: "frontend",
    status: false,
  },
  {
    nombre: "Laura",
    apellido: "Hernández",
    cargo: "backend",
    status: true,
  },
  {
    nombre: "Miguel",
    apellido: "García",
    cargo: "frontend",
    status: true,
  },
  {
    nombre: "Isabel",
    apellido: "Díaz",
    cargo: "backend",
    status: false,
  },
  {
    nombre: "Luis",
    apellido: "Torres",
    cargo: "frontend",
    status: false,
  },
  {
    nombre: "Elena",
    apellido: "Vázquez",
    cargo: "backend",
    status: true,
  },
];

  // Función para ordenar los empleados con status true primero
  const ordenarEmpleados = (empleados) => {
    return empleados.sort((a, b) =>
      a.status === b.status ? 0 : a.status ? -1 : 1
    );
  };


export default function QuienEstaAdentroCard() {
  const [verSoloOnline, setVerSoloOnline] = useState(false);
/*   const [empleados, setEmpleados] = useState({}); */
/* 
  const url = import.meta.env.VITE_API_KEY

  useEffect(() => {
    fetch(`${url}/api/v1/employees/`)
    .then(res => {
        if (!res.ok) {
            throw new Error (res.status)
        }
        else{
            console.log(res)
            return res.json()
        }
    })
    .then((data) => {
        console.log(data)
        setEmpleados(data)
    })
    .catch(error=> console.error(error))

}, [url]) */




  const handleCheckboxChange = () => {
    setVerSoloOnline((prevState) => !prevState);
  };

  const empleadosFiltrados = verSoloOnline
    ? empleados.filter((empleado) => empleado.status)
    : empleados;
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
                  <span className="text-sm font-medium mr-2">{empleado.nombre}</span>
                  <span className="text-sm">{empleado.apellido}</span>
                </header>
                <small className="ml-6 text-xs">{empleado.cargo}</small>
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
