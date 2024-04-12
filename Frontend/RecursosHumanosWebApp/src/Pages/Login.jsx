import loginstyles from '../Styles/Login.module.css'
import { FormularioLogin } from '../Components/Form/FormularioLogin';
import { LoginFormRegis } from '../Components/Form/LoginFormRegis';
import { useEffect, useState } from 'react';
import { FormularioRegistro } from '../Components/Form/FormularioRegistro';


export const Login = () => {

  const [verFormRegistro, setVerFormRegistro] = useState(false)
  const [divEmergenteSize, setDivEmergenteSIze] = useState('0')
  const [formOpacity, setFormOpacity] = useState('0')
  const [indexZ, setIndexZ] = useState('-1')

  const formSwitch = () => {
    setVerFormRegistro(!verFormRegistro)
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
      <img className={loginstyles.imgLogo} src="/images/HR-Nexo-2.png" alt="logo-Nexo-RecursosHumanos" />

      <div className={loginstyles.formulariosDiv}>
        <div className={loginstyles.formRegistro}>

          <LoginFormRegis formSwitch={formSwitch}/>

          <div className={loginstyles.formImg}>
            <img src="/images/img-login-1.png" alt="" />            
          </div>
        </div>

        <div className={loginstyles.formLoginDiv}>
          <FormularioLogin />
        </div>
      </div>

      <div className={loginstyles.formEmergenteExterior} style={{backgroundColor: verFormRegistro ? 'rgb(0, 0, 0,.2)' : 'transparent', zIndex: indexZ}}>
        <div className={loginstyles.formEmergenteContainer} style={{width: divEmergenteSize}}>
          <span onClick={formSwitch} style={{display: verFormRegistro? 'block' : 'none'}}><i className="fas fa-x fa-2x text-gray-900"></i></span>
            {
              verFormRegistro &&
              <div className={loginstyles.formEmergenteDiv} style={{opacity: formOpacity, transition: 'opacity .2s ease'}}>
                <FormularioRegistro />
              </div>                
            }
        </div>
      </div>
      
    </div>
  )
}
