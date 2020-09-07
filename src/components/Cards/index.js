import React, { Component } from "react";
import './index.css'

class Card extends Component {    
    render() {
        return (        
            <div>
                <div className='card'>
                    <p className='titleCard'>{this.props.title}</p>
                    <p className='valorCard'>{this.props.value}</p>
                </div>            
            </div>        
        );
    }
}
    
export default Card;