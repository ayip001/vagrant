import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Waypoint from 'react-waypoint';

import Contact from '../components/Contact.js';
import HeaderGeneric from '../components/HeaderGeneric';
import Nav from '../components/Nav';
import Scroll from '../components/Scroll';
import girl from '../assets/images/girl.jpg';
import about_banner from '../assets/images/about_banner.jpg';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false,
    };
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <div>
        <Helmet title={`About | ${siteTitle}`} />

        <HeaderGeneric title="About" />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav
          sticky={this.state.stickyNav}
          sections={[
            'Our story',
            'Our values',
          ]}
        />

        <div id="main">

          <section id="banner" className="main">
            <span className="image main"><img src={about_banner} alt="About Banner" /></span>
          </section>

          <section id="Our story" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Our story</h2>
                </header>
                <p>
                  In a land full of job openings stood a vagrant. Instead of
                  credentials, he only had a few side projects and decent
                  problem-solving skills under his belt. Even though most
                  regarded him with contempt, few appreciated the grit of an
                  explorer and the ingenuity of a pioneer. As a result, he
                  was able to become a software engineer.
                </p>
                <p>
                  This story isn’t common when over-filtering applicants based
                  on their credentials is standard practice. Knowing this, the
                  vagrant envisioned an accessible talent market, where the lack
                  of credentials won’t be a handicap to applicants or block
                  companies from acquiring capable talents. Thus begins the
                  journey of Vagrant Ltd in 2018.
                </p>
                <p>
                  Using methodologies inspired by leading tech companies,
                  Vagrant look beyond a talent’s credentials to ensure companies
                  the widest access to an incredible pool of problem-solving,
                  critical thinking, and output-oriented talents.
                </p>
              </div>
              <span className="image"><img src={girl} alt="girl" /></span>
            </div>
          </section>

          <section id="Our values" className="main special">
            <p>
              We scout in uncharted areas because we believe in taking risks to
              make a change.
            </p>
            <p>
              We are resourceful in provisioning. Problem-solving skills are the
              key in the fast-paced world.
            </p>
            <p>
              We take the road less traveled as comfort is the enemy of progress.
            </p>
            <p>
              We invest in lifelong explorers and learners, building people up.
            </p>
            <p>
              With strong values as guidance to a clear vision, we take strides
              in great pride.
            </p>
            <header className="major">
              <h2>We are Vagrant</h2>
            </header>
          </section>

          <Contact />

        </div>

      </div>
    );
  }
}

About.propTypes = {
  route: React.PropTypes.object,
};

export default About;

export const pageQuery = graphql`
  query pageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
