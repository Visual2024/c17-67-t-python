import { useState } from "react";
import { Logo, LogoGira } from "../../assets/img/Logo";
import {
  Rol,
  Base,
  Empleado,
  Finanzas,
  Comunicación,
  Tiempo,
  Entrada,
  Libre,
  Horarios,
  Perfil,
} from "../../../public/img/Categorias";
import { Panel } from "../../../public/img/Panel";

export const MenuLateral = () => {
  const [open, setOpen] = useState(true);

  const administrador = [
    // Administrador
    { title: "Rol", src: "Rol" },
    { title: "Base de Datos", src: "Chat" },
  ];

  const gerente = [
    // Gerente
    { title: "Emplados", src: "User", gap: true },
    { title: "Finanzas", src: "Calendar" },
    { title: "Comunicación", src: "Search" },
    { title: "Gestion de Tiempo", src: "Search" },
  ];

  const empleado = [
    // Empleado
    { title: "Entrada / Salida", src: "Chart" },
    { title: "Tiempo Libre", src: "Folder", gap: true },
    { title: "Finanzas", src: "Setting" },
    { title: "Horarios", src: "Setting" },
    { title: "Perfil", src: "Setting" },
  ];

  return (
    <aside className="mr-5">
      <nav className="">
        <div
          className={` ${
            open ? "w-72" : "w-24 h-max "
          } duration-500  h-full relative bg-white`}
        >
          <div
            className={`absolute right-10 cursor-pointer rounded-full  top-[.9rem] w-7 border-2 border-dark-purple bg-white ${
              !open && "rotate-180 absolute -right-1 top-[15px]"
            }`}
          >
            <button onClick={() => setOpen(!open)} className="relative " >
              <i
                className={` fa-solid fa-arrow-left pt-[-10%] px-[60%]  ${
                  !open && "pt-[-10%] mx-[-20%] "
                }`}
              ></i>
            </button>
          </div>
          <div className={`flex flex-row items-center ml-4 `}>
            <div
              className={`cursor-pointer duration-500 mt-1  ${
                open && "rotate-[360deg] "
              } ${!open && "mt-2"}`}
            >
              <LogoGira />
            </div>
            <div
              className={`ml-5 cursor-pointer duration-500 ${
                !open && "opacity-0"
              }`}
            >
              <Logo />
            </div>
          </div>
          <div className="flex flex-row items-center content-center pr-1 ml-5 mt-10  relative left-2 ">
            <Panel width={18} height={18} className={` `}/>
            {!open == "" && <h1 className="ml-1 font-normal  text-[1rem] pb-[.01rem] text-[#0B0060]">Panel</h1>}
          </div>


          <hr />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ml-1 mt-1 ${
              !open && "scale-0"
            }`}
          ></h1>

          <ul className={`pt-6 ml-5 ${!open == ""}`}>
            {!open == "" && <h1 className="font-bold text-[#919191]">ADMINISTRADOR</h1>}
            {administrador.map((adm, index) => (
              <div>
                <li
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gris text-sm items-center gap-x-4 
                   ${adm.gap ? "mt-2" : "mt-2"} 
                    
            `}
                >
                  {index == 0 && <Rol width={16} height={16} />}
                  {index == 1 && <Base width={16} height={16} />}
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 text-gris`}
                  >
                    {adm.title}
                  </span>
                </li>
              </div>
            ))}
          </ul>

          <ul className={`pt-6 ml-5 ${!open == ""}`}>
            {!open == "" && <h1 className="font-bold text-[#919191]">GERENTE</h1>}
            {gerente.map((ger, index) => (
              <div>
                <li
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gris text-sm items-center gap-x-4 
                   ${ger.gap ? "mt-2" : "mt-2"} 
                    
            `}
                >
                  {index == 0 && <Empleado width={16} height={16} />}
                  {index == 1 && <Finanzas width={16} height={16} />}
                  {index == 2 && <Comunicación width={16} height={16} />}
                  {index == 3 && <Tiempo width={16} height={16} />}

                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 text-gris`}
                  >
                    {ger.title}
                  </span>
                </li>
              </div>
            ))}
          </ul>

          <ul className={`pt-6 ml-5 ${!open == ""}`}>
            {!open == "" && <h1 className="font-bold text-[#919191]">EMPLEADO</h1>}
            {empleado.map((emp, index) => (
              <div>
                <li
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gris text-sm items-center gap-x-4 
                   ${emp.gap ? "mt-1" : "mt-2"} 
                   
                   `}
                >
                  {index == 0 && <Entrada width={16} height={16} />}
                  {index == 1 && <Libre width={16} height={16} />}
                  {index == 2 && <Finanzas width={16} height={16} />}
                  {index == 3 && <Horarios width={16} height={16} />}
                  {index == 4 && <Perfil width={16} height={16} />}

                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 text-gris`}
                  >
                    {emp.title}
                  </span>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};
