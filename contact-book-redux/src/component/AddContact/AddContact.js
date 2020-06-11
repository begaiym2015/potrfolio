import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addContact } from '../../redux/actions/app-actions';
import './AddContact.css';


class AddContact extends Component {
    state = {
        name:'',
        surname:'',
        url:'',
        phone:''
    }

    handleAdd = async () => {
        this.props.dispatch(addContact(this.state));
        this.setState({ name:'', surname:'', url:'', phone:'' });
    }

    handleEdit = (event, field) => {
        const newState = {...this.state};
        newState[field] = event.target.value;
        this.setState(newState);
    }

    
    render() {
        const { name,surname,url,phone } = this.state;
        return (
            <div className="add-contact">
                <input placeholder="name" 
                type="text"
                value={this.state.name}
                onChange={(e) => this.handleEdit(e,'name')} />
                <input placeholder="surname" 
                type="text"
                value={this.state.surname}
                onChange={(e) => this.handleEdit(e,'surname')}/>
                 <input placeholder="photo url" 
                type="text"
                value={this.state.url}
                onChange={(e) => this.handleEdit(e,'url')}/>
                <input placeholder="phone"
                type="number" 
                value={this.state.phone}
                onChange={(e) => this.handleEdit(e,'phone')} />
                
                <button onClick={this.handleAdd}>Add</button>
                
            </div>
        );
    }
}

export default connect()(AddContact);
