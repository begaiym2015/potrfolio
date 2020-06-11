import React, { Component } from 'react';
import axios from 'axios';

import Card from './Card';
import './List.css';


class List extends Component {
    state = {
        data:[]
    }

    componentDidMount(){
        this.fetchContact();
    }

    componentDidUpdate(){
        // console.log(prevProps)
        // console.log(this.props)
        // if(JSON.stringify(prevProps) === JSON.stringify(this.props))return;
        this.fetchContact();
    }

    handleUpdate = () => {
        this.fetchContact();
    }

    fetchContact = async() => {
        const { data } = await axios.get('http://localhost:8000/contact');
        if(JSON.stringify(this.state) === JSON.stringify({ data })) return; 
        this.setState({ data });
    }


    render() {
        return (
            <div className="contact-list">
                <h3>Список контактов</h3>
                <ul>
                    {this.state.data.map((contact) => (
                        <Card 
                        key={contact.id}
                        contact={contact}
                        onOpenModal={()=>this.props.onClick(contact)}
                        />
                    ))}
                </ul>

                {/* <button onClick={this.handlePrevPagination}>prev</button>
                <button onClick={this.handleNextPagination}>next</button> */}
                
            </div>
        );
    }
}

export default List;