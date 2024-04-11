import loginstyles from '../Styles/Login.module.css'
import { FormularioLogin } from '../Components/Form/FormularioLogin';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const [puestoDeTrabajo, setPuestoDeTrabajo] = useState('')
  const navigate = useNavigate()

  const selectOnChange = (event) => {
    setPuestoDeTrabajo(event.target.value)
  }

  const registrateClick = (event) => {
    event.preventDefault()
    if (puestoDeTrabajo === '') {
      return alert('completar campo obligatorio')
    }

    return navigate('/register')
  }


  return (
    <div className={loginstyles.Container}>
      <img className={loginstyles.imgLogo} src="/images/HR-Nexo-2.png" alt="logo-Nexo-RecursosHumanos" />

      <div className={loginstyles.formulariosDiv}>
        <div className={loginstyles.formRegistro}>

          <form action="" className='flex flex-col'>
            <h2 className='text-gray-600 text-3xl font-semibold'>Trabaja con nosotros!</h2>
            <p className='text-sm text-gray-600'>Tu proximo desafío laboral comienza aquí</p>
            <select value={puestoDeTrabajo} onChange={selectOnChange} className='text-gray-600 rounded-full border border-gray-400 mt-8 mb-8 p-2 box-border'>
              <option value="">Selecciona un puesto de trabajo</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </select>
            <button onClick={registrateClick} className='text-white text-lg  p-2 rounded-full bg-indigo-950 hover:bg-blue-900' >Regístrate</button>
          </form>

          <div className={loginstyles.formImg}>
            <img src="/images/img-login-1.png" alt="" />            
          </div>
        </div>

        <div className={loginstyles.formLoginDiv}>
          <FormularioLogin />
        </div>
      </div>

    </div>
  )
}
