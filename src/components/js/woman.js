import React from 'react';

class WomanSection extends React.Component {
    render() {
        return (
            <section className='woman-section'>
                <div className="title-container">
                    <h4>Case Study</h4>
                    <h2 className='section-title'>Created with KMMRCE:<br/>
                        Watch 1010</h2>
                    <p className='text'>Disrupting and democratizing healthcare. Butterfly’s ambitious, rapid global scale-out is only possible with the support of Saleor. Their incredible journey has already taken the company from a disruptive startup to Apple Design Awards Winner 2019</p>
                    <div className="button-container">
                        <a href="#"><button className="button">View Case Study ›</button></a>
                        <a href="#"><button className="button">View All ›</button></a>
                    </div>
                </div>
                <div className="image-container">
                    <h3 className="text">Summer<br/>
                        Wanderlust</h3>
                </div>

            </section>
        );
    };
}

export default WomanSection;
