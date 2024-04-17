import { useState } from "react"
import useInput from "../../Hook/useInput"
import { useNavigate } from 'react-router-dom'

export function FormularioLogin({modalSwitch}) {

  const nombreUsuario = useInput('text')
  const password = useInput('password')
  const [error, setError] = useState({})
  const [errorCredenciales, setErrorCredenciales] = useState(false)
  const navigate = useNavigate()

  const endpoint = import.meta.env.VITE_API_KEY;
  console.log(endpoint);
  const validarNombreUsuario = (usuario) => {

    if (usuario.includes('@')) {
      return true
    }
    else{
      return false
    }
  }

  const validarPassword = (pass) => {

    const passwordArr = pass.split('')

    const incluyeNumero = passwordArr.some((caracter) => {
      if(isNaN(caracter)){       
        return false
      }else{
        return true
      }
    })

    if (pass.length > 5 && incluyeNumero) {
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

  const payload = {
    "email": nombreUsuario.value,
    "password": password.value
  }

  const configuraciones = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }

  const IniciarSesionClick = (event) => {
    event.preventDefault()

    setErrorCredenciales(false)
    const erroresValidacion = verificarValidaciones()
    setError(erroresValidacion)

    if (erroresValidacion.usuario === false && erroresValidacion.password === false) {
      console.log(configuraciones);
      console.log(JSON.parse(configuraciones.body));

      fetch(`${endpoint}/api/v1/token/`, configuraciones)
      .then(res=> {
        if(!res.ok){
          throw new Error (res.status)
        }
        else{
          return res.json()
        }
      })
      .then((data)=>{
        console.log(data)

        localStorage.setItem('refresh', JSON.stringify(data.refresh))
        localStorage.setItem('token', JSON.stringify(data.access))

        nombreUsuario.onChange({target: { value: ''}})
        password.onChange({target: { value: ''}})
        navigate('/')
      })
      .catch((error)=>{
        console.error(error)
        setErrorCredenciales(true)
      })
    }
  }

  const quitarMsjCred = () => {
    setErrorCredenciales(false)
  }


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

            {
              errorCredenciales &&
              <div className="flex justify-between bg-red-300 p-2 mb-2">
                <h4 className="text-red-950">Las credenciales no son válidas</h4>
                <span onClick={quitarMsjCred} className="cursor-pointer"><i className="fas fa-x fa-lg text-red-950"></i></span>
              </div>
            }
            <label className="text-gray-700 text-lg mb-2 mt-2">Correo electrónico</label>
            <input {...nombreUsuario} className='border border-gray-400 text-lg rounded-full mt-2 mb-2 p-2 pl-3 w-full'/>
            {
              (error.usuario && nombreUsuario.value.length === 0) &&
              <h5>*Campo obligatorio</h5>
            }
            {
              (error.usuario && !nombreUsuario.value.includes('@') && nombreUsuario.value.length !== 0) &&
              <h5>Debe contener '@'</h5>
            }
            {
              (error.usuario && nombreUsuario.value.includes('@')) &&
              <h5 style={{color: "green"}}>Email Ok!</h5>
            }
            <label className="text-gray-700 text-lg mb-2 mt-2">Contraseña</label>
            <input {...password} className='border border-gray-400 text-lg rounded-full mt-2 mb-2 p-2 pl-3 w-full'/>
            {
              (error.password && password.value.length === 0) ?
              <h5>*Campo obligatorio</h5> :
              (error.password && !validarPassword(password.value)) &&
              <h5>+6 Caracteres, al menos un número</h5>
            }
            {
              (error.password && validarPassword(password.value)) &&
              <h5 style={{color: "green"}}>Contraseña Ok!</h5>

            }
            <button className='text-white text-lg font-semibold rounded-full mt-8 border border-gray-400 w-full p-2 bg-primary hover:bg-blue-900'>Ingresar</button>
          
            <h4 onClick={modalSwitch} className="pt-6 underline text-center cursor-pointer">Olvidé mi contraseña</h4>
          </form>
      </div>
    </>
  )
}
