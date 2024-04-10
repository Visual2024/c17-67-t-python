import { useState } from "react"
import useInput from "../../Hook/useInput"
import { useNavigate } from 'react-router-dom'

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

      alert(`login valido ${nombreUsuario.value}, ${password.value}`)
      navigate('/')
    }
  }

  return (
    <>
      <div className='flex flex-col m-20 border-2 border-gray-400 rounded-lg'>
        <h2 className='text-center text-gray-600 m-1 mt-4'>Iniciar Sesión</h2>
        <p className='text-sm  text-gray-600 m-5'>Inicia sesión para unirte a tu equipo</p>
        <div>
          <form onSubmit={IniciarSesionClick} className='flex flex-col'>
            <input {...nombreUsuario} placeholder='usuario' className='border border-gray-200 rounded-lg m-2'/>
            {
              error.usuario &&
              <h5>Nombre de usuario incorrecto</h5>
            }
            <input {...password} placeholder='password'className='border border-gray-200 rounded-lg m-2'/>
            {
              error.password &&
              <h5>Contraseña incorrecta</h5>
            }
            <button type="submit" className='text-gray-400 rounded-full m-2 mb-4 border border-gray-400'>Ingresar</button>
          </form>
        </div>
      </div>
    </>
  )
}


