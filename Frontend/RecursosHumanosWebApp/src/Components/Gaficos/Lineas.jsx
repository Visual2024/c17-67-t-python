import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

let beneficios = [1000, 1200, 1000, 4000, 2000, 3000, 5000, 10000, 1000, 1220, 4000, 5000, 4000];
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Sueldo',
            data: beneficios,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },
        {
            label: 'Otra línea',
            data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25]
        },
    ],
};

let misoptions = {
    maintainAspectRatio: false,
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)'}
            
        }
    }
};

export function LinesChart() {
    return <Line data={midata} options={misoptions}/>
}