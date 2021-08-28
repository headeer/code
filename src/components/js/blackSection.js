import React from 'react';
import data from './utils/blackSection';
import Image from "./image";

class BlackSection extends React.Component {
    render() {
        return (
            <section className='black-section'>
                <h5 className="text">Serving Our Customers</h5>
                <h2 className="section-heading">Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi
                    pellentesque eu dolor luctus sagittis. Praesent commodo velit eget urna mollis dignissim.</h2>
                <div className="section-steps">
                    {data.map((item, key) =>
                        <div className="step" key={key}>
                            <Image img={item.img}>
                            </Image>
                            <p className="text">{item.title}</p>
                            <p className="subtext">{item.subtitle}</p>
                            <a href={item.buttonLink}>
                                <button className="button">
                                    {item.buttonText}
                                </button>
                            </a>
                        </div>
                    )}

                </div>
            </section>
        );
    };
}

export default BlackSection;
