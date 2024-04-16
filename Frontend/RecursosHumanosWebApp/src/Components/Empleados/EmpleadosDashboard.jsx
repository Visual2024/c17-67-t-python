import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom';

export const EmpleadosDashboard = ({cambiosSwitch}) => {

    const [empleados, setEmpleados] = useState({});
    const navigate = useNavigate()

    const url = import.meta.env.VITE_API_KEY
    const token = JSON.parse(localStorage.getItem('token'))

    const configuraciones = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    useEffect(() => {
        fetch(`${url}/api/v1/employees/`, configuraciones)
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
        .catch(error=> console.error(error))

    }, [cambiosSwitch])

    const data = [
        {
            "id": 2,
            "last_login": null,
            "first_name": null,
            "last_name": null,
            "email": "admin@hrnexo.com",
            "dni": null,
            "phone_number": "",
            "secondary_phone_number": null,
            "address": "",
            "city": "",
            "state": null,
            "is_staff": true,
            "is_superuser": true,
            "is_active": true,
            "groups": [],
            "user_permissions": []
        },
        {
            "id": 3,
            "last_login": null,
            "first_name": "Marcos",
            "last_name": "Pacheco",
            "email": "marcos.pachecopezo3@example.com",
            "dni": "44444444",
            "phone_number": "123245d4a54",
            "secondary_phone_number": "456456456",
            "address": "calle Falsa 1234",
            "city": "Springfield",
            "state": "Unknown",
            "is_staff": false,
            "is_superuser": false,
            "is_active": true,
            "groups": [],
            "user_permissions": []
        },
        {
            "id": 1,
            "last_login": "2024-04-16T03:02:16.617303Z",
            "first_name": null,
            "last_name": null,
            "email": "pachecolobos.felix@gmail.com",
            "dni": null,
            "phone_number": "",
            "secondary_phone_number": null,
            "address": "",
            "city": "",
            "state": null,
            "is_staff": true,
            "is_superuser": true,
            "is_active": true,
            "groups": [],
            "user_permissions": []
        }
    ]
    
    const columns = [
        {
            name: "Nombre",
            selector: (row) => row.first_name
        },
        {
            name: "Apellido",
            selector: (row) => row.last_name
        },
        {
            name: "Mail",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "Telefono",
            selector: (row) => row.phone_number,
        },
        // {
        //     name: "Puesto de trabajo",
        //     selector: (row) => {
        //         let str = row.last_name;
        //         let words = str.split(" ");
        //         let puesto = words.find(
        //             (word) => word === "Frontend" || word === "Backend"
        //         );
        //         return puesto;
        //     },
        // },
        {
            name: "DNI",
            selector: (row) => row.dni,
        },
    ];


    const verDatosPersonales = (index) => {
        const id = index.id;
        navigate(`/datospersonales/${id}`)
    }


  return (
    <div className="m-2 shadow-xl">
        <DataTable 
            columns={columns}
            data={data}
            highlightOnHover
            pointerOnHover
            responsive
            onRowClicked={(index) => verDatosPersonales(index)}
        />
    </div>
  )
}
