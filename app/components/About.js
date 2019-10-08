import React from 'react';
import SkillBars from './SkillBars';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideElement: false
    }
  }

  render() {
    return (
      <div className="container intro" id="about">
        <div className="content left">
          <h3>Hi, I'm Laura.</h3>
            <p>
              I'm focused mostly on <b>web development</b>. At the moment front-end is my primary field, but I'm also very inquisited about the back-end. I'm quite confident when it comes to JavaScript, HTML and CSS. Different JS and CSS frameworks are very familiar to me. I have also some experience with NodeJS, Rest APIs, PHP, Python, Magento2 and WordPress. Considering databases, I have some understanding in MySQL and MongoDB.
            </p>
            <p>
              I'm always eager to learn new things and constantly doing the stuff you need to become a better developer. I value a clean, high-quality code and forethought enterities. I don't want to get stuck at being only a front-end developer - when it comes to web development, I think understanding the big picture is a key to be a capable and valuable developer.
            </p>
            <p>
              The logical mindset of a programmer and the visual eye of a designer combined.
            </p>
        </div>
        <SkillBars />
      </div>
    )
  }
}

export default About;