import React, { Component } from 'react';

import AddContact from '../AddContact/AddContact';
import List from '../List/List';
import Modal from '../Modal/Modal';

class ContactBook extends Component {
    state = {
        currentContact: null
    }

    handleOpenModal = (currentContact) =>{
        this.setState({ currentContact });
    }

    checkPage = (currentContact) => this.props.page === undefined || this.props.page === currentContact;

    render() {
        const { currentContact } = this.state;
        return (
            <div className="contact-book">
               
                {this.checkPage('ADD') ? 
                <AddContact
               
                /> : null }
                {this.checkPage('HOME') ? (
                    <List
                    onClick={this.handleOpenModal}
                    /> ): null}

                <Modal 
                currentContact={currentContact}
                // onClose={this.handleCloseModal}
                  
                />
                
            </div>
        );
    }
}

export default ContactBook;