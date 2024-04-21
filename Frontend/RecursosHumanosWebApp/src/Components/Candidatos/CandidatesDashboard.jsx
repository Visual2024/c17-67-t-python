/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { Spinner } from "../../utils/Spinner";

export function CandidatesDashboard({ contratarEmpleado, cambiosSwitch }) {
    const [candidates, setCandidates] = useState(null);
    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const url = import.meta.env.VITE_API_KEY;

    /* createTheme('solarized', {
    text: {
      primary: '#0B0060',
      secondary: '#2aa198',
    },
    background: {
      default: '#FFFFFF',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    }, 
    divider: {
      default: '#073642',
    },
     action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.5)',
      disabled: 'rgba(0,0,0,.12)',
    }, 
  }, 'light') */

    const columns = [
        {
            name: "Nombre",
            selector: (row) => {
                let str = row.last_name;
                let words = str.split(" ");
                words.pop();
                return row.first_name + " " + words.join(" ");
            },
            sortable: true,
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
        {
            name: "Puesto de trabajo",
            selector: (row) => {
                let str = row.last_name;
                let words = str.split(" ");
                let puesto = words.find(
                    (word) => word === "Frontend" || word === "Backend"
                );
                return puesto;
            },
        },
        {
            name: "Fecha de Nacimiento",
            selector: (row) => {
                const fechaDeNacimiento = new Date(row.secondary_phone_number);
                return fechaDeNacimiento.toLocaleDateString("es-ar");
            },
        },
    ];

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
        setCandidates(filteredCandidates);
    };

    useEffect(() => {
        fetch(`${url}/api/v1/postulants?page=${currentPage}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data.results);
                setCandidates(data.results);
                setTotalResults(data.count);
            });
    }, [cambiosSwitch, currentPage]);

    if (!candidates)
        return (
            <div className="mt-20 grid place-items-center">
                <Spinner />
            </div>
        );

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
                data={candidates}
                highlightOnHover
                pointerOnHover
                responsive
                pagination
                paginationServer
                paginationTotalRows={totalResults}
                paginationPerPage={10}
                paginationComponentOptions={{ noRowsPerPage: true }}
                onChangePage={(page) => setCurrentPage(page)}
                onRowClicked={(index) => contratarEmpleado(index)}
            />
        </div>
    );
}
