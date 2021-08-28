import React from 'react';
import NavItem from "./nav-item";
import Image from "./image";
import logo from '../../assets/images/logo.svg';

const navItems = [{id: 0, name: "Platform", ref: 'platform'},
    {id: 1, name: "Super Merchants", ref: 'super-merchants'},
    {id: 2, name: "Pricing", ref: 'pricing'},
    {id: 3, name: "Partners", ref: 'partners'},
    {id: 4, name: "Docs", ref: 'docs'}
];

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: false, className: 'container'};
        this.collapse = this.collapse.bind(this);
    }

    collapse = () => {
        this.setState((state) => ({
            active: !state.active,
            className: !state.active ? 'container collapsed' : 'container'
        }));
    }

    render() {
        return (
            <nav>
                <div className="top-nav">
                    <a href="#">
                        <Image img={logo}>
                        </Image>
                    </a>
                    <div className="desktop-menu">
                        {navItems.map((item) => (
                            <NavItem onScroll={() => this.props.onClick(item)} name={item.name} key={item.id}>
                            </NavItem>
                        ))}
                    </div>
                    <div className="demo">
                        <a href="#">
                            <button className="domo__btn">
                            Request Demo
                            </button>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
