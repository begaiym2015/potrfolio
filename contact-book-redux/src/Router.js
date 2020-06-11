import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './component/NavBar/NavBar';
import ContactBook from './component/ContactBook/ContactBook';
import Footer from './component/Footer/Footer';

const Router = () => {
    return (
        <BrowserRouter>
        <NavBar /> 
        <Route path="/" exact component={() => <ContactBook page="HOME" />} />
        <Route path="/add" component={() => <ContactBook page="ADD" />} />

        <Footer />
        </BrowserRouter>
    )
}
export default Router;