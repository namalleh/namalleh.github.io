import React from "react";

import "https://cdn.jsdelivr.net/npm/chart.js";
import "https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"

export async function loadData() {
    let a = document.createElement('canvas');
    a.id = 'myChart'
    document.body.appendChild(a);
    a.style = "width:50%;height:50%"
    const ctx = a;

    async function updateData() {
        const dataPoints = {
            data: [
                [1, {"abc": 1}],
            ]
        };

        let datasetsMap = {};

        let colors = ['#ff0000', '#0000ff', '#3cb371', '#ee82ee', '#ffa500', '#6a5acd'];

        for (let struct of dataPoints.data) {
            let timestamp = struct[0];
            let map = struct[1];
            for (let [key, value] of Object.entries(map)) {
                if (!datasetsMap[key]) {
                    console.log(key);

                    // https://stackoverflow.com/a/46252152/7100156
                    let color = colors[(Math.random() * 100000) % (colors.length - 1)];
                    datasetsMap[key] = {
                        label: key,
                        backgroundColor: color, // Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
                        // borderColor: Utils.CHART_COLORS.red,
                        // borderColor: 'black',
                        borderWidth: 1,
                        // pointBackgroundColor: [color],
                        // pointBorderColor: ['#000', '#00bcd6', '#d300d6'],
                        pointRadius: 5,
                        pointHoverRadius: 5,
                        fill: false,
                        // tension: 1,
                        cubicInterpolationMode: 'monotone', // https://stackoverflow.com/a/74977941/7100156
                        showLine: true,
                        data: [],
                    };
                }

                datasetsMap[key].data.push({x: new Date(timestamp / 1000000), y: value});
            }
        }

        const data = {
            datasets: [...Object.values(datasetsMap)]
        };

        return data;
    }


    // Chart.register(item);
    const config = {
        type: 'line',
        data: await updateData(),
        options: {
            animation: false,
            plugins: {
                legend: {
                    position: "right",
                }
            },
            scales: {
                x: {
                    type: 'time',
                    display: true,
                    title: {
                        display: true,
                        text: 'String'
                    },
                    // adapters: {
                    //   date: {
                    //     locale: en,
                    //   }
                    // }
                    // type: 'realtime',
                    // realtime: {
                    //     duration: 20000,
                    //     refresh: 1000,
                    //     delay: 2000,
                    //     // onRefresh: onRefresh
                    // }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value'
                    },
                    scales: {
                        type: 'logarithmic',
                        min: 0,
                    }
                }
            },
            interaction: {
                intersect: false
            }
        }
    };

    /*const chart = */
    new Chart(ctx, config);

    // https://stackoverflow.com/a/40711374/7100156
    // var intervalID = window.setInterval(myCallback, 500);
    //
    // async function myCallback() {
    //   // Your code here
    //   chart.data = await updateData();
    //
    //   chart.update('none');
    // }
}

export class Dashboard extends React.Component {
    render() {
        return (
            <>
                <script>
                    {loadData()}
                </script>
            </>
        );
    }
}
