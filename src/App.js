import React from 'react';
import VendasMes from './components/VendasMes'
import Faturamento from './components/Faturamento'
import VendaProdutos from './components/VendasProdutos'
import Card from './components/Cards'
import Atividades from './components/Atividades'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">        
      <NavBar/>
        <div className="faturamentoCardPosition">
          <Card value='104,645' title='Faturamento total (R$)'/>
          <Card value='8.720' title='Faturamento médio'/>
        </div>
        <div className="vendasCardPosition">
          <Card value='1.105' title='Vendas acumuladas'/>
          <Card value='190' title='Vendas neste mês'/>        
        </div>
        <VendasMes/> 
        <Faturamento/>  
        <VendaProdutos/>  
        <Atividades/>
      </header>
    </div>
  );
}

export default App;
