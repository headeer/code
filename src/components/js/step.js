import Image from "./image";
import React from 'react';
import icon from '../../assets/images/listIcon.png';

const Step = ({img, title, title2, smallTitle, subtitle, subtitle2, list, listUnder}) => {

    return (
        <div className='card-section'>
            <div className="image-container">
                <Image img={img} key={Math.random()}>
                </Image>
            </div>
            <span className="break"></span>
            <div className="text-container">
                <h2 className='title'>{title}</h2>
                <h5 className="small-title">{smallTitle}</h5>
                <p className="text">{subtitle}</p>
                <ul>
                    {listUnder &&
                    listUnder.map((item, key) =>
                        <li key={key}><img className="list-icon" src={icon} alt="icon"/>{item.text}</li>
                    )
                    }
                </ul>
                <h5 className="small-title">{title2}</h5>
                <p className="text">{subtitle2}</p>
                <ul>
                    {list && list.map((item, key) =>
                        <li key={key}><img className="list-icon" src={icon} alt="icon"/>{item.text}</li>
                    )}
                </ul>
            </div>
        </div>

    );
};

export default Step;

