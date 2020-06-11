import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import { API_URL } from '../../helpers/url';
import axios from 'axios';

class Card extends Component {

    state = {
        data:[]
        // model : '',
        // color: '',
        // memory: '',
        // price: '',
        // img: '',
        // type: '',
        // description:'' 
    }

    handelClick = async () => {
        const data = {...this.props.data}
        // this.setState({ data })
        // console.log(data.id)
        // this.chosenItem()
        await axios.post(`${API_URL}/chosen`, data)
    }

    // chosenItem = async () => {
    //     await axios.post(`${API_URL}/chosen`, this.state.data)
    // }

    render() {
        console.log(this.state)
        const styles = {
            li: {
                height: '200px',
                width: '200px',
                background: `url(${this.props.url}) no-repeat`,
                backgroundSize: 'cover',
                borderRadius: '5px'
            }
        }
        return (
            <li className="card">
                <div style={styles.li}></div>
                <div className="price">{this.props.price} KGS</div>
                <div className="model">{this.props.model}</div>
                <Link  to={`/packages/${this.props.id}`}>
                    <button>Подробнее</button>
                </Link>
                <button onClick={this.handelClick}>Купить</button>
            </li>
        );
    }
}

export default Card;