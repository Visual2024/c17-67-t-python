import React, { useState } from 'react'
import { FormularioRegistro } from './Form/FormularioRegistro'
import { FormularioRegistro2 } from './Form/FormularioRegistro2'

export function ModalCandidatos({formSwitch}) {

    const [paso, setPaso] = useState(1)

    const pasoSiguiente = () => {
        setPaso((prev)=> prev +1)
    }

    const pasoAnterior = () => {
        setPaso((prev)=> prev -1)
    }


  return (
    <section>
        <header className='flex items-center justify-center w-full'>
            <div className='text-white w-10 h-10 flex items-center justify-center bg-primary rounded-xl'>1</div>
            <div className={`h-[3px] w-[100px] ${paso !== 1 ? 'bg-primary' : 'bg-gray-400'}`}></div>
            <div className={`text-white w-10 h-10 flex items-center justify-center ${paso !== 1 ? 'bg-primary' : 'bg-gray-400'} rounded-xl`}>2</div>
            <div className={`h-[3px] w-[100px] ${paso === 3 ? 'bg-primary' : 'bg-gray-400'}`}></div>
            <div className={`text-white w-10 h-10 flex items-center justify-center ${paso === 3 ? 'bg-primary' : 'bg-gray-400'} rounded-xl`}>3</div>
        </header>

        <div>
            {
                paso === 1 &&
                <FormularioRegistro />
            }
            {
                paso === 2 &&
                <FormularioRegistro2 />
            }
        </div>

        <div className={`flex ${paso === 1 ? 'justify-end' : 'justify-between'}`}>
            {
                paso !== 1 &&
                <button onClick={pasoAnterior} className=' w-32 p-1 rounded-2xl border border-primary hover:bg-primary hover:text-white hover:border-none'>Regresar</button>
            }
            {
                paso !== 3 ?
                <button className=' w-32 p-1 rounded-2xl border border-primary hover:bg-primary hover:text-white hover:border-none' onClick={pasoSiguiente}>Próximo</button>
                :
                <button className=' w-32 p-1 rounded-2xl border border-primary hover:bg-primary hover:text-white hover:border-none' onClick={formSwitch}>Finalizar</button>
            }            
        </div>


    </section>

  )
}
