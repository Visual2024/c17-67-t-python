import { Bar } from "react-chartjs-2"

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
);

export const Date_Finanzas_2 = () => {
    const data = {
        labels: ['Barra1', 'Barra2', 'Barra3', 'Barra4'],
        data: [100, 200, 300, 400],
        datasets: [
            {
            label: 'Branch',
            data: [100, 200, 300, 400],
            backgroundColor: '#6366f1',
            borderRadius: 10,
            barThickness: 5, 
            }
        ]
    };

    const options = {
        indexAxis: 'x',
        scales: {
            x: {
                grid: {
                    display: false 
                }
            },
            y: {
                grid: {
                    display: false 
                }
            },
        }
    };

    return(
        <div className="w-auto border border-gray-300 rounded-lg p-8 shadow-xl"> 
            <h3 className="font-bold text-[1.2rem] pb-9">Finanzas 2</h3>
            <p className="text-[13px] text-gris">Datos de Finanzas</p>
            <Bar data={data} options={options} />
        </div>
    );
}