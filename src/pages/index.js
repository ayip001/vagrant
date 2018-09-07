import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Waypoint from 'react-waypoint';

import Contact from '../components/Contact';
import Header from '../components/Header';
import Nav from '../components/Nav';
import compass from '../assets/images/compass.jpg';
import Scroll from '../components/Scroll';

class Index extends React.Component {
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
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav
          sticky={this.state.stickyNav}
          sections={['Our story', 'What we do', 'Industry expertise', 'Get Started!']}
        />

        <div id="main">

          <section id="Our story" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Vagrant is the HR firm that fully
                    explores the potential of a person,
                    changing the hiring culture one
                    deployment at a time.
                  </h2>
                </header>
                <ul className="actions">
                  <Link to="/about" className="button">Learn more about our story!</Link>
                </ul>
              </div>
              <span className="image"><img src={compass} alt="compass" /></span>
            </div>
          </section>

          <section id="What we do" className="main special">
            <header className="major">
              <h2>What we do</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code" />
                <h3>Technical Talent Search</h3>
                <p>
                  The demand for lead software engineers, data scientists, UI/UX
                  engineers, or cybersecurity researchers* is skyrocketing, and
                  knowing who to hire is not exactly trivial.
                </p>
                <p>
                  Vagrant fits technical talents to your project requirements.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-diamond" />
                <h3>Executive Search</h3>
                <p>
                  Good performance comes from good leadership. Don't know where
                  to find a general manager, an account manager, or an executive
                  assistant*?
                </p>
                <p>
                  Vagrant introduce capable leaders to strengthen your team.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-university" />
                <h3>Social Entreprenuership</h3>
                <p>
                  Different companies have different approaches to an existing
                  problem: continuously devauling degrees. Some simply scale up
                  their credentials requirement to meet previous levels of
                  exclusivity. This leads to social symptoms like unaffordable
                  student loans, denying adequate living standards on the
                  prospect of exactly such.
                </p>
                <p>
                  Vagrant sets the standard of hiring by fully exploring
                  the potential of a person, with or without a degree,
                  one deployment at a time.
                </p>
              </li>
            </ul>
            <ul className="actions">
              <Scroll type="id" element="Get Started!"><a href="#" className="button">Inquire now</a></Scroll>
            </ul>
          </section>

          <section id="Industry expertise" className="main special">
            <header className="major">
              <h2>Industry expertise</h2>
              <p>
                Vagrant is at your service to fine-tune your requirements and introduce the perfect fit.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-globe" />
                <strong>2</strong> Countries
              </li>
              <li className="style2">
                <span className="icon fa-laptop" />
                <strong>10</strong> Team members
              </li>
              <li className="style3">
                <span className="icon fa-check-square-o" />
                <strong>20+</strong> Years in HR
              </li>
              <li className="style4">
                <span className="icon fa-folder-open-o" />
                <strong>300+</strong> Profiles
              </li>
              <li className="style5">
                <span className="icon fa-diamond" />
                <strong>1</strong> Goal
              </li>
            </ul>
            <p className="content">
              We rely on our confidence in placing the right person, and the
              confidence comes from a team of experienced pathfinders. Among our
              founding team are members with 17+ years in HR, ex HR director,
              full-stack software engineer, ex admissions interviewer for MIT,
              ex Apple software engineer, machine learning specialist at Applied
              Physics Lab (direct subsidiary of the U.S. Government), blockchain
              engineer for Atana.
            </p>
          </section>

          <Contact />

        </div>

      </div>
    );
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
