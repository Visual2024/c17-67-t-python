import loginstyles from '../Styles/Login.module.css'
import FormularioLogin from '../Components/Form/FormularioLogin'
import { useState } from 'react'

const Login = () => {

  const [puestoDeTrabajo, setPuestoDeTrabajo] = useState('')
  const [candidatoForm, setCandidatoForm] = useState(false)

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
  }

  console.log(candidatoForm)


  return (
    <div className={loginstyles.Container}>
      <h1 style={{ color: 'red' }}>HR Nexo Recursos Humanos</h1>

      <div className={loginstyles.Formularios}>
        <div className={loginstyles.FormContainer}>

          <form className={loginstyles.registroCandidatoForm}>
            <h2>Trabaja con nosotros!</h2>
            <select value={puestoDeTrabajo} onChange={selectOnChange}>
              <option value="">Selecciona un puesto de trabajo</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </select>
            <button onClick={registrateClick}>Registrate</button>
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

export default Login
