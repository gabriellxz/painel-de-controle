import { useEffect, useRef } from "react"
import CardDashboard from "../../components/CardDashboard/CardDashboard"
import cardsData from "../../mock/cardsData"
import { Chart, registerables } from "chart.js";

export default function Dashboard() {

    const lineRef = useRef<HTMLCanvasElement | null>(null);
    const doughRef = useRef<HTMLCanvasElement | null>(null);
    const barRef = useRef<HTMLCanvasElement | null>(null);

    const chartsRef = useRef<{ line?: Chart | null; doughnut?: Chart | null; bar?: Chart | null }>({});

    useEffect(() => {
        Chart.register(...registerables);

        if (lineRef.current) {
            const ctx = lineRef.current.getContext('2d');

            if (ctx) {
                chartsRef.current.line = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
                        datasets: [{
                            label: 'Rendimento Mensal',
                            data: [0, 2500, 5000, 7500, 1000, 12500, 15000],
                            borderColor: '#3b82f6',
                            backgroundColor: 'rgba(59,130,246,0.2)',
                            tension: 0.4,
                            fill: true,
                        }]
                    },
                    options: { responsive: true, maintainAspectRatio: false },
                })
            }

            if (doughRef.current) {
                const ctx = doughRef.current.getContext('2d');

                if (ctx) {
                    chartsRef.current.doughnut = new Chart(ctx, {
                        type: 'doughnut',
                        data: {
                            labels: ['Janeiro', 'Fevereiro', 'Março'],
                            datasets: [{
                                label: "Distribuição",
                                data: [300, 50, 100],
                                backgroundColor: [
                                    'rgb(255, 99, 133)',
                                    'rgb(54, 163, 235)',
                                    'rgb(255, 207, 86)',
                                ],
                            }]
                        },
                        options: { responsive: true, maintainAspectRatio: false }
                    })
                }
            }

            if (barRef.current) {
                const ctx = barRef.current.getContext('2d');

                if (ctx) {
                    chartsRef.current.bar = new Chart(ctx, {
                        type: "bar",
                        data: {
                            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                            datasets: [{
                                data: [65, 59, 80, 81, 56, 55],
                                backgroundColor: [
                                    "rgb(6, 182, 212)",
                                    "rgb(207, 250, 254)"
                                ]
                            }]
                        },
                        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }
                    })
                }
            }
        }



        return () => {
            // destroy charts
            Object.values(chartsRef.current).forEach((c) => { if (c) c.destroy(); });
        }

    }, []);

    return (
        <div>
            <div className="font-light">
                <h1 className="text-3xl">Bem-vindo, Gabriel Silva</h1>
                <p className="text-zinc-500">
                    Aqui está um resumo da sua performance
                </p>
            </div>
            <div className="mt-7 md:flex gap-3">
                {
                    cardsData.map(card => (
                        <CardDashboard
                            key={card.id}
                            title={card.title}
                            main={card.main}
                            description={card.description}
                        />
                    ))
                }
            </div>
            <div className="w-full">
                <div className="lg:flex w-full gap-5">
                    <div className="bg-white p-5 rounded-md border border-zinc-300 mb-4 w-full">
                        <h1 className="text-2xl font-light">Rendimento Mensal</h1>
                        <div className="w-full h-[50vh]">
                            <canvas ref={lineRef} className="w-full"/>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-md border border-zinc-300 mb-4 w-full">
                        <h1 className="text-2xl font-light">Distribuição</h1>
                        <div className="w-full h-[50vh] flex items-center justify-center">
                            <canvas ref={doughRef} className="w-full"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white p-5 rounded-md border border-zinc-300 mb-4 w-full">
                        <h1 className="text-2xl font-light">Corporativo mensal</h1>
                        <div className="w-full h-[50vh]">
                            <canvas ref={barRef} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}