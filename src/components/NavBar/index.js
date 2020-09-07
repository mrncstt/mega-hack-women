import React, { Component } from "react";
import './index.css'
import sino from '../../img/sino.png'
import foguete from '../../img/foguete.png'
class NavBar extends Component {
    render() {
    return (    
        <div className='navbar'>                                                
          <img 
            className='logo'
            src="https://images.tcdn.com.br/appstore/appstore/1451/img/logotype-1000-primary.png" 
            alt="Logo" 
            width="272px" 
            height="145px">                    
          </img>
            <div className='user'>
              <img 
                id='foguete'
                src={foguete} 
                alt="foguete"
                width="50px" 
                height="50px"
              />
              <img 
                id='sino'
                src={sino} 
                alt="sino"
                width="50px" 
                height="50px"
              />
              Olá, Renata
            </div>
          <nav>
            <a href="/home/">início</a> 
            <a href="/pedidos/">pedidos</a> 
            <a href="/produtos/">produtos</a> 
            <a href="/perguntas/">perguntas</a>
            <a href="/financeiro/">financeiro</a>
          </nav>
          <div className='titleNav'>
            Dashboard
          </div>
        </div>
    );
  }
}

export default NavBar;