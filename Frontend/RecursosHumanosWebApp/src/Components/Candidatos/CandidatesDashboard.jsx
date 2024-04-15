/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { useNavigate } from "react-router-dom";

export function CandidatesDashboard() {
    const [candidates, setCandidates] = useState(null);
    const [data, setData] = useState(null);
    const navigate = useNavigate();

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
            name: "Dia de postulacion",
            selector: (row) => row.postulation_date,
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
            name: "DNI",
            selector: (row) => row.dni,
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
        fetch("http://127.0.0.1:8000/hiring/api/v1/candidate/", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data.results);
                setCandidates(data.results);
            });
    }, []);

    if (!candidates) return <p>Loading...</p>;

    return (
        <div className="mt-10 m-2 shadow-xl">
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
                onRowClicked={() => navigate("/")}
            />
        </div>
    );
}
