import React from 'react';
import Link from 'gatsby-link';

const Contact = props => (
  <section id="Get Started!" className="main special">
    <header className="major">
      <h2>Get started now</h2>
      <p>
        Contact us today by phone, email, or the form below.
        A specialist will get back to you promptly.
      </p>
    </header>
    <form action="https://formspree.io/info@vagrant.org" method="POST">
      <div className="row uniform">
        <div className="6u 12u28small29">
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div className="6u 12u28small29">
          <input type="email" name="_replyto" placeholder="Email" required />
        </div>
        <div className="12u">
          <textarea name="message" placeholder="Enter your message" rows="6" />
        </div>
        <div className="12u">
          <select id="category" name="category" required>
            <option value="">- Please select a category -</option>
            <option value="Technical">Technical Talent Search</option>
            <option value="Exec">Executive Search</option>
            <option value="Social">Social entrepreneurship</option>
          </select>
        </div>
        <div className="12u">
          <ul className="actions">
            <li><input className="special" type="submit" value="Send" /></li>
            <li><input value="Reset" type="reset" /></li>
          </ul>
        </div>

        <input type="hidden" name="_subject" value="New Contact Us Submission" />
        <input type="hidden" name="_format" value="plain" />
        <input type="hidden" name="_next" value="/thanks" />
      </div>
    </form> 
  </section>
);

export default Contact;
