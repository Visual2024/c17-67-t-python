import loginstyles from '../Styles/Login.module.css'
import { FormularioLogin } from '../Components/Form/FormularioLogin';
import { LoginFormRegis } from '../Components/Form/LoginFormRegis';
import { useEffect, useState } from 'react';
import { ModalCandidatos } from '../Components/ModalCandidatos';

export const Login = () => {

  const [divEmergenteSize, setDivEmergenteSIze] = useState('0')
  const [formOpacity, setFormOpacity] = useState('0')
  const [indexZ, setIndexZ] = useState('-1')

  const [loginSwitch, setLoginSwitch] = useState(false)
  const [verFormRegistro, setVerFormRegistro] = useState(false)

  const cForm = () => {
    setVerFormRegistro(!verFormRegistro)
  }

  const cambiarForm = () => {
    setLoginSwitch(!loginSwitch)
  }

  useEffect(()=>{
    if (verFormRegistro) {
      setDivEmergenteSIze('700px')
      setIndexZ('2')
      const timer = setTimeout(() => {
        setFormOpacity('1')
      }, 400)

      return () => clearTimeout(timer)      
    }
    else{
      setDivEmergenteSIze('0')
      setFormOpacity('0')

      const timer2 = setTimeout(() => {
        setIndexZ('-1')
      }, 400)

      return () => clearTimeout(timer2) 
    }
  }, [verFormRegistro])


  return (
    <div className={loginstyles.Container}>
      <figure>
        <img onClick={cForm} className={loginstyles.imgLogo} src="/images/HR-Nexo-2.png" alt="logo-Nexo-RecursosHumanos" />
          {
            !loginSwitch ?
            <h2 onClick={cambiarForm} className='cursor-pointer text-2xl underline'>Trabaja con Nosotros</h2>
               :
            <h2 onClick={cambiarForm} className='cursor-pointer text-2xl underline'>Iniciar Sesión</h2>
          }
      </figure>

      <div className={loginstyles.formulariosDiv}>
      {
        !loginSwitch ?
          <div className={loginstyles.formLoginDiv}>
            <FormularioLogin />
          </div>
          :
          <div className={loginstyles.formRegistro}>
            <LoginFormRegis />
            <div className={loginstyles.formImg}>
              <img src="/images/img-login-1.png" alt="" />            
            </div>
          </div>
      }
      </div>

      <div className={loginstyles.formEmergenteExterior} style={{backgroundColor: verFormRegistro ? 'rgb(0, 0, 0,.2)' : 'transparent', zIndex: indexZ}}>
        <div className={loginstyles.formEmergenteContainer} style={{width: divEmergenteSize}}>
          <span onClick={cForm} style={{display: verFormRegistro? 'block' : 'none'}}><i className="fas fa-x fa-2x text-gray-900"></i></span>
            {
              verFormRegistro &&
              <div className={loginstyles.formEmergenteDiv} style={{opacity: formOpacity, transition: 'opacity .2s ease'}}>
                <ModalCandidatos />
              </div>
            }
        </div>
      </div>

    </div>
  )
}
