import React from 'react';

import MyPic from '../me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Contact extends React.Component {
  render() {
    return (
      <div className="container form" id="contact">
        <div className="content left contact">
            <img src={MyPic} className="contact-pic" />
            <p>
              <FontAwesomeIcon icon={faGithub} className="social-icon" /> <a href="https://github.com/twisturb">twisturb</a> 
            </p>
            <p>
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> <a href="https://www.linkedin.com/in/laura-parviainen-a15780138/">Laura Parviainen</a> 
            </p>
            <p>
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" /> <a href="mailto:laura.parviainen@gmail.com">laura.parviainen@gmail.com</a> 
            </p>
            <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="social-icon" /> Finland
            </p>
        </div>
      </div>
    );
  }
}

export default Contact;