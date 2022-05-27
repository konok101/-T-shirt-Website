import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../Customlink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>This is from header component</h1>
            <nav>
                <Link to='/home'>Home</Link>
             <CustomLink to='/orderreview'>Order review</CustomLink>
            </nav>
        </div>
    );
};

export default Header;