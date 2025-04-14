import React, { Component } from 'react';
import Card from "../card-container/card-container.component"
import './card-list.Styles.css'

class CardList extends Component {
   
    render() {
       
        
        return (
            <div className='card-list'>
                 
                  {this.props.monster.map((user) =>{
                     return(< Card  key={user.id} monster={user}/>)
                  })}
            </div>
        );
    }
}

export default CardList;