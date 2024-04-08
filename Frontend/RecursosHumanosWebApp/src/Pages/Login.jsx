import loginstyles from '../Styles/Login.module.css'
import { FormularioLogin } from '../Components/Form/FormularioLogin';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const [puestoDeTrabajo, setPuestoDeTrabajo] = useState('')
  const [candidatoForm, setCandidatoForm] = useState(false)
  const navigate = useNavigate()

  const switchCandidatoForm = () => {
    setCandidatoForm(!candidatoForm)
  }

  const selectOnChange = (event) => {
    setPuestoDeTrabajo(event.target.value)
  }

  const registrateClick = (event) => {
    event.preventDefault()
    if (puestoDeTrabajo === '') {
      return alert('completar campo obligatorio')
    }

    switchCandidatoForm()
    navigate('/register')
  }

  console.log(candidatoForm)


  return (
    <div className={loginstyles.Container}>
      <h1 className='m-10'>HR Nexo Recursos Humanos</h1>

      <div className='flex flex-row items-center'>
          <div className='rounded border-2 border-gray-400 p-10'>
            <form action="" className='flex flex-col'>
              <h2 className='text-gray-600 text-xl'>Trabaja con nosotros!</h2>
              <p className='text-sm text-gray-600'>Tu proximo desafío laboral comienza aquí</p>
              <select value={puestoDeTrabajo} onChange={selectOnChange} className='text-gray-600 rounded-full border border-gray-400 mt-4 mb-4'>
              <option value="">Selecciona un puesto de trabajo</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </select>
            <button onClick={registrateClick} className='text-white p-2 rounded-full bg-indigo-950' >Regístrate</button>
          </form>

          <img src="" alt="" />
        </div>

        <div className={loginstyles.FormLoginDiv}>
          <FormularioLogin />
        </div>
      </div>

    </div>
  )
}
