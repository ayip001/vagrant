import React from 'react';
import Link from 'gatsby-link';

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Branches</h2>
      <ul className="actions">
        <li>
          <b>Hong Kong</b>
          <p>
            Flat G, 10/F, Sunview Industrial Bldg, 3 On Yip St, Chai Wan, Hong Kong
          </p>
          <p>
            (852) 2556 0111
          </p>
        </li>
        <li>
          <b>Philippines</b>
          <p>
            Penthhouse Mavenue Building, 7844 Makati Avenue, Makati City, 1209 Philippines
          </p>
          <p>
            (63) 956 037 0634
          </p>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contact Us</h2>
      <dl className="alt">
        <dt>Email</dt>
        <dd><a href="mailto:info@vagrant.org">info@vagrant.org</a></dd>
      </dl>
      <ul className="icons">
        <li><a href="https://t.me/vagrantorg" className="icon fa-paper-plane alt"><span className="label">Telegram</span></a></li>
        <li><a href="https://facebook.com/vagrantorg" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
        <li><a href="https://instagram.com/vagrantorg" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
      </ul>
    </section>
    <p className="copyright">&copy; Vagrant Ltd 2018</p>
  </footer>
);

export default Footer;
