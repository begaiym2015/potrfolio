import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-wrapper">
                    <div className="footer-left">
                        <span id="footer-logo">ClickStore</span>
                        <span>© 2020 Все права защищены</span>
                    </div>
                    <div className="footer-right">
                        <ul className="social-list">
                            <li><a href="https://www.facebook.com/" target="_blank"><i className="facebook-icon"></i>facebook</a></li>
                            <li><a href="https://www.twitter.com/" target="_blank"><i className="twitter-icon"></i>twitter</a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><i className="instagram-icon"></i>instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;