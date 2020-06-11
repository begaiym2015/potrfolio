import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
        // <React.Fragment>
            <div className="header">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <h1>ClickStore</h1>
                    </div>
                    <ul className="header__menu">
                        <li className="header__menu-item"><Link to="/">Главная</Link></li>
                        <li className="header__menu-item"><Link to="/about">О компании</Link></li>
                        <li className="header__menu-item"><Link to="/delivery">Доставка</Link></li>
                        <li className="header__menu-item"><Link to="/credit">Кредит</Link></li>
                        <li className="header__menu-item"><Link to="/basket"><i className="basket-icon"><img></img></i></Link></li>
                    </ul>
                </div>
            </div>
        // </React.Fragment>
        );
    }
}

export default Header;