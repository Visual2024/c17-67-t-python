import { useState } from "react"
import { CandidatesDashboard } from "../Components/Candidatos/CandidatesDashboard"
import { EmpleadosDashboard } from "../Components/Empleados/EmpleadosDashboard"
import Swal from "sweetalert2"

export const GestionDeEmpleados = () => {

  const url = import.meta.env.VITE_API_KEY
  const token = JSON.parse(localStorage.getItem('token'))

  const [cambiosSwitch, setCambiosSwitch] = useState(false)

  const setearCambios = () => {
    setCambiosSwitch(!cambiosSwitch)
  }

  const payload = {
    password: '',
    last_login: '2024-04-16T21:24:05.931Z',
    first_name: '',
    last_name: '',
    email: '',
    dni: '',
    phone_number: '',
    secondary_phone_number: '',
    address: '',
    city: '',
    state: '',
    is_staff: false,
    is_superuser: false,
    is_active: true,
    groups: [
      2
    ],
    user_permissions: [
      0
    ]
  }

  const capturarDatosPostulante = (item) => {

    console.log(item)

    payload.password = item.first_name+'123Nexo'
    payload.first_name = item.first_name
    payload.last_name = item.last_name
    payload.email = item.email
    payload.dni = ''
    payload.phone_number = item.phone_number
    payload.secondary_phone_number = ''
    payload.address = ''
    payload.city = ''
    payload.state = ''
  }

  const configDelete = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const eliminarCandidatoContratado = (item) => {

    fetch(`${url}/api/v1/postulants/${item.id}`, configDelete)
    .then(res => {
      if (!res.ok) {
        throw new Error (res.status)
      }
      else{
        console.log(res)
        return res.json()
      }
    })
    .then((data) => {
      console.log(data)
    })
    .catch(error => {
      alert('Error al intentar eliminar candidato')
      console.error(error)
    })
  }


  const configPost = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  }


  const contratarEmpleado = (index) => {

    capturarDatosPostulante(index)

    console.log(index.id)

    Swal.fire({
      title: `Confirma la contratación de ${index.first_name} ${index.last_name}`,
      showCancelButton: true,
      confirmButtonColor: '#0B0060',
      cancelButtonColor: "#626262",
      confirmButtonText: "Contratar",
      cancelButtonText: "Denegar",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`${url}/api/v1/employees/`, configPost)
        .then(res => {
          if (!res.ok) {
            throw new Error (res.status)
          }
          else{
            console.log(res)
            return res.json()
          }
        })
        .then((data) => {
          console.log(data)

          eliminarCandidatoContratado(index)
          setearCambios()
        })
        .catch(error =>{
          alert('Error al intentar contratar empleado')
          console.error(error)
        })
      }

      else{
        return
      }
    })
  }



  return (
    <div>
        <h3 className="text-gray-700 text-xl">Empleados</h3>
        <EmpleadosDashboard cambiosSwitch={cambiosSwitch} contratarEmpleado={contratarEmpleado}/>

        <h3 className="text-gray-700 text-xl">Candidatos</h3>
        <CandidatesDashboard cambiosSwitch={cambiosSwitch}/>        
    </div>
  )
}
