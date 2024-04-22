import { LinesChart } from "../Components/Gaficos/Lineas";
import { Pies } from "../Components/Gaficos/PiesChart";
import { Date_Finanzas } from "../Components/Finanzas/Date_Finanzas";
import { Date_Finanzas_2 } from "../Components/Finanzas/Date_Finanzas2";
import { Dashboard_Gerente1 } from "../Components/Finanzas/Dashboard_Gerente1";
import { Dashboard_Gerente2 } from "../Components/Finanzas/Dashboard_Gerente2";

export const GerenteGestionFinanzas = () => {
  return (
    <main>
      <section className="flex flex-row mr-10 border-solid  w-[96%] h-[20rem]">
        <div className=" p-3 w-[100%]">
          <LinesChart />
        </div>
      </section>
          <Date_Finanzas/>
          <Date_Finanzas_2/>
          <Dashboard_Gerente1 />
          <Dashboard_Gerente2 />
    </main>
  );
};
