import React from 'react';
import Image from "./image";
import logo from '../../assets/images/Group 3880.png';
const Footer = () => {
    return (
        <footer>
            <div className="footer">

            <div className='logo'>
                <Image img={logo}></Image>
            </div>
            <div>
                <h4>Product</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Tech Stack</a></li>
                    <li><a href="#">Super Merchants</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Partners</a></li>
                </ul>
            </div>
            <div>
                <h4>About Us</h4>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Sectors</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div>
                <h4>Dolore</h4>
                <ul>
                    <li><a href="#">Voluptate</a></li>
                    <li><a href="#">Cillum</a></li>
                    <li><a href="#">Pariatur.</a></li>
                    <li><a href="#">Nulla</a></li>
                    <li><a href="#">Irure</a></li>
                </ul>
            </div>
            <div>
                <h4>Tertiary</h4>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Cookie Policy </a></li>
                </ul>
            </div>
            </div>

            <div className="bottom-footer">
                <p>© Kmmrce</p>
                <p>Site By Six</p>
            </div>
        </footer>
    );
};

export default Footer;
