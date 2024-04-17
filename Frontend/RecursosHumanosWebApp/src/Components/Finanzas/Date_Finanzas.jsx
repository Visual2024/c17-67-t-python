import { Doughnut } from 'react-chartjs-2';

export const Date_Finanzas = () => {

    const data = {
        labels: ['Azul', 'Blanco'],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: ['#6366f1', '#F6F5F2'],
            hoverBackgroundColor: ['#818cf8', '#FEFAF6'],
          },
        ],
      };

    const options = {
        
    };

    return (
        <div className="flex border border-gray-300 rounded-lg p-5">
            <div className='flex-grow'>
                <h3 className="font-bold text-[1.2rem] pb-4">Finanzas</h3>
                <p className="text-[13px] text-gris">Datos de Finanzas</p>
                <h4 className="font-bold text-indigo-500 text-[1.3rem] py-3">$5,240</h4>
                <p className="text-[13px] text-gris">May 28 - June 01</p>
                <p className="text-[13px] text-gris">(2018)</p>
            </div>
            <div className='flex-grow'>
            <Doughnut data={data} options={options}/>
            </div> 
        </div>
    );
}



