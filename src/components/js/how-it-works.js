import React from 'react';
import data from "./utils/data";
import Step from "./step";
import Loader from "react-loader-spinner";

class HowItWorks extends React.Component {
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

    render() {
        return (
            <section className="how-it-works">
                <div className="steps-container">
                    {this.state.clicked ? data.map((item, idx) => (
                            <div className={(this.props.reversed ? 'reversed' : '')}>
                                <Step title={item.title}
                                      title2={item.title2}
                                      smallTitle={item.smallTitle}
                                      img={item.img}
                                      list={item.list}
                                      listUnder={item.listUnder}
                                      subtitle={item.subtitle}
                                      subtitle2={item.subtitle2}
                                      key={idx}>
                                </Step>
                            </div>
                        ))
                        : data.slice(0, 1).map((item, idx) => (
                            <Step title={item.title}
                                  title2={item.title2}
                                  smallTitle={item.smallTitle}
                                  img={item.img}
                                  list={item.list}
                                  listUnder={item.listUnder}
                                  subtitle={item.subtitle}
                                  subtitle2={item.subtitle2}
                                  key={idx}>
                            </Step>
                        ))
                    }
                    {this.state.loader &&
                    <div className="loader"><Loader type="Bars" color="#00BFFF" height={80} width={80}/></div>}

                    <button className="button"
                            onClick={this.handleClick}>{!this.state.clicked ? 'See more' : 'See Less'}</button>
                </div>
            </section>
        );
    }
};

export default HowItWorks;
