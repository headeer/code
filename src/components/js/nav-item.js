import React from 'react';

const NavItem = ({name, onScroll}) => {
    return (
       <li className='nav-item'>
           <h2 onClick={onScroll}>{name}</h2>
       </li>
    );
};

export default NavItem;
