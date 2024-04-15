import { useEffect, useState } from "react"
import useInput from "../../Hook/useInput"
import { useNavigate } from 'react-router-dom'

export function FormularioLogin({modalSwitch}) {

  const nombreUsuario = useInput('text')
  const password = useInput('password')
  const [error, setError] = useState({})
  const [errorNameFeed, setErrorNameFeed] = useState(false)
  const [errorPassFeed, setErrorPassFeed] = useState(false)
  const navigate = useNavigate()

  const validarNombreUsuario = (usuario) => {

    if (usuario.includes('@nexo')) {
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

    setErrorNameFeed(true)
    setErrorPassFeed(true)

    const erroresValidacion = verificarValidaciones()
    setError(erroresValidacion)

    if (erroresValidacion.usuario === false && erroresValidacion.password === false) {

      sessionStorage.setItem('nombreUsuario', JSON.stringify(nombreUsuario.value.toUpperCase()))
      sessionStorage.setItem('rol', JSON.stringify(password.value.toUpperCase()))

      navigate('/')
    }
  }

  // useEffect(()=>{
  //   setErrorNameFeed(false)
  // }, [nombreUsuario.value])

  useEffect(()=>{
    setErrorPassFeed(false)
  }, [password.value])


  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        boxShadow: '0 5px 8px -1px rgba(0, 0, 0, 0.3)',
        padding: '24px',
        minWidth: '320px',
        gap: '8px',
        borderRadius:'8px'
      }}>
        <header>
          <h2 className='text-gray-600 text-3xl font-semibold mb-1'>Ingresar</h2>
          <p className='text-sm  text-gray-600'>Inicia sesión para unirte a tu equipo</p>          
        </header>

          <form onSubmit={IniciarSesionClick} className='flex-col w-full pt-2'>
            <label className="text-gray-700 text-lg mb-2 mt-2">Correo electrónico</label>
            <input {...nombreUsuario} className='border border-gray-400 text-lg rounded-full mt-2 mb-2 p-2 w-full'/>
            {
              (error.usuario && nombreUsuario.value.length === 0) &&
              <h5>*Campo obligatorio</h5>
            }
            {
              (error.usuario && !nombreUsuario.value.includes('@nexo') && nombreUsuario.value.length !== 0 && errorNameFeed) &&
              <h5>Debe contener '@nexo'</h5>
            }
            <label className="text-gray-700 text-lg mb-2 mt-2">Contraseña</label>
            <input {...password} className='border border-gray-400 text-lg rounded-full mt-2 mb-2 p-2 w-full'/>
            {
              (error.password && password.value.length === 0 && errorPassFeed) ?
              <h5>*Campo obligatorio</h5> :
              (error.password && password.value.length > 0 && errorPassFeed) &&
              <h5>Contraseña incorrecta</h5>
            }
            <button className='text-white text-lg font-semibold rounded-full mt-8 border border-gray-400 w-full p-2 bg-primary hover:bg-blue-900'>Ingresar</button>
          
            <h4 onClick={modalSwitch} className="pt-6 underline text-center cursor-pointer">Olvidé mi contraseña</h4>
          </form>
      </div>
    </>
  )
}
