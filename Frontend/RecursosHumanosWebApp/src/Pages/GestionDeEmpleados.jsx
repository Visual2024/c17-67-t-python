import { useState } from "react"
import { CandidatesDashboard } from "../Components/Candidatos/CandidatesDashboard"
import { EmpleadosDashboard } from "../Components/Empleados/EmpleadosDashboard"

export const GestionDeEmpleados = () => {

  const [cambiosSwitch, setCambiosSwitch] = useState(false)

  const setearCambios = () => {
    setCambiosSwitch(!cambiosSwitch)
  }

  return (
    <div>
        <h3 className="text-gray-700 text-xl">Empleados</h3>
        <EmpleadosDashboard cambiosSwitch={cambiosSwitch}/>

        <h3 className="text-gray-700 text-xl">Candidatos</h3>
        <CandidatesDashboard setearCambios={setearCambios}/>        
    </div>
  )
}
