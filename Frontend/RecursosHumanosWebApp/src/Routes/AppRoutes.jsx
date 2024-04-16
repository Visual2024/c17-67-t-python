import { Routes, Route, Outlet } from "react-router-dom";
import { Header } from "@/Layout/Header/Header";
import { MenuLateral } from "@/Layout/SideBar/MenuLateral";
import { useEffect, useState } from "react";
import { FormularioRegistro } from "../Components/Form/FormularioRegistro";
import { FormularioRegistro2 } from "../Components/Form/FormularioRegistro2";
import { Home, Candidates, Error404, GestionDeEmpleados, GestionDeUsuarios, GerenteGestionFinanzas, EmpleadoGestionFinanzas, DatosPersonales, Login } from '@/Pages';
import { useJwt } from "react-jwt";


export function AppRoutes() {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<FormularioRegistro />} />
            <Route path="/register-2" element={<FormularioRegistro2 />} />
            <Route element={<Layout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/candidates" element={<Candidates />} />
                <Route path="/gestiondeusuarios" element={<GestionDeUsuarios />} />
                <Route path="/gestiondeempleados" element={<GestionDeEmpleados />} />
                <Route path="/gestionfinancieragerente" element={<GerenteGestionFinanzas />} />
                <Route path="/gestionfinancieraempleados" element={<EmpleadoGestionFinanzas />} />
                <Route path="/datospersonales/:id" element={<DatosPersonales />} />
            </Route>
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export function Layout() {

    const [usuario, setUsuario] = useState(null);
    const [ususarioId, setUsusarioId] = useState(null);
    const [rol, setRol] = useState(null);
    const url = import.meta.env.VITE_API_KEY

    const secret = import.meta.env.VITE_SECRET_KEY
    const token = ''


    const { decodedToken } = useJwt(token, secret);
  
    useEffect(() => {
      if (decodedToken) {
        console.log('Token decodificado:', decodedToken);
        const userId = decodedToken.user_id;
        setUsusarioId(userId)
        localStorage.setItem('userId', JSON.stringify(ususarioId))
      } else {
        console.error('Error al intentar decodificar el token.');
      }
    }, [decodedToken]);


    const cerrarSesionClick = () => {
        Swal.fire({
          title: "Desea Cerrar Sesión?",
          showCancelButton: true,
          confirmButtonColor: '#0B0060',
          cancelButtonColor: "#626262",
          confirmButtonText: "Si!",
          cancelButtonText: "No!",
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem('userId');
            navigate("/login");
          }
        });
      };


    return (
        <div className="flex">
            <MenuLateral rol="ADMIN" cerrarSesion={cerrarSesionClick}/>
            <div className="flex flex-col w-full">
                <Header nombreUsuario="SUPERUSUARIO"/>
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
