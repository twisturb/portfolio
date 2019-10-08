import React from 'react';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import TweenOne from 'rc-tween-one';
import { Parallax } from 'rc-scroll-anim';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startPulse: false
    }
  }

  render() {
    return (
      <div className="container header center">
        <div className="header-content">
          <Parallax
            animation={[
              { opacity: 1, playScale: [0, 0.7] },
              { opacity: 0, playScale: [0, 0.8] }
            ]}>

              <h1>
              <Texty
                className="center"
                key="development"
                type="right"
                mode="smooth"
                >
                  Web developer
                </Texty>
              </h1>

              <h2>
              <Texty
                className="center"
                key="design"
                delay={500}
                type="left"
                mode="smooth"
              >
                in progress
              </Texty>
            </h2>
          </Parallax>
          <Parallax
            animation={[
              { opacity: 1, playScale: [0, 0.3] },
              { opacity: 0, playScale: [0, 0.8] }
            ]}>
            <TweenOne
              animation={{
                scale: 1.05,
                yoyo: true,
                repeat: -1,
                delay: 900
              }}
            >
              <a href="#about" className="header-icon-link">
                <FontAwesomeIcon icon={faChevronDown} className="header-icon" />
              </a>
            </TweenOne>
          </Parallax>
        </div>
      </div>
    )
  }
}

export default Header;