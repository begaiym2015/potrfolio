import React, { Component } from 'react';
import axios from 'axios';

class Modal extends Component {
    state = {
        currentContact:null,
        isEdit:false
    }

    componentDidMount(){
        const {currentContact} = this.props;
        this.setState({ currentContact })
    }

    componentDidUpdate(prevProps){
        if(JSON.stringify(prevProps) === JSON.stringify(this.props))return;
        const {currentContact} = this.props;
        this.setState({ currentContact });
    }

    handleSetCurrentContact = () => this.setState({ isEdit: true});

    handleEdit = (event, field) => {
        const { currentContact } = this.state;
        const newContact = {...currentContact};
        newContact[field] = event.target.value;
        this.setState({ currentContact: newContact})
    }

    handleSave = () => {
        const {currentContact} = this.state;
        axios.put(`http://localhost:8000/contact/${currentContact.id}`, currentContact);
        this.setState({ isEdit:false });
    }

    handleDelete = async() => {
        const {currentContact} = this.state;
        const {onClose} = this.props;
        await axios.delete(`http://localhost:8000/contact/${currentContact.id}`);
        onClose();
    }

    handleClose = () => {
        const { onClose } = this.props;
        this.setState ({ isEdit:false });
        onClose();
    }

    render() {
        const {onClose} = this.props;
        const {currentContact, isEdit} = this.state;
        return currentContact ? (
            <div className="modal">
                <div className="modal-window">
                    {!isEdit ? (
                        <>
                        <div>Name: {currentContact.name}</div>
                        <div>Surname: {currentContact.surname}</div>
                        <div>Phone: {currentContact.phone}</div>
                        <button onClick={this.handleSetCurrentContact}>Edit</button>
                   </>
                    ) : (
                        <>
                        <input
                        type="text"
                        placeholder="Name"
                        value={currentContact.name}
                        onChange={(e) => this.handleEdit(e, 'name')}
                        />
                        <input
                        type="text"
                        placeholder="Surname"
                        value={currentContact.surname}
                        onChange={(e) => this.handleEdit(e, 'surname')}
                        />
                        <input
                        type="text"
                        placeholder="Phone"
                        value={currentContact.phone}
                        onChange={(e) => this.handleEdit(e, 'phone')}
                        />
                        <button onClick={this.handleSave} >Save </button>
                        </>
                    )}
                    <button onClick={this.handleDelete}>Delete</button>
                    <button onClick={this.handleClose }>Close</button>
                </div>
                
            </div>
        ):null;
    }
}

export default Modal;