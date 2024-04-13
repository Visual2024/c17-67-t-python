import loginstyles from '../Styles/Login.module.css'
import { FormularioLogin } from '../Components/Form/FormularioLogin';
import { LoginFormRegis } from '../Components/Form/LoginFormRegis';
import { useEffect, useState } from 'react';
import { ModalCandidatos } from '../Components/ModalCandidatos';
import { Box, Modal, Typography } from '@mui/material';


export const Login = () => {

  const [verFormRegistro, setVerFormRegistro] = useState(false)
  const [divEmergenteSize, setDivEmergenteSIze] = useState('0')
  const [formOpacity, setFormOpacity] = useState('0')
  const [indexZ, setIndexZ] = useState('-1')

  const formSwitch = () => {
    setVerFormRegistro(!verFormRegistro)
  }

  const style = {
    position: 'absolute',
    top: '20%',
    bgcolor: 'background.paper',
    boxShadow: 15,
  };

  // useEffect(()=>{
  //   if (verFormRegistro) {
  //     setDivEmergenteSIze('700px')
  //     setIndexZ('2')
  //     const timer = setTimeout(() => {
  //       setFormOpacity('1')
  //     }, 400)

  //     return () => clearTimeout(timer)      
  //   }
  //   else{
  //     setDivEmergenteSIze('0')
  //     setFormOpacity('0')

  //     const timer2 = setTimeout(() => {
  //       setIndexZ('-1')
  //     }, 400)

  //     return () => clearTimeout(timer2) 
  //   }
  // }, [verFormRegistro])



  return (
    <div className={loginstyles.Container}>
      <figure>
        <img className={loginstyles.imgLogo} src="/images/HR-Nexo-2.png" alt="logo-Nexo-RecursosHumanos" />
      </figure>

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

      {/* <div className={loginstyles.formEmergenteExterior} style={{backgroundColor: verFormRegistro ? 'rgb(0, 0, 0,.2)' : 'transparent', zIndex: indexZ}}>
        <div className={loginstyles.formEmergenteContainer} style={{width: divEmergenteSize}}>
          <span onClick={formSwitch} style={{display: verFormRegistro? 'block' : 'none'}}><i className="fas fa-x fa-2x text-gray-900"></i></span>
            {
              verFormRegistro &&
              <div className={loginstyles.formEmergenteDiv} style={{opacity: formOpacity, transition: 'opacity .2s ease'}}>
                <ModalCandidatos />
              </div>
            }
        </div>
      </div> */}

      <Modal
        open={verFormRegistro}
        onClose={formSwitch}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='w-full sm:w-[600px] h-[420px] sm:right-[5%] p-10 rounded-md select-none'>
          <ModalCandidatos formSwitch={formSwitch}/>
        </Box>
      </Modal>

    </div>
  )
}
