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
    is_active: true
  }

  const capturarDatosPostulante = (item) => {

    console.log(item)

    payload.password = item.first_name+'1234!'

    payload.first_name = item.first_name
    payload.last_name = item.last_name
    payload.email = item.email
    payload.dni = item.secondary_phone_number
    payload.phone_number = item.phone_number
    payload.secondary_phone_number = item.country
    payload.address = item.address
    payload.city = item.city
    payload.state = item.state
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

        fetch(`${url}/api/v1/employees`, configPost)
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
          Swal.fire({
            title: `Nuevo empleado admitido: ${payload.first_name} ${payload.last_name} \nDatos de acceso: \nEmail: ${payload.email} \nContraseña: ${payload.password}`,
            confirmButtonColor: '#0B0060',
            icon: "success",
          })
        })
        .catch(error =>{
          Swal.fire({
            title: "Error al procesar la solicitud de contratación",
            icon: "error",
            confirmButtonColor: '#0B0060',
          })
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
        <EmpleadosDashboard cambiosSwitch={cambiosSwitch}/>

        <h3 className="text-gray-700 text-xl">Candidatos</h3>
        <CandidatesDashboard cambiosSwitch={cambiosSwitch} contratarEmpleado={contratarEmpleado}/>        
    </div>
  )
}