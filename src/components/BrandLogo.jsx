import React from 'react';
import { Link } from 'react-router-dom';

import Leaf from '../assets/leaf.svg';

const BrandLogo = () => {
    return (
        <Link href="/" to="/" className="brand-logo">
            <img src={Leaf} alt="brand" />
            <span>
                {'Project Middleman'}
            </span>
        </Link>
    );
};

export default BrandLogo;
