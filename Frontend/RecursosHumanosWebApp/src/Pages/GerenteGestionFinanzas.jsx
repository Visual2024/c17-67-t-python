import { LinesChart } from "../Components/Gaficos/Lineas";
import { Bars } from "../Components/Gaficos/Moths";
import { Pies } from "../Components/Gaficos/PiesChart";


export const GerenteGestionFinanzas = () => {
  return (
    <main className="flex flex-row flex-wrap">
      <h1 className="font-bold text-3xl mb-5">Gestión Financiera</h1>
      <section className="flex flex-row mr-10 border-solid border-gris border-[2px] w-[100%] h-[20rem]">
        <div className=" p-3 w-[100%]">
          <LinesChart />
        </div>
      </section>
      <section className="flex flex-row  justify-end  mr-10 border-solid  w-[50%] h-[20rem] mt-10">
        <div className=" p-3 w-[100%]">
          <Pies />
        </div>
      </section>
    </main>
  );
};
