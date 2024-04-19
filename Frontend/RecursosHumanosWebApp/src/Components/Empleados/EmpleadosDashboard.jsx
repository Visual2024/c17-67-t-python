import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom';

export const EmpleadosDashboard = ({cambiosSwitch}) => {

    const [empleados, setEmpleados] = useState(null);
    const [data, setData] = useState(null);
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const url = import.meta.env.VITE_API_KEY
    // const token = JSON.parse(localStorage.getItem('token'))


    // const configuraciones = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`
    //     }
    // }

    useEffect(() => {
        fetch(`${url}/api/v1/employees?page=${currentPage}`)
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
            setData(data.results)
            setEmpleados(data.results)
            setTotalResults(data.count)
        })
        .catch(error=> console.error(error))

    }, [cambiosSwitch, currentPage])

    
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
        console.log(index);
        const id = index.id;
        navigate(`/datospersonales/${id}`)
    }

    const handleChange = (e) => {
        const filteredCandidates = data
            .map((candidate) => {
                const fullName =
                    candidate.first_name + " " + candidate.last_name;
                return { ...candidate, full_name: fullName };
            })
            .filter((candidate) =>
                candidate.full_name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            );
        console.log(filteredCandidates);
        setEmpleados(filteredCandidates);
    };

    if (!empleados) return <p>Loading...</p>;

  return (
    <div className="m-2 mb-8 shadow-xl">
        <input
            type="text"
            onChange={handleChange}
            placeholder="Buscar por nombre..."
            className="px-2 py-0.5 border-2 border-gray-300 rounded-md"
        />
        <DataTable 
            columns={columns}
            data={empleados}
            highlightOnHover
            pointerOnHover
            responsive
            pagination
            paginationServer
            paginationTotalRows={totalResults}
            paginationPerPage={10}
            paginationComponentOptions={{noRowsPerPage: true}}
            onChangePage={(page) => setCurrentPage(page)}
            onRowClicked={(index) => verDatosPersonales(index)}
        />
    </div>
  )
}
