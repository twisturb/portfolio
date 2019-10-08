import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import classnames from "classnames";
import QueueAnim from 'rc-queue-anim';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transparent: true
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      this.setState({ transparent: false })

    } else {
      this.setState({ transparent: true })
    }
  }

  render() {
    return (
      <Router>
        <QueueAnim 
          type="top" 
          mode="smooth" 
          delay={200} 
          className="nav"
        >
          <div key="nav" className={classnames("nav transparent", { "nav with-bg": !this.state.transparent })}>
            <ul className="nav-navbar">
              <li><Link to={'/#root'} className="nav-link">Home</Link></li>
              <li><Link to={'/#about'} className="nav-link">About</Link></li>
              <li><Link to={'/#work'} className="nav-link">Work</Link></li>
              <li><Link to={'/#contact'} className="nav-link">Contact</Link></li>
            </ul>
          </div>
        </QueueAnim>
      </Router>
    )
  }
}

export default Navigation;