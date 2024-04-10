import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"

export function Header({nombreUsuario}) {

  const navigate = useNavigate()

  const cerrarSesionClick = () => {
    Swal.fire({
      title: "Desea Cerrar Sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!",
      cancelButtonText: "No!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear()
        navigate('/login')
      }
    });
  }

  return (
    <div className="flex items-center justify-between py-2 px-8">
      <h2 className="text-2xl font-bold">Nombre de la sección</h2>
      <div className="flex items-center justify-between gap-4">
        <h3>{nombreUsuario}</h3>
        <button onClick={cerrarSesionClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cerrar Sesión</button>          
      </div>
    </div>
  )
}
