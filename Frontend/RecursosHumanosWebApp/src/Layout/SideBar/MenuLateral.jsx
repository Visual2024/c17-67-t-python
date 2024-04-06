import { useState } from "react";
import { Link } from "react-router-dom";
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
    { title: "Empleado", src: "User", gap: true },
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
          className={`flex flex-col flex-wrap items-start ml-1 ${
            open ? "w-72" : "w-24 h-max "
          } duration-500  h-full relative bg-white`}
        >
          <div
            className={`absolute right-10 cursor-pointer rounded-full  top-[.9rem] w-7 border-2 border-dark-purple bg-white ${
              !open && "rotate-180 absolute -right-[-45px] top-[15px]"
            }`}
          >
            <button onClick={() => setOpen(!open)} className="relative ">
              <i
                className={`fa-solid fa-arrow-left pt-[-10%] px-[60%]  ${
                  !open && "pt-[-10%] mx-[-20%]"
                }`}
              ></i>
            </button>
          </div>
          <div className={`flex flex-row items-center ml-4 `}>
            <div className={`mt-1 ${open && " "} ${!open && "mt-2 hidden"}`}>
              <LogoGira />
            </div>
            <div className={`ml-5  ${!open && "opacity-0"}`}>
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center content-center pr-1 ml-5 mt-10  relative left-2 ">
            <Link to={"./dashboard"}>
              <Panel width={18} height={18} />
            </Link>
            {!open == "" && (
              <Link to={"/dashboard"}>
                <h1 className="ml-1 font-normal text-[1rem] pb-[.01rem] text-[#0B0060]">
                  Panel
                </h1>
              </Link>
            )}
          </div>
          <div>
            <div className=" ">
              {/* Administrador */}
              <ul
                className={`pt-6 ml-3 border-t-[1px] border-gris border-solid mt-5 ${
                  !open == ""
                }`}
              >
                {!open == "" && (
                  <h1 className="text-[#919191] mb-5">ADMINISTRADOR</h1>
                )}
                {administrador.map((adm, index) => (
                  <li
                    key={index}
                    className={`flex rounded-md  cursor-pointer hover:bg-light-white text-gris text-sm items-center gap-x-2 `}
                  >
                    <div className="">
                      <Link to={"./rol"}>
                        {index == 0 && <Rol width={16} height={16} />}
                      </Link>
                      <Link to={"./base"}>
                        {index == 1 && <Base width={16} height={16} />}
                      </Link>
                    </div>
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200 text-gris`}
                    >
                      <Link to={"./rol"}>{index == 0 && `${adm.title}`}</Link>
                      <Link to={"./base"}>{index == 1 && `${adm.title}`}</Link>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Gerente */}
            <ul
              className={`pt-6 ml-5 border-t-[.888px] border-gris border-solid mb-5 mt-5 ${
                !open == ""
              }`}
            >
              {!open == "" && <h1 className=" text-[#919191] mb-5">GERENTE</h1>}
              {gerente.map((ger, index) => (
                <div className="">
                  <li
                    key={index}
                    className={`flex rounded-md p-2 pt-[0px]  cursor-pointer hover:bg-light-white text-gris text-sm items-center gap-x-2 
                   ${ger.gap ? "mt-[.1px]" : "mt-[.1px]"} 
                    
            `}
                  >
                    <div>
                      <Link to={"/Candidates"}>
                        {index == 0 && <Empleado width={16} height={16} />}
                      </Link>
                      <Link to={"Finanzas"}>
                        {index == 1 && <Finanzas width={16} height={16} />}
                      </Link>
                      <Link to={"Comunicacion"}>
                        {index == 2 && <Comunicación width={16} height={16} />}
                      </Link>

                      <Link to={"Tiempo"}>
                        {index == 3 && <Tiempo width={16} height={16} />}
                      </Link>
                    </div>
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200 text-gris`}
                    >
                      <Link to={"/Candidates "}>
                        {index == 0 && `${ger.title}`}
                      </Link>
                      <Link to={"/Finanzas "}>
                        {index == 1 && `${ger.title}`}
                      </Link>
                      <Link to={"/Comunicacion "}>
                        {index == 2 && `${ger.title}`}
                      </Link>
                      <Link to={"/Tiempo "}>
                        {index == 3 && `${ger.title}`}
                      </Link>
                    </span>
                  </li>
                </div>
              ))}
            </ul>
            {/* Empleado */}
            <ul
              className={`pt-6 ml-5 border-t-[1px] border-gris border-solid ${
                !open == ""
              }`}
            >
              {!open == "" && (
                <h1 className=" text-[#919191] mb-5">EMPLEADO</h1>
              )}
              {empleado.map((emp, index) => (
                <div>
                  <li
                    key={index}
                    className={`flex rounded-md p-2 pt-[0] cursor-pointer hover:bg-light-white text-gris text-sm items-center gap-x-2 
                   ${emp.gap ? "mt-[.1px]" : "mt-[.1px]"} 
                   
                   `}
                  >
                    <div>
                      <Link to={"./entrada"}>
                        {index == 0 && <Entrada width={16} height={16} />}
                      </Link>
                      <Link to={"./libre"}>
                        {index == 1 && <Libre width={16} height={16} />}
                      </Link>
                      <Link to={"./finanzas"}>
                        {index == 2 && <Finanzas width={16} height={16} />}
                      </Link>
                      <Link to={"./horarios"}>
                        {index == 3 && <Horarios width={16} height={16} />}
                      </Link>
                      <Link to={"./perfil"}>
                        {index == 4 && <Perfil width={16} height={16} />}
                      </Link>
                    </div>

                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200 text-gris`}
                    >
                      <Link to={"./entrada"}>
                        {" "}
                        {index == 0 && ` ${emp.title}`}{" "}
                      </Link>
                      <Link to={"./time"}>
                        {" "}
                        {index == 1 && ` ${emp.title}`}{" "}
                      </Link>
                      <Link to={"./horarios"}>
                        {" "}
                        {index == 2 && ` ${emp.title}`}{" "}
                      </Link>
                      <Link to={"./perfil"}>
                        {" "}
                        {index == 3 && ` ${emp.title}`}{" "}
                      </Link>
                      <Link to={"./perfil"}>
                        {" "}
                        {index == 4 && ` ${emp.title}`}{" "}
                      </Link>
                    </span>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  );
};
