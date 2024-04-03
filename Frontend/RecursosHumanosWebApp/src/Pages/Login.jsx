import React from 'react'
import FormularioLogin from '../Components/Formulario/FormularioLogin'
import '../Styles/login.css'

const Login = () => {


  return (
    <div className='Container'>
        <h1 style={{color: 'red'}}>HR Nexo Recursos Humanos</h1>

        <div className='Formularios'>
          <div className='Form-container'>
            <form action="">
              <h2>Trabaja con nosotros!</h2>
              <select name="" id="">
                <option value="">Selecciona un puesto de trabajo</option>
                <option value="">Frontend</option>
                <option value="">Backend</option>
              </select>
              <button>Registrate</button>
            </form>
            <img src="" alt="" />
          </div>

          <div className='Form-Login'>
            <FormularioLogin />
          </div>
        </div>

    </div>
  )
}

export default Login