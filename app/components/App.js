import React from 'react';
import '../App.css';

import Navigation from './Navigation';
import Header from './Header';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Navigation />
        <Header />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
