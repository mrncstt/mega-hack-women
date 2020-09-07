import React, { Component } from "react";
import Chart from "react-apexcharts";
import './index.css'

class VendaProdutos extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13, 43],
        options: {
          colors:['#E289F2', '#503795', '#B085FF', '#855CF8'],
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Bonecas', 'Carros', 'Legos', 'Jogos'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

    render() {
      return (
        <div className='vendasProdutos'>
          <p className='titleChart'>Vendas por produto</p>
          <Chart options={this.state.options} series={this.state.series} type="pie" width={380} />
        </div>
      );
    }
  }    

  export default VendaProdutos;