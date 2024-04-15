import loginstyles from '../Styles/Login.module.css'
import { FormularioLogin } from '../Components/Form/FormularioLogin';
import { LoginFormRegis } from '../Components/Form/LoginFormRegis';
import { useEffect, useState } from 'react';
import { ModalCandidatos } from '../Components/ModalCandidatos';
import { Box, Modal, Typography } from '@mui/material';


export const Login = () => {

  const [divEmergenteSize, setDivEmergenteSIze] = useState('0')
  const [formOpacity, setFormOpacity] = useState('0')
  const [indexZ, setIndexZ] = useState('-1')

  const [loginSwitch, setLoginSwitch] = useState(false)
  const [verFormRegistro, setVerFormRegistro] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalMsj, setModalMsj] = useState(false)
  const [modalInputValue, setModalInputValue] = useState('')

  const onChangeModalInput = (e) => {
    setModalInputValue(e.target.value)
  }

  const modalSwitch = () => {
    setModalInputValue('')
    setModalMsj(false)
    setModal(!modal)
  }
  const modalMsjSwitch = () => {
    if (modalInputValue.includes('@')) {
      setModalMsj(!modalMsj)
      setModalInputValue('')
    }
  }

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

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '3px',
    height: '190px',
    userSelect: 'none'
  };

  return (
    <div className={loginstyles.Container}>
      <figure>
        <img onClick={cForm} className={loginstyles.imgLogo} src="/images/HR-Nexo-2.png" alt="logo-Nexo-RecursosHumanos" />
          {
            !loginSwitch ?
            <h2 onClick={cambiarForm} className='cursor-pointer text-xl underline'>Trabaja con Nosotros</h2>
               :
            <h2 onClick={cambiarForm} className='cursor-pointer text-xl underline'>Iniciar Sesión</h2>
          }
      </figure>

      <div className={loginstyles.formulariosDiv}>
      {
        !loginSwitch ?
          <div className={loginstyles.formLoginDiv}>
            <FormularioLogin modalSwitch={modalSwitch}/>
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

      <Modal
        open={modal}
        onClose={modalSwitch}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign: 'start', width: '100%'}}>
            Restablecer mi contraseña
          </Typography>
          {
            modalMsj ?
            <Typography id="modal-modal-description">
              Te enviaremos un link por mail para que puedas crear una nueva contraseña
            </Typography>
            :
            <>
              <input value={modalInputValue} onChange={onChangeModalInput} type="email" placeholder='Mail' style={{border: '2px solid grey', borderRadius: '3px', padding: '2px 4px', width: '100%'}}/>
              <button onClick={modalMsjSwitch} className=' text-lg'>Enviar</button>               
            </>
          }

        </Box>
      </Modal>


    </div>
  )
}
