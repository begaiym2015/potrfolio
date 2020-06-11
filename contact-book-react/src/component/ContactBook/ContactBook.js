import React, { Component } from 'react';

import AddContact from '../AddContact/AddContact';
import List from '../List/List';
import Modal from '../Modal/Modal';

class ContactBook extends Component {
    state = {
        currentContact: null
    }

    handleUpdate = () => {
        this.forceUpdate();
    }

    handleOpenModal = (currentContact) =>{
        this.setState({ currentContact });
    }

    handleCloseModal = () => this.setState({ currentContact: null });


    checkPage = (currentContact) => this.props.page === undefined || this.props.page === currentContact;

    render() {
        const { currentContact } = this.state;
        return (
            <div className="contact-book">
               
                {this.checkPage('ADD') ? 
                <AddContact
                 onUpdate={this.handleUpdate}
                /> : null }
                {this.checkPage('HOME') ? (
                    <List onUpdate={this.handleUpdate}
                    onClick={this.handleOpenModal}
                    /> ): null}

                <Modal 
                   currentContact={currentContact}
                   onClose={this.handleCloseModal}
                />
                
            </div>
        );
    }
}

export default ContactBook;