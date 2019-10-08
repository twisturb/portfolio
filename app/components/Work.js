import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

class Work extends React.Component {
  render() {
    return (
      <div className="container work" id="work">
        <div className="content left">
          <h3>My Work</h3>
            <div className="single-work">
              <FontAwesomeIcon icon={faWindowMaximize} className="work-icon" />
              <a href="http://santeripienimaki.fi">
                SanteriPienimaki.fi
              </a>
              <p>
                A quick and simple website for a chairman of Animal Rights Party.
                <br/>
                <FontAwesomeIcon icon={faLongArrowAltRight} className="work-icon" />
                HTML, CSS, JS, Bootstrap
              </p>
            </div>
            <div className="single-work">
                <FontAwesomeIcon icon={faWindowMaximize} className="work-icon" />
                <a href="http://karaasi.fi">
                  Karaasi.fi
                </a>
                <p>
                  An old work of mine.
                  <br/>
                  <FontAwesomeIcon icon={faLongArrowAltRight} className="work-icon" />
                  HTML, CSS
                </p>
            </div>
            <div className="single-work">
                <FontAwesomeIcon icon={faWindowMaximize} className="work-icon" />
                <a href="https://nostetec.fi">
                  Nostetec.fi
                </a>
                <p>
                  My first WordPress site I made in a verylimited time for a private entrepreneur. Created a simple child theme and added some styling.
                  <br/>
                  <FontAwesomeIcon icon={faLongArrowAltRight} className="work-icon" />
                  HTML, PHP, CSS
                </p>
            </div>
            <div className="single-work">
                <FontAwesomeIcon icon={faWindowMaximize} className="work-icon" />
                <a href="https://devlaura.net">
                  DevLaura.net
                </a>
                <p>
                  This portfolio. I started to make this during my studies. Animations are AntMotion components by AntDesign.
                  <br/>
                  <FontAwesomeIcon icon={faLongArrowAltRight} className="work-icon" />
                  HTML, CSS, ReactJS, JS
                </p>
            </div>
        </div>
      </div>
    )
  }
}

export default Work;