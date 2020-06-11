import React, { Component } from 'react';

import './Basket.css';

class Basket extends Component {

    state = {
        name: '',
        phone: '',
        good: '',
        price: ''
    }

    handleName = event => {
        const name = event.target.value;
        this.setState ({ name })
    }

    handlePhone = event => {
        const phone = event.target.value;
        this.setState ({ phone })
    }

    handleGood = event => {
        const good = event.target.value;
        this.setState ({ good })
    }

    handlePrice = event => {
        const price = event.target.value;
        this.setState ({ price })
    }

    handleClick = () => {
        const nameValue = this.state.name;
        const phoneValue = this.state.phone;
        const goodValue = this.state.good;
        const priceValue = this.state.price;

        if(!nameValue || !phoneValue || !goodValue || !priceValue) return alert('Заполните, пожалуйста, все поля!')

        console.log(this.state)

        this.props.onAddOrder(this.state)

        this.setState({ name: '', phone: '', good: '', price: '' })
        alert('Ваш заказ успешно отправлен!')
    }

    render() {
        // console.log(this.props)
        // const id = this.props.match.params.id;

        return (
            <div className="basket">
                <div className="basket-list">
                    <h2>Корзина</h2>
                </div>
                <div className="add-order">
                    <h2>Оформление</h2>
                    <input 
                        type ="text"
                        placeholder ="Name"
                        value ={this.state.name}
                        onChange = {this.handleName}                
                    />
                    <input 
                        type ="tel"
                        placeholder ="Phone number"
                        value ={this.state.phone}
                        onChange = {this.handlePhone}                
                    />
                    <input 
                        type ="text"
                        placeholder ="Good"
                        value ={this.state.good}
                        onChange = {this.handleGood}                
                    />
                    <input 
                        type ="number"
                        placeholder ="Price"
                        value ={this.state.price}
                        onChange = {this.handlePrice}                
                    />
                    <button
                        className ="btn-send_form"
                        onClick = {this.handleClick}>                    
                        отправить заявку   
                    </button>
                </div>
            </div>
        );
    }
}

export default Basket;