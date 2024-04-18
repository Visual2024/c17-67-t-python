import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { Header } from "@/Layout/Header/Header";
import { MenuLateral } from "@/Layout/SideBar/MenuLateral";
import { useEffect, useState } from "react";
import { FormularioRegistro } from "../Components/Form/FormularioRegistro";
import { FormularioRegistro2 } from "../Components/Form/FormularioRegistro2";
import { Home, Candidates, Error404, GestionDeEmpleados, GestionDeUsuarios, GerenteGestionFinanzas, EmpleadoGestionFinanzas, DatosPersonales, Login } from '@/Pages';
import { useJwt } from "react-jwt";
import Swal from "sweetalert2";
import ErrorBoundary from "../utils/ErrorBoundary";
import { Comunicacion } from "../Pages/Comunicacion";


export function AppRoutes() {

    return (
        <ErrorBoundary>      
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
                <Route path="/comunicacion" element={<Comunicacion />} />
            </Route>
            <Route path="*" element={<Error404 />} />
        </Routes>
        </ErrorBoundary>        
    );
}

export function Layout() {

    const [usuario, setUsuario] = useState(null);
    const [ususarioId, setUsusarioId] = useState(null);
    const [rol, setRol] = useState(null);
    const url = import.meta.env.VITE_API_KEY
    const navigate = useNavigate()
    const secret = import.meta.env.VITE_SECRET_KEY
    const token = JSON.parse(localStorage.getItem('token'))


    const { decodedToken } = useJwt(token, secret);
  
    useEffect(() => {
      if (decodedToken) {
        console.log('Token decodificado:', decodedToken);
        const userId = decodedToken.user_id;
        const userName = decodedToken.user_name;
        setUsusarioId(userId)
        setUsuario(userName)
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
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            navigate("/login");
          }
        });
    };


    return (
        <div className="flex">
            <MenuLateral rol="ADMIN" cerrarSesion={cerrarSesionClick}/>
            <div className="flex flex-col w-full">
                <Header nombreUsuario={usuario !== null ? usuario : 'Visitante'} />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
