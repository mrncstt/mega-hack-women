import React, { Component } from "react";
import './index.css'
import filtro from '../../img/filtroIcon.png'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

class Filtro extends Component {    
    render() {
        return (        
            <div className='filtroPosition'>
                <div className='filtro'>
                    <img 
                        id='filtro'
                        src={filtro} 
                        alt='filtro'      
                        width="17px" 
                        height="17px"                  
                    />
                    <div class="dropdown">
                        <span>filtrar</span>                                                
                        <div class="dropdown-content">                        
                            <CheckCircleOutlineOutlinedIcon/>
                            <spam className='navItem'>Legos</spam>
                            <hr/>
                            <CheckCircleOutlineOutlinedIcon/>
                            <spam className='navItem'>Carros</spam>
                            <hr/>
                            <CheckCircleOutlineOutlinedIcon/>
                            <spam className='navItem'>Jogos</spam>
                            <hr/>
                        </div>
                    </div>
                </div>            
            </div>        
        );
    }
}
    
export default Filtro;