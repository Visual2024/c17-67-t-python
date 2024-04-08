export function FormularioLogin() {


  return (
    <>
      <div className='flex flex-col m-20 border-2 border-gray-400 rounded-lg'>
        <h2 className='text-center text-gray-600 m-1 mt-4'>Iniciar Sesión</h2>
        <p className='text-sm  text-gray-600 m-5'>Inicia sesión para unirte a tu equipo</p>
        <div>
          <form action="" className='flex flex-col'>
            <input type="email" placeholder='email' className='border border-gray-200 rounded-lg m-2'/>
            <input type="password" placeholder='password'className='border border-gray-200 rounded-lg m-2'/>
          </form>
        </div>
        <button className='text-gray-400 rounded-full m-2 mb-4 border border-gray-400'>Ingresar</button>
      </div>
    </>
  )
}


