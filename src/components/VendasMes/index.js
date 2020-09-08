import React, { Component } from "react";
import Chart from "react-apexcharts";
import './index.css'
class VendasMes extends Component {
    constructor(props) {
        super(props);

        this.state = {    
            series: [{
                name:'Vendas',
                data: [400, 430, 948, 470, 840, 480, 690, 1100, 900, 1080]
            }],
            options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                return val;
                },
                offsetY: -20,
                style: {
                fontSize: '12px',
                colors: ["#304758"]
                }
            },
            
            xaxis: {
                categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dec"],
                position: 'top',
                axisBorder: {
                show: false
                },
                axisTicks: {
                show: false
                },
                crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                    }
                }
                },
                tooltip: {
                enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                show: false
                },
                axisTicks: {
                show: false,
                },
                labels: {
                show: false,
                formatter: function (val) {
                    return val;
                }
                }
            
            },
            title: {
                text: 'Monthly Inflation in Argentina, 2002',
                floating: true,
                offsetY: 330,
                align: 'center',
                style: {
                color: '#444'
                }
            }
            },
        
        
        };
    }

    render() {
    return (    
        <div className='vendasPosition'>            
            <div className="mixed-chart">
                <p className='titleChart'>Vendas por mês</p>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="500"
                />
            </div>            
        </div>
    );
  }
}

export default VendasMes;