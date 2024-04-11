/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useState } from "react"
import DataTable, { createTheme } from "react-data-table-component"
import { useNavigate } from "react-router-dom"

export function CandidatesDashboard() {
  const [candidates, setCandidates] = useState(null)
  const [data, setData] = useState(null)
  const navigate = useNavigate()

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
      selector: row => row.first_name + " " + row.last_name,
      sortable: true
    },
    {
      name: "Mail",
      selector: row => row.email,
      sortable: true
    },
    {
      name: "Telefono",
      selector: row => row.phone_number
    },
    {
      name: "Dia de postulacion",
      selector: row => row.postulation_date
    },
    {
      name: "DNI",
      selector: row => row.dni
    },
  ]

  const handleChange = (e) => {
    const filteredCandidates = data.map(candidate => {
      const fullName = candidate.first_name + " " + candidate.last_name;
      return { ...candidate, full_name: fullName };
    }).filter(candidate => candidate.full_name.toLowerCase().includes(e.target.value.toLowerCase()));
    console.log(filteredCandidates)
    setCandidates(filteredCandidates)
  }

  

  useEffect(() => {
    fetch("http://127.0.0.1:8000/hiring/api/v1/candidate/", {
      "method": "GET",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data.results)
        setCandidates(data.results)
      })
  }, [])

  if (!candidates) return <p>Loading...</p>

  return (
    <div className="mt-10 m-2 shadow-xl">
      {/*<ul className="py-2 px-5 bg-gray-500/10 grid grid-cols-6 font-bold">
        <li>Nombre del candidato</li>
        <li>Mail</li>
        <li>Número de teléfono</li>
        <li>Dia de postulación</li>
        <li>DNI</li>
        <li></li>
      </ul>
      {candidates.map((candidate) => (
        <div key={candidate.id} className="p-5 grid grid-cols-6">
          <p><span className="md:hidden">Nombre: </span>{candidate.first_name} {candidate.last_name}</p>
          <p>{candidate.email}</p>
          <p>{candidate.phone_number}</p>
          <p>{candidate.postulation_date}</p>
          <p>{candidate.dni}</p>
          <p>. . .</p>
        </div>
      ))}*/}
      <input type="text" onChange={handleChange} placeholder="Buscar por nombre..." className="px-2 py-0.5 border-2 border-gray-300 rounded-md" />
      <DataTable columns={columns} data={candidates} highlightOnHover pointerOnHover responsive pagination onRowClicked={() => navigate("/")} />
    </div>
  )
}
