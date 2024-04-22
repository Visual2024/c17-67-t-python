import DataTable from "react-data-table-component"

export const Dashboard_Gerente1 = () => {
  const columns = [
    {
      name: "PHOTO",
      cell: (row) => <img src="/images/img-login-1.png" style={{ width: '30px', height: '30px', borderRadius: '50%' }} alt="team" />,
      selector: (row) => row.photo
    },
    {
      name: "NAME",
      selector: (row) => row.name,
    },
    {
      name: "AMOUNT",
      selector: (row) => row.amount,
      style: {
        fontWeight: 'bold',
        fontSize: '0.8rem',
        paddingBottom: '0.25rem',
      }
    },
  ]

  const data = [
    {
      name: "Flicker",
      amount: "$" + 1200,
    },
    {
      name: "Intoxica",
      amount: "$" + 1800,
    },
    {
      name: "Digiwatt",
      amount: "$" + 2400,
    },
  ]

  return (
    <div className="border border-gray-300 rounded-lg p-8">
      <h3 className="font-bold text-[1.2rem] pb-1">RECENT TRANSCATIONS</h3>
      <p className="text-[13px] text-gris">Projects where development work is on completion</p>
      <DataTable 
        columns={columns}
        data={data}
        highlightOnHover
        pointerOnHover
        pagination
        //selectableRows
      />
    </div>
  )
}


