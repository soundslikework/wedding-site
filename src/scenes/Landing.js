import React, { Component } from 'react';

import Hero from '../components/Hero'
import Info from '../components/Info'
import Location from '../components/Location'
import Login from '../components/Login'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

import './../assets/variables.css';
import './../assets/fonts.css';

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <Hero index={0} />
        <Info index={1} />
        <Location index={2} />
        <Login index={3} />
        <FAQ index={4} />
        <Footer index={5} />
      </div>
    );
  }
}

export default Landing;