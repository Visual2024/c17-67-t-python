import { Routes, Route, Outlet } from "react-router-dom";
import { Header } from "@/Layout/Header/Header";
import { MenuLateral } from "@/Layout/SideBar/MenuLateral";
import { useEffect, useState } from "react";
import { FormularioRegistro } from "../Components/Form/FormularioRegistro";
import { FormularioRegistro2 } from "../Components/Form/FormularioRegistro2";
import { Home, Candidates, Error404, GestionDeEmpleados, GestionDeUsuarios, GerenteGestionFinanzas, EmpleadoGestionFinanzas, DatosPersonales, Login } from '@/Pages';


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
    const [rol, setRol] = useState(null);

    useEffect(() => {
        const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('nombreUsuario'));
        const rolSessionStorage = JSON.parse(sessionStorage.getItem('rol'));

        if (usuarioSessionStorage && rolSessionStorage) {
            setUsuario(usuarioSessionStorage);
            setRol(rolSessionStorage);
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
