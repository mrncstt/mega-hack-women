import React, { Component } from "react";
import './index.scss'

class Card extends Component {    
    render() {
        return (        
            <div className="cardPosition">
                <div>
                    <p className='titleCard'>{this.props.title}</p>
                    <p className='valorCard'>{this.props.value}</p>
                    <div class="frame">
                        <div >
                            <section class="todo-cmp">
                                <header class="todo-cmp__header">
                                    <h2 className="left">Atividade</h2>     
                                    <span className="today left">Hoje</span>                          
                                    <span className="seeMore right">Ver tudo</span> 
                                    <span className="task left">Criar nova tarefa</span>
                                    <div className='right'>
                                        <span className="addTask center">+</span>
                                    </div>
                                </header>
                                <ul class="todo-cmp__list">                                    
                                    <li>
                                        <label for="todo-01">
                                            <input id="todo-01" type="checkbox"/>
                                            <span>Enviar pedidos 368</span>
                                        </label>
                                    </li>
                                        <li>
                                        <label for="todo-02">
                                            <input id="todo-02" type="checkbox"/>
                                            <span id='teste'>Empacotar 390</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="todo-03">
                                            <input id="todo-03" type="checkbox"/>
                                            <span>Atualizar fotos do produto</span>
                                        </label>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>            
            </div>        
        );
    }
}
    
export default Card;