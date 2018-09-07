import React from 'react';
import Link from 'gatsby-link';

import logo_banner from '../assets/images/logo.svg';

const HeaderGeneric = props => (
  <header id="header" className="alt">
    <Link to="/">
      <span className="logo"><img src={logo_banner} alt="" /></span>
    </Link>
    <h2>{props.title}</h2>
  </header>
);

export default HeaderGeneric;
