import { useEffect } from "react";
import { LinesChart } from "../Components/Gaficos/Lineas";
import { Pies } from "../Components/Gaficos/PiesChart";
import { Date_Finanzas } from "../Components/Finanzas/Date_Finanzas";
import { Date_Finanzas_2 } from "../Components/Finanzas/Date_Finanzas2";

export const GerenteGestionFinanzas = () => {


  

  return (
    <main className="flex flex-row flex-wrap">
      <h1 className="font-bold text-3xl mb-5">Gestión Financiera</h1>
      <section className="w-[96%] mt-[1rem] mb-[5rem]">
        <div className="flex flex-row items-center bg-azul w-[100%]  rounded-xl p-1">
          <img className="" src="../../public/img/work.png" alt="" />
          <div className="flex flex-col flex-wrap ">
            <h2 className="text-white ml-[2rem]  text-2xl">
              Facundo Pettersson {}
            </h2>
            <p className="mt-1 ml-8 text-white w-[70%]">
              You have two projects to finish, you had completed from your
              montly level, Keep going to your level
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap w-full  justify-around mt-2">
          <div>
            <h3 className="font-bold text-[1rem]">INGRESO NETO</h3>
            <p className="text-[13px] text-gris">Ingreso neto del mes</p>
            <h4 className="font-bold text-[1.3rem]">$5,900.00 55%</h4>
          </div>
          <div>
            <h3 className="">Mes</h3>
            <p></p>
            <h4>Octubre</h4>
          </div>
          <div>
            <h3>Ingreso Total</h3>
            <p> Previous month vs this months </p>
            <h4>$5,900.00 55%</h4>
          </div>
        </div>
      </section>

      <section className="flex flex-row mr-10 border-solid  w-[100%] h-[20rem]">
        <div className=" p-3 w-[100%]">
          <LinesChart />
        </div>
      </section>
          <Date_Finanzas/>
          <Date_Finanzas_2/>
    </main>
  );
};
