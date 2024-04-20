import { Routes, Route, Outlet, useNavigate, json } from "react-router-dom";
import { Header } from "@/Layout/Header/Header";
import { MenuLateral } from "@/Layout/SideBar/MenuLateral";
import { useContext, useEffect, useState } from "react";
import { FormularioRegistro } from "../Components/Form/FormularioRegistro";
import { FormularioRegistro2 } from "../Components/Form/FormularioRegistro2";
import { Home, Candidates, Error404, GestionDeEmpleados, GestionDeUsuarios, GerenteGestionFinanzas, EmpleadoGestionFinanzas, DatosPersonales, Login } from '@/Pages';
import { useJwt } from "react-jwt";
import Swal from "sweetalert2";
import ErrorBoundary from "../utils/ErrorBoundary";
import { Comunicacion } from "../Pages/Comunicacion";
import { FormContext } from "../Context/FormContext";


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

    const [userName, setUserName] = useState(null);
    const [ususarioId, setUsusarioId] = useState(null);
    const navigate = useNavigate()
    const {usuarioLogueado, setUsuarioLogueado} = useContext(FormContext)

    const url = import.meta.env.VITE_API_KEY
    const secret = import.meta.env.VITE_SECRET_KEY
    const token = JSON.parse(localStorage.getItem('token'))

    const { decodedToken } = useJwt(token, secret);


    useEffect(() => {

      if(!usuarioLogueado){
        return navigate('/login')
      }

      if (decodedToken) {
        console.log('Token decodificado:', decodedToken);
        const userId = decodedToken.user_id;
        setUsusarioId(userId)
        localStorage.setItem('userId', JSON.stringify(userId))

        fetch(`${url}/api/v1/employees/${userId}`)
        .then(res => {
          if (!res.ok) {
            throw new Error (res.status)
          }
          else{
            return res.json()
          }
        })
        .then((data) => {
          console.log(data);
          setUserName(data.first_name)
          localStorage.setItem('userName', JSON.stringify(data.first_name))
        })
        .catch(error =>{
          console.error(error)
        })
      } 
      else {
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
            localStorage.removeItem('userName');
            setUsuarioLogueado(false)
            navigate("/login");
          }
        });
    };



    return (
        <div className="flex max-h-screen ">
            <MenuLateral rol={ususarioId === 1 ? "ADMIN" : "EMPLEADO"} userId={ususarioId !== null ? ususarioId : 0} cerrarSesion={cerrarSesionClick}/>
            <div className="flex flex-col w-full overflow-y-auto">
                <Header nombreUsuario={userName} />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
