import React from 'react';
import background from '../../assets/images/kv-img-1.png';
import loudspeaker from '../../assets/images/loudspeaker.png';

import Image from "./image";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="title">
                    <h1><span>KMMRCE</span> is an enterprise<br/> level digital platform that<br/> provides a turnkey
                        solution<br/> to online retailing.</h1>
                    <button>
                        Request Demo ›
                    </button>
                </div>
                <div className="divider">
                </div>
                <div className="image">
                    <div className="absolute">
                        <Image img={background}>
                        </Image>
                    </div>
                    <div className="speaker">
                        <Image img={loudspeaker}>
                        </Image>
                    </div>
                </div>
            </header>
        );
    };
}

export default Header;
