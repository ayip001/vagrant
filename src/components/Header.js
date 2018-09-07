import React from 'react';
import Link from 'gatsby-link';

import logo from '../assets/images/logo.svg';

const Header = props => (
  <header id="header">
    <Link to="/">
      <span className="logo"><img src={logo} alt="Vagrant Logo" /></span>
    </Link>
  </header>
);

export default Header;
