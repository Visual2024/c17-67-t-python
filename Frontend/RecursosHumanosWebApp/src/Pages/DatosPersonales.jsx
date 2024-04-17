
export const DatosPersonales = () => {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
    <span className="text-gray-700 text-lg font-bold">JP</span> {/* Inciales de la persona */}
  </div>
      <div className="max-w-4xl w-full ">
        <div className="flex flex-col md:flex-row md:flex-wrap items-center">
          <div className="flex mb-16 md:w-1/3">
            <div className="mr-4">
              <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
              <input id="nombre" className="shadow appearance-none border rounded-full w-full md:w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Juan" />
            </div>
          </div>
          <div className="flex mb-16 md:w-1/3">
            <div className="mr-4">
              <label htmlFor="apellido" className="block text-gray-700 text-sm font-bold mb-2">Apellido</label>
              <input id="apellido" className="shadow appearance-none border rounded-full w-full md:w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Perez" />
            </div>
          </div>
          <div className="flex mb-16 md:w-1/3">
            <div className="mr-4">
              <label htmlFor="documento" className="block text-gray-700 text-sm font-bold mb-2">DNI</label>
              <input id="documento" className="shadow appearance-none border rounded-full w-full md:w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="12345678" />
            </div>
          </div>
          <div className="flex mb-16 md:w-1/3">
            <div className="mr-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
              <input id="email" className="shadow appearance-none border rounded-full w-full md:w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="juanperez@correo.com" />
            </div>
          </div>
          <div className="flex mb-16 md:w-1/3">
            <div className="mr-4">
              <label htmlFor="contacto" className="block text-gray-700 text-sm font-bold mb-2">Contacto</label>
              <input id="contacto" className="shadow appearance-none border rounded-full w-full md:w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="+541112345678" />
            </div>
          </div>
          <div className="flex mb-16 md:w-1/3">
            <div className="mr-4">
              <label htmlFor="contacto-secundario" className="block text-gray-700 text-sm font-bold mb-2">Contacto Secundario</label>
              <input id="contacto-secundario" className="shadow appearance-none border rounded-full w-full md:w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="+541112345678" />
            </div>
          </div>
          <div className="flex mb-3 md:w-1/3">
            <div className="mr-4">
              <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Direccion</label>
              <input id="address" className="shadow appearance-none border rounded-full w-full md:w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Calle 11 Nro 1" />
            </div>
          </div>
          <div className="flex mb-3 md:w-1/3">
            <div className="mr-4">
              <label htmlFor="ciudad" className="block text-gray-700 text-sm font-bold mb-2">Ciudad</label>
              <input id="ciudad" className="shadow appearance-none border rounded-full w-full md:w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Ciudad" />
            </div>
          </div>
          <div className="flex mb-3 md:w-1/3">
            <div className="mr-4">
              <label htmlFor="pais" className="block text-gray-700 text-sm font-bold mb-2">País</label>
              <input id="pais" className="shadow appearance-none border rounded-full w-full md:w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Argentina" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  