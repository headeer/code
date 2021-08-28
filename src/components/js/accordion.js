import React from 'react';
import icon from "../../assets/images/listIcon.png";
import img1 from "../../assets/images/Group5132.png";
import img2 from "../../assets/images/Group5133.png";
import img3 from "../../assets/images/Group5147.png";
import Image from "./image";
import Loader from "react-loader-spinner";

class Accordion extends React.Component {
    constructor() {
        super();

        this.state = {
            clicked: false,
            opacity: 0,
            loader: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => ({
            clicked: !state.clicked,
            opacity: 1,
            loader: true
        }));
        setTimeout(() => {
            this.setState(() => ({
                loader: false
            }));
        }, 2000)
    }

    renderText() {
        return (<div className="text-container">
            <p className="text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
            </p>
            <ul>
                <li><img className="list-icon" src={icon} alt="icon"/>Sed magna enim
                </li>
                <li><img className="list-icon" src={icon} alt="icon"/>Bibendum a quam eu
                </li>
            </ul>
        </div>)
    }

    render() {
        return (
            <section className='accordion'>
                <div className="left-side">
                    {!this.state.clicked ? (
                            <section className="collapsed">
                                {this.renderText()}
                                <div className="images">
                                    <Image img={img1}></Image>
                                </div>
                            </section>

                        )
                        : (
                            <section className="expanded">
                                <div className="section">
                                    {this.renderText()}
                                    <div className="images">
                                        <Image img={img1}></Image>
                                    </div>

                                </div>
                                <div className="section">
                                    <p className='text'>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillumdolore eu fugiat nulla pariatur.
                                    </p>
                                    <div className="images">

                                        <Image img={img2}></Image>
                                    </div>

                                </div>
                                <div className="section">
                                    {this.renderText()}
                                    <div className="images">
                                        <Image img={img3}></Image>
                                    </div>
                                </div>

                            </section>
                        )
                    }
                    {this.state.loader && <div className="loader"><Loader type="Bars" color="#00BFFF" height={80} width={80} /></div> }
                </div>
                <div className="right-side">
                    <h3 className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h3>
                    <p className="text">Stay up to date with the feed</p>
                    <p className="text"><span onClick={this.handleClick} className="underline">Keep track of</span> projects</p>
                    <p className="text">Invite and view your team members</p>
                </div>

            </section>
        );
    };
}

export default Accordion;
