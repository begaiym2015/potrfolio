import React, { Component } from 'react';

import './List.css';

class Card extends Component {
    render() {
        const { onOpenModal, contact } = this.props;
        return (
           
            <div className="card">
                
                <li className="contact" onClick={onOpenModal}>
                    <div>{contact.id}.{contact.name} </div>
                    {/* <div>Surname: {contact.surname} </div>
                    <div>Phone: {contact.phone} </div> */}
                </li>
                
            </div>
           
        );
    }
}

export default Card;