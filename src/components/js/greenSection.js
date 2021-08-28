import React from 'react';
import chair from '../../assets/images/6UxtLv.png';

import Image from "./image";

class GreenSection extends React.Component {
    render() {
        return (
            <section className='green-section'>
                <div className="title">
                    <h2><span>``</span>KMMRCE is an ideal solution for anyone looking to build a bespoke e-commerce
                        website. A great foundation has been designed not only to get you started on a fully-fledged
                        storefront with minimal effort.<span>``</span></h2>
                </div>
                <img src={chair} alt=""/>
                <p className="text">Tyler Hildebrand, Head of Engineering at Patch</p>
            </section>
        );
    };
}

export default GreenSection;
