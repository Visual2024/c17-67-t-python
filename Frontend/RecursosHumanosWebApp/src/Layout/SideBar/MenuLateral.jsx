import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo, LogoGira } from "../../assets/img/Logo";
import {
  Rol,
  Empleado,
  Finanzas,
  Comunicación,
  Tiempo,
  Entrada,
  Perfil,
  Salir,
  Config,
} from "../../../public/img/Categorias";
import { Panel } from "../../../public/img/Panel";
import Swal from "sweetalert2";

export const MenuLateral = ({ rol }) => {
  const [open, setOpen] = useState(true);

  console.log(rol);

  const administrador = [
    // Administrador
    { title: "Gestión de Usuarios", src: "Rol" },
  ];

  const gerente = [
    // Gerente
    { title: "Gestión de empleados", src: "User", gap: true },
    { title: "Gestión Financiera", src: "Calendar" },
    { title: "Comunicación", src: "Search" },
    { title: "Registro de Horarios", src: "Search" },
  ];

  const empleado = [
    // Empleado
    { title: "Datos Personales", src: "Setting" },
    { title: "Registro de Horarios", src: "Chart" },
    { title: "Gestión Financiera" },
  ];

  const apartado = [
    {
      title: "Salir",
    },
  ];

  const navigate = useNavigate();

  const cerrarSesionClick = () => {
    Swal.fire({
      title: "Desea Cerrar Sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!",
      cancelButtonText: "No!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate("/login");
      }
    });
  };

  return (
    <aside className="mr-5 h-100vh">
      <nav className="flex flex-col flex-wrap shadow-2xl shadow-black h-auto">
        <div
          className={`flex flex-col flex-wrap items-start ml-0 pl-4 ${
            open ? "w-72 duration-500" : "w-24 h-max duration-500 "
          } duration-500  h-full relative bg-white`}
        >
          <div
            className={`absolute right-[2.3rem] cursor-pointer rounded-full  top-[.9rem] w-7 border-2 border-dark-purple bg-white 
            ${
              !open &&
              "rotate-180 absolute -right-[-45px] top-[15px]  pt-[-7%] px-[3%]"
            }`}
          >
            <button onClick={() => setOpen(!open)} className="relative">
              <i
                className={`fa-solid fa-arrow-left pt-[-7%] px-[37%]  ${
                  !open && "pt-[-8%] mx-[-20%]"
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
          <div className="flex flex-row items-center content-center pr-1 ml-3 mt-10  relative left-2 ">
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
            {rol === "ADMIN" && (
              <div className="">
                <ul
                  className={`pt-6 ml-3 mt-5 border-t-[1px] border-solid border-gris ${
                    !open == ""
                  }`}
                >
                  {!open == "" && (
                    <h1 className="text-[#474747] mb-5">ADMINISTRADOR</h1>
                  )}
                  {administrador.map((adm, index) => (
                    <li
                      key={index}
                      className={`flex rounded-md  cursor-pointer hover:bg-light-white text-gris text-sm items-center gap-x-2 `}
                    >
                      <div className="ml-2">
                        <Link to={"/gestiondeusuarios"}>
                          {index == 0 && <Rol width={16} height={16} />}
                        </Link>
                      </div>
                      <span
                        className={`${
                          !open && "hidden"
                        } origin-left duration-200 text-[#474747]`}
                      >
                        <Link to={"/gestiondeusuarios"}>
                          {index == 0 && `${adm.title}`}
                        </Link>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {(rol === "ADMIN" || rol === "GERENTE") && (
              <ul
                className={`pt-6 ml-3 mb-5 mt-5 border-t-[1px] border-solid border-gris ${
                  !open == ""
                }`}
              >
                {!open == "" && (
                  <h1 className=" text-[#474747] mb-5">GERENTE</h1>
                )}
                {gerente.map((ger, index) => (
                  <div className="">
                    <li
                      key={index}
                      className={`flex rounded-md p-2 pt-[0px] cursor-pointer hover:bg-light-white text-gris text-sm items-center gap-x-2 
                   ${ger.gap ? "mt-[.1px]" : "mt-[.1px]"} 
              `}
                    >
                      <div>
                        <Link to={"/gestiondeempleados"}>
                          {index == 0 && <Empleado width={16} height={16} />}
                        </Link>
                        <Link to={"/gestionfinancieragerente"}>
                          {index == 1 && <Finanzas width={16} height={16} />}
                        </Link>
                        <Link to={""}>
                          {index == 2 && (
                            <Comunicación width={16} height={16} />
                          )}
                        </Link>

                        <Link to={""}>
                          {index == 3 && <Tiempo width={16} height={16} />}
                        </Link>
                      </div>
                      <span
                        className={`${
                          !open && "hidden"
                        } origin-left duration-200 text-[#474747]`}
                      >
                        <Link to={"/gestiondeempleados"}>
                          {index == 0 && `${ger.title}`}
                        </Link>
                        <Link to={"/gestionfinancieragerente"}>
                          {index == 1 && `${ger.title}`}
                        </Link>
                        <Link to={""}>{index == 2 && `${ger.title}`}</Link>
                        <Link to={""}>{index == 3 && `${ger.title}`}</Link>
                      </span>
                    </li>
                  </div>
                ))}
              </ul>
            )}

            {(rol === "ADMIN" || rol === "EMPLEADO") && (
              <ul
                className={`pt-6 ml-3 border-t-[1px] border-gris border-solid ${
                  !open == ""
                }`}
              >
                {!open == "" && (
                  <h1 className=" text-[#474747] mb-5">EMPLEADO</h1>
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
                        <Link to={""}>
                          {index == 1 && <Entrada width={16} height={16} />}
                        </Link>
                        <Link to={"/gestionfinancieraempleados"}>
                          {index == 2 && <Finanzas width={16} height={16} />}
                        </Link>
                        <Link to={"/datospersonales"}>
                          {index == 0 && <Perfil width={16} height={16} />}
                        </Link>
                      </div>

                      <span
                        className={`${
                          !open && "hidden"
                        } origin-left duration-200 text-[#474747]`}
                      >
                        <Link to={""}> {index == 1 && ` ${emp.title}`} </Link>
                        <Link to={"/gestionfinancieraempleados"}>
                          {" "}
                          {index == 2 && ` ${emp.title}`}{" "}
                        </Link>
                        <Link to={"/datospersonales"}>
                          {" "}
                          {index == 0 && ` ${emp.title}`}{" "}
                        </Link>
                      </span>
                    </li>
                  </div>
                ))}
              </ul>
            )}

            {rol === "ADMIN" && (
              <div
                className={`ml-5 mt-5 ${
                  !open
                    ? "min-h-[44vh] w-[100%] flex gap-1"
                    : "min-h-[19vh] w-[100%] flex gap-2"
                } `}
              >
                <div className="mt-auto mb-3">
                  <ul className={`${!open ? "mb-1" : "mb-2"}`}>
                    <li className="flex cursor-pointer items-center">
                      <Config width={16} height={16} />

                      {!open == "" && (
                        <p className="pl-1 text-sm">
                          Configuracion y seguridad
                        </p>
                      )}
                    </li>
                  </ul>

                  <ul className="">
                    <li
                      className="flex cursor-pointer items-center"
                      onClick={cerrarSesionClick}
                    >
                      <Salir width={16} height={16} />
                      {!open == "" && <p className="pl-1 text-sm ">Salir</p>}
                    </li>
                  </ul>
                </div>
              </div>
            )}

              {rol === "GERENTE" && (
              <div
                className={`ml-5 mt-5 ${
                  !open
                    ? "min-h-[68vh] w-[100%] flex gap-1"
                    : "min-h-[56vh] w-[100%] flex gap-2"
                } `}
              >
                <div className="mt-auto mb-3">
                  <ul className={`${!open ? "mb-1" : "mb-2"}`}>
                    <li className="flex cursor-pointer items-center">
                      <Config width={16} height={16} />

                      {!open == "" && (
                        <p className="pl-1 text-sm">
                          Configuracion y seguridad
                        </p>
                      )}
                    </li>
                  </ul>

                  <ul className="">
                    <li
                      className="flex cursor-pointer items-center"
                      onClick={cerrarSesionClick}
                    >
                      <Salir width={16} height={16} />
                      {!open == "" && <p className="pl-1 text-sm ">Salir</p>}
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {rol === "EMPLEADO" && (
              <div
                className={`ml-5 mt-5 ${
                  !open
                    ? "min-h-[74vh] w-[100%] flex gap-1"
                    : "min-h-[62vh] w-[100%] flex gap-2"
                } `}
              >
                <div className="mt-auto mb-3">
                  <ul className={`${!open ? "mb-1" : "mb-2"}`}>
                    <li className="flex cursor-pointer items-center">
                      <Config width={16} height={16} />

                      {!open == "" && (
                        <p className="pl-1 text-sm">
                          Configuracion y seguridad
                        </p>
                      )}
                    </li>
                  </ul>

                  <ul className="">
                    <li
                      className="flex cursor-pointer items-center"
                      onClick={cerrarSesionClick}
                    >
                      <Salir width={16} height={16} />
                      {!open == "" && <p className="pl-1 text-sm ">Salir</p>}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
};
