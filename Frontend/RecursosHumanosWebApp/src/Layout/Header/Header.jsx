export function Header({nombreUsuario}) {

  return (
    <div className="flex items-center justify-between py-2 px-8">
      <h2 className="text-2xl font-bold"></h2>
      <div className="flex items-center justify-between gap-4">
        <h3>{nombreUsuario}</h3>
      </div>
    </div>
  )
}
