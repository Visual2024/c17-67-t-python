import { useState } from "react"
import useInput from "../../Hook/useInput"
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"

export function FormularioLogin() {

  const nombreUsuario = useInput('text')
  const password = useInput('password')
  const [error, setError] = useState({})
  const navigate = useNavigate()

  const validarNombreUsuario = (usuario) => {

    if (usuario.length > 1) {
      return true
    }
    else{
      return false
    }
  }

  const validarPassword = (pass) => {

    if (pass.toUpperCase() === 'ADMIN' || pass.toUpperCase() === 'GERENTE' || pass.toUpperCase() === 'EMPLEADO') {
      return true
    }
    else{
      return false
    }
  }

  const verificarValidaciones = () => {
    const errores = {}

    const usuarioValido = validarNombreUsuario(nombreUsuario.value)
    const passwordValido = validarPassword(password.value)

    if (!usuarioValido) {
      errores.usuario = true
    } else{
      errores.usuario = false
    }

    if (!passwordValido) {
      errores.password = true
    } else{
      errores.password = false
    }

    return errores
  }


  const IniciarSesionClick = (e) => {
    e.preventDefault()

    const erroresValidacion = verificarValidaciones()
    setError(erroresValidacion)

    if (erroresValidacion.usuario === false && erroresValidacion.password === false) {

      localStorage.setItem('nombreUsuario', JSON.stringify(nombreUsuario.value.toUpperCase()))
      localStorage.setItem('rol', JSON.stringify(password.value.toUpperCase()))

      Swal.fire(`Se inició sesión correctamente \n Usuario: ${nombreUsuario.value} \n Rol: ${password.value.toUpperCase()}`)
      navigate('/')
    }
  }

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        boxShadow: '0 3px 4px 1px rgba(0, 0, 0, 0.3)',
        padding: '24px',
        width: '350px',
        gap: '8px',
      }}>
        <h2 className='text-gray-600 text-3xl font-semibold'>Ingresar</h2>
        <p className='text-sm  text-gray-600'>Inicia sesión para unirte a tu equipo</p>
          <form onSubmit={IniciarSesionClick} className='flex-col w-full pt-2 pb-4'>
            <label className="text-gray-700 text-lg mb-2 mt-2">Nombre de usuario</label>
            <input {...nombreUsuario} className='border border-gray-400 text-lg rounded-full mt-2 mb-2 p-2 w-full'/>
            {
              error.usuario &&
              <h5>Nombre de usuario incorrecto</h5>
            }
            <label className="text-gray-700 text-lg mb-2 mt-2">Contraseña</label>
            <input {...password} className='border border-gray-400 text-lg rounded-full mt-2 mb-2 p-2 w-full'/>
            {
              error.password &&
              <h5>Contraseña incorrecta</h5>
            }
            <button type="submit" className='text-gray-700 text-lg font-semibold rounded-full mt-8 border border-gray-400 w-full p-2 hover:bg-gray-300'>Ingresar</button>
          </form>
      </div>        
    </>
  )
}


