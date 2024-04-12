import { useState } from 'react'
import Swal from "sweetalert2"

export const LoginFormRegis = ({formSwitch}) => {

    const [puestoDeTrabajo, setPuestoDeTrabajo] = useState('')
  
    const selectOnChange = (event) => {
      setPuestoDeTrabajo(event.target.value)
    }
  
    const registrateClick = (event) => {
      event.preventDefault()
      if (puestoDeTrabajo === '') {
        return Swal.fire('Selecciona un Puesto de trabajo')
      }
      return formSwitch()
    }


  return (
    <>
        <form onSubmit={registrateClick} className='flex flex-col'>
            <h2 className='text-gray-600 text-3xl font-semibold'>Trabaja con nosotros!</h2>
            <p className='text-sm text-gray-600'>Tu proximo desafío laboral comienza aquí</p>
            <select value={puestoDeTrabajo} onChange={selectOnChange} className='text-gray-600 rounded-full border border-gray-400 mt-8 mb-8 p-2 box-border'>
                <option value="">Selecciona un puesto de trabajo</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
            </select>
            <button className='text-white text-lg  p-2 rounded-full bg-indigo-950 hover:bg-blue-900' >Regístrate</button>
        </form>
    </>
  )
}
