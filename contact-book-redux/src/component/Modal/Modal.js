import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getContactData, deleteContact, editContact} from '../../redux/actions/app-actions';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';

class Modal extends Component {
    state = { 
        currentContact:null,
        isEdit:false
    }
  
    componentDidMount = () => this.props.getContactData();
   
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
        const { currentContact } = this.state;
        this.props.editContact(currentContact);
        // this.handleUpdate();
        this.setState({ isEdit:false });
    }

    handleDelete = (currentContact) => {
        // const { currentContact } = this.state;
        this.props.deleteContact(currentContact);
        this.handleCloseModal();
    }

    handleCloseModal = () => this.setState({ currentContact: null });

    handleClose = () => {
        this.setState ({ isEdit:false});
        this.handleCloseModal();
    }

    render() {
      
       
        const{
            // data,
            deleteContact,
            editContact
        } = this.state;
        
        const { currentContact, isEdit } =this.state;
        
        return currentContact ?  (
            <div className="modal">
                <div className="modal-window">
                    {!isEdit ? (
                        <>
                        <div className="photo"><img src={currentContact.url} /></div>
                        <div>Name: {currentContact.name}</div>
                        <div>Surname: {currentContact.surname}</div>
                        <div>Phone: {currentContact.phone}</div>
                        <button onClick={this.handleSetCurrentContact}><EditIcon></EditIcon></button>
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
                        placeholder="url"
                        value={currentContact.url}
                        onChange={(e) => this.handleEdit(e, 'url')}
                        />
                        <input
                        type="text"
                        placeholder="Phone"
                        value={currentContact.phone}
                        onChange={(e) => this.handleEdit(e, 'phone')}
                        />
                        
                        <button onClick={this.handleSave}><SaveIcon></SaveIcon> </button>
                        
                        </>
                    )}
                    
                    <button onClick={()=> this.handleDelete}><DeleteIcon></DeleteIcon></button>
                    
                    
                    <button onClick={this.handleClose }><CloseIcon></CloseIcon></button>
                    
                </div>
                
            </div>
        ): null;
    }
}

const mapStateToProps = (state) => state.appReducer;

const mapDispatchToProps = (dispatch) =>({
    getContactData: () => dispatch(getContactData()),
    deleteContact: (currentContact) => dispatch(deleteContact(currentContact)),
    editContact: (currentContact) => dispatch(editContact(currentContact))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

