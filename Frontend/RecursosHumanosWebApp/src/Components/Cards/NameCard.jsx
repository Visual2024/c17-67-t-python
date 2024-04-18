import { useEffect, useState } from "react";
 import { format } from "date-fns";
  import { es } from "date-fns/locale"; 
import Polygon from "@/../public/img/Polygon";


export function NameCard() {
  const [usuario, setUsuario] = useState(null);
  const [rol, setRol] = useState('GERENTE');
  
  const [fechaActual, setFechaActual] = useState(null);


  useEffect(() => {
    const usuarioSessionStorage = JSON.parse(
      localStorage.getItem("nombreUsuario")
    );
    const rolSessionStorage = JSON.parse(sessionStorage.getItem("rol"));

    if (usuarioSessionStorage && rolSessionStorage) {
      setUsuario(usuarioSessionStorage);
      setRol(rolSessionStorage);
    } 

    // Obtener la fecha actual
    const fecha = new Date();
     const fechaDescriptiva = format(fecha, "EEEE, d 'de' MMMM 'del' yyyy", {
     locale: es, 
     });
    setFechaActual(fechaDescriptiva);
  }, []);


  //Color del Card segun Rol
  const getBgColor = () => {
    if (rol === "ADMIN") {
      return "bg-[#092E20]";
    } else if (rol === "GERENTE") {
      return "bg-[rgb(11,0,96)]";
    } else if (rol === "EMPLEADO") {
      return "bg-blue-950";
    }
    return ""; 
  };

  return (
    <article className={` flex flex-col justify-between -z-10 relative w-72 h-[136px] p-3 rounded-xl text-white ${getBgColor()}`}>
        <div className=" -z-10 absolute top-0 right-4">
          <Polygon />
        </div>
      <header className="flex flex-col gap-3">
        <div className=" z-10 w-48 px-2 py-[2px] bg-white text-gray-500 rounded-xl text-sm">
          {rol}
        </div>
      <h1 className="text-lg">{`Hola ${usuario? usuario:'Raul'}, bienvenido! `}</h1>
      </header>
         <small className="capitalize text-xs">{fechaActual}</small>
    </article>
  );
}
