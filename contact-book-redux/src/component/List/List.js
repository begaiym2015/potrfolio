import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import './List.css';
// import Modal from '../Modal/Modal';

import { getContactData } from '../../redux/actions/app-actions';



class List extends Component {
    // state = {
    //     currentContact:null,
    //     isEdit:false
    // }

  componentWillMount = () =>{
   this.props.getContactData();
  }

  handleUpdate = () => {
     this.props.getContactData();
  }


    

    render() {
        const {
            data
        }= this.props;

        // console.log(data)
        return (
            <div className="list">
                <ul>
                    {data.map((contact) => (
                        <Card 
                        key={contact.id}
                        contact={contact}
                        onUpdate={()=> this.handleUpdate}
                        onOpenModal={()=>this.props.onClick(contact)}
                        />
                       
                    ))}
                </ul>
                {/* <Modal 
                    onUpdate={this.handleUpdate}
                /> */}

            </div>
        );
    }
}

const mapStateToProps = (state) => state.appReducer;

const mapDispatchToProps = (dispatch) =>({
  getContactData: () => dispatch(getContactData())
})

export default connect(mapStateToProps, mapDispatchToProps)(List);