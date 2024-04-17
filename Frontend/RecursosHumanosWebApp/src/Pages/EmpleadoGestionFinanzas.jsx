import { useEffect, useState } from "react";
import { LinesChart } from "../Components/Gaficos/Lineas";

export const EmpleadoGestionFinanzas = () => {

  const [data, setData] = useState([])

  const url = import.meta.env.VITE_API_KEY
 

  useEffect(()=>{
    fetch(`${url}/api/v1/postulants/`)
      .then((res) => res.json())
      .then((date)=>{
          setData(date)
      })

  },[])

  return (

    <div>
      <main className="flex flex-row flex-wrap min-w-[100%]">
        <h1 className="font-bold text-3xl mb-3">Gestión Financiera</h1>
        <section className="w-[96%] mb-[4rem]">
          <div className="flex flex-row items-center bg-azul w-[100%] rounded-xl p-1">
            <img className="" src="../../public/img/work.png" alt="" />
            <div className="flex flex-col flex-wrap ">
              <h2 className="text-white ml-[2rem] text-2xl">
                Facundo Pettersson
              </h2>
              <p className="mt-1 ml-8 text-white w-[70%]">
                You have two projects to finish, you had completed from your
                montly level, Keep going to your level
              </p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap w-full justify-around mt-7">
            <div>
              <h3 className="font-bold text-[1rem]">INGRESO NETO</h3>
              <p className="text-[13px] text-gris">Ingreso neto del mes</p>
              <h4 className="font-bold text-[1.3rem]">$5900</h4>
            </div>
            <div>
              <h3 className="font-bold text-[1rem]">DESCUENTO</h3>
              <p className="text-[13px] text-gris">Ingreso neto del mes</p>

              <h4 className="text-red-400 font-bold text-[1.3rem]">$-3000</h4>
            </div>
            <div>
              <h3 className="font-bold text-[1rem]">INGRESO TOTAL</h3>
              <p className="text-[13px] text-gris">Ingreso neto del mes</p>
              <h4 className="font-bold text-[1.3rem]">$8900</h4>
            </div>
          </div>
        </section>

        <section className="flex flex-row mr-10 border-solid  w-[96%] h-[20rem]">
          <div className=" p-3 w-[96%]">
            <LinesChart />
          </div>
        </section>
      </main>
    </div>
  );
};
