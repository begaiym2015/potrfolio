import React, { Component } from 'react';

import './List.css';

class Card extends Component {

    render() {
        const { onOpenModal, contact, onUpdate } = this.props;
       
        return (
           
            <div className="card"  onClick={onOpenModal} >
                
                <li className="contact">
                    <img src={contact.url} />
                    <div>{contact.name} {contact.surname}</div>
                  
                </li>
                
            </div>
           
        );
    }
}

export default Card;