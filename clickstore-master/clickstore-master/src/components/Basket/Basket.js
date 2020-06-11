import React, { Component } from 'react';
import Basket2 from '../Basket2/Basket'

class Basket extends Component {

    state = {
        data: []
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Корзина</h1>
                <Basket2 />
            </div>
        );
    }
}

export default Basket;