import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import HeaderGeneric from '../components/HeaderGeneric';
import signpost from '../assets/images/signpost.jpg';

const _404 = () => (
  <div>
    <Helmet title="404 | Vagrant" />

    <HeaderGeneric title="There doesn't seem to be anything here... Please try refreshing this page, going back to the previous page, or visiting our home page." />

    <span className="image main"><img src={signpost} alt="Signpost" /></span>
  </div>
)

export default _404;
