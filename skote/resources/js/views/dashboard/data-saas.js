const LineChart = {
    series: [
        {
            name: "series1",
            data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76]
        }
    ],
    chartOptions: {
        chart: {
            height: 320,
            type: "line",
            toolbar: "false",
            dropShadow: {
                enabled: true,
                color: "#000",
                top: 18,
                left: 7,
                blur: 8,
                opacity: 0.2
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#556ee6"],

        stroke: {
            curve: "smooth",
            width: 3
        }
    }
};
const DonutChart = {
    series: [56, 38, 26],
    chartOptions: {
        chart: {
            type: "donut",
            height: 240
        },
        labels: ["Series A", "Series B", "Series C"],
        colors: ["#556ee6", "#34c38f", "#f46a6a"],
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "70%"
                }
            }
        }
    }
};
const RadialChart1 = {
    series: [37],
    chartOptions: {
        chart: {
            type: "radialBar",
            width: 60,
            height: 60,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#556ee6"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "60%"
                },
                track: {
                    margin: 0
                },
                dataLabels: {
                    show: false
                }
            }
        }
    }
};
const RadialChart2 = {
    series: [72],
    chartOptions: {
        chart: {
            type: "radialBar",
            width: 60,
            height: 60,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#34c38f"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "60%"
                },
                track: {
                    margin: 0
                },
                dataLabels: {
                    show: false
                }
            }
        }
    }
};
const RadialChart3 = {
    series: [54],
    chartOptions: {
        chart: {
            type: "radialBar",
            width: 60,
            height: 60,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#f46a6a"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "60%"
                },
                track: {
                    margin: 0
                },
                dataLabels: {
                    show: false
                }
            }
        }
    }
};
export default { LineChart, DonutChart, RadialChart1, RadialChart2, RadialChart3 };
