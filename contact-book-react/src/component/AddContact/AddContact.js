import React, { Component } from 'react';
import axios from 'axios';

// import Inputs from './Inputs';

class AddContact extends Component {
    state = {
        name:'',
        surname:'',
        phone:''
    }

    
    handleAdd = async () => {
        await axios.post(' http://localhost:8000/contact', this.state);
        this.setState({ name:'', surname:'', phone:'' });
        this.props.onUpdate();
    }

    handleEdit = (event, field) => {
        const newState = {...this.state};
        newState[field] = event.target.value;
        this.setState(newState);
    }
      
    
    render() {
    
        const { name,surname,phone } = this.state;
        return (
            <div className="add-contact">
                <div className="add-contact-form">
                {/* <Inputs> */}
                <input placeholder="name" 
                type="text"
                value={this.state.name}
                onChange={(e) => this.handleEdit(e,'name')} />
                <input placeholder="surname" 
                type="text"
                value={this.state.surname}
                onChange={(e) => this.handleEdit(e,'surname')}/>
                <input placeholder="phone"
                type="number" 
                value={this.state.phone}
                onChange={(e) => this.handleEdit(e,'phone')} />
                {/* </Inputs> */}
                <button onClick={this.handleAdd}>Add</button>
                </div>
            </div>
        );
    }
}

export default AddContact;



