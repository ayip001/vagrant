import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

const Nav = props => {
  let Sections = props.sections.map((a, i) => {
      return <li key={i}><Scroll type="id" element={a}><a href="#">{a}</a></Scroll></li>;
  });

  return (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
      <Scrollspy items={props.sections} currentClassName="is-active" offset={-300}>
        { Sections }
      </Scrollspy>
    </nav>
  );
}

export default Nav;
