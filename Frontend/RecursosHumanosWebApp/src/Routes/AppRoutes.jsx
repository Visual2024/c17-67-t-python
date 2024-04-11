import { Routes, Route, Outlet } from "react-router-dom";
import { Header } from "@/Layout/Header/Header";
import { MenuLateral } from "@/Layout/SideBar/MenuLateral";
import { Perfil } from "@/Pages/Perfil";
import { Login } from "@/Pages/Login";
import { Home } from "@/Pages/Home";
import { Candidates } from "@/Pages/Candidates";
import { Error404 } from "@/Pages/Error404";
import { FormularioRegistro } from "../Components/Form/FormularioRegistro";
import { FormularioRegistro2 } from "../Components/Form/FormularioRegistro2";
import { useEffect, useState } from "react";
import { GestionDeEmpleados } from "../Pages/GestionDeEmpleados";
import { GestionDeUsuarios } from "../Pages/GestionDeUsuarios";
import { GerenteGestionFinanzas } from "../Pages/GerenteGestionFinanzas";
import { EmpleadoGestionFinanzas } from "../Pages/EmpleadoGestionFinanzas";
import { DatosPersonales } from "../Pages/DatosPersonales";

export function AppRoutes() {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<FormularioRegistro />} />
            <Route path="/register-2" element={<FormularioRegistro2 />} />
            <Route element={<Layout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/perfildeusuario" element={<Perfil />} />
                <Route path="/candidates" element={<Candidates />} />
                <Route path="/gestiondeusuarios" element={<GestionDeUsuarios />} />
                <Route path="/gestiondeempleados" element={<GestionDeEmpleados />} />
                <Route path="/gestionfinancieragerente" element={<GerenteGestionFinanzas />} />
                <Route path="/gestionfinancieraempleados" element={<EmpleadoGestionFinanzas />} />
                <Route path="/datospersonales" element={<DatosPersonales />} />
            </Route>
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export function Layout() {

    const [usuario, setUsuario] = useState(null);
    const [rol, setRol] = useState(null);

    useEffect(() => {
        const usuarioLocalStorage = JSON.parse(localStorage.getItem('nombreUsuario'));
        const rolLocalStorage = JSON.parse(localStorage.getItem('rol'));

        if (usuarioLocalStorage && rolLocalStorage) {
            setUsuario(usuarioLocalStorage);
            setRol(rolLocalStorage);
        }else{
            window.location.replace('/login')
        }
    }, []);


    return (
        <div className="flex">
            <MenuLateral rol={rol}/>
            <div className="flex flex-col w-full">
                <Header nombreUsuario={usuario}/>
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
