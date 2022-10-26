import React, { Component } from 'react';
import logo from "../images/logo.svg";

import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';


class Footer extends Component {
    listInputs = ["About", "Careers", "Events", "Products", "Support"];
    render() {
        return (
            <div className='footer'>
                <section className='footer__left'>
                    <img src={logo} alt="" />
                    <ul>
                        {
                            this.listInputs.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </section>
                <section className='footer__right'>
                        <div>
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={pinterest} alt="" />
                            <img src={instagram} alt="" />                            
                        </div>
                        <span> 2021 Loopstudios. All rights reserverd.</span>
                </section>
            </div>
        )
    }
}

export default Footer;