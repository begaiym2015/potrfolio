import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';
import './Home.css';

import { Switcher } from '../../routes';

class AllCategories extends Component {

    state = {
        q:''
    }

    handleInputVal = (e) => {
        if(e.target.value[0] === ' ') e.target.value = '';
        this.setState({ q: e.target.value })
    }

    handleClick = (e) => {
        if(this.state.q === '') return e.preventDefault();
    }

    handleClear = () => {
        this.setState({ q: '' })
    }

    render() {
        return (
            <div className="home-page">
                {this.props.location.pathname==="/" && <Redirect to="/category/all"/>}
                <div className="form-wrapper">
                    <form className="search">
                        <input className="search__text" type="text" placeholder="Я ищу..." value={this.state.q} onChange={(e) => this.handleInputVal(e)} />
                        <Link to={`/category/${this.state.q}`}>
                            <input className="search__submit" type="submit" onClick={(e) => this.handleClick(e)} value=""/>
                        </Link>
                    </form>
                    <ul className="categories">
                        <Link to="/category/all">
                            <li className="categories-item" onClick={this.handleClear}>
                                <div className="categories-icon">
                                    <div className="all-categories"></div>
                                </div>
                                <span>Все</span>
                            </li>
                        </Link>
                        <Link to="/category/mobile">
                            <li className="categories-item" onClick={this.handleClear}>
                                <div className="categories-icon">
                                    <div className="mobile-categories"></div>
                                </div>
                                <span>Моб. телефоны</span>
                            </li>
                        </Link>
                        <Link to="/category/tablet">
                            <li className="categories-item" onClick={this.handleClear}>
                                <div className="categories-icon">
                                    <div className="tablet-categories"></div>
                                </div>
                                <span>Планшеты</span>
                            </li>
                        </Link>
                        <Link to="/category/laptop">
                            <li className="categories-item" onClick={this.handleClear}>
                                <div className="categories-icon">
                                    <div className="laptop-categories"></div>
                                </div>
                                <span>Ноутбуки</span>
                            </li>
                        </Link>
                        <Link to="/category/computer">
                            <li className="categories-item" onClick={this.handleClear}>
                                <div className="categories-icon">
                                    <div className="computer-categories"></div>
                                </div>
                                <span>Комьютеры</span>
                            </li>
                        </Link>
                        <Link to="/category/accessories">
                            <li className="categories-item" onClick={this.handleClear}>
                                <div className="categories-icon">
                                    <div className="acc-categories"></div>
                                </div>
                                <span>Аксессуары</span>
                            </li>
                        </Link>
                        <Link to="/category/medical">
                            <li className="categories-item" onClick={this.handleClear}>
                                <div className="categories-icon">
                                    <div className="med-categories"></div>
                                </div>
                                <span>Мед. маски</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                
                <Switcher routes={this.props.routes}/>

            </div>
        );
    }
}

export default AllCategories;