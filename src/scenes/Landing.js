import React, { Component } from 'react';

import Hero from '../components/Hero'
import Info from '../components/Info'
import Location from '../components/Location'
import Login from '../components/Login'
import Menu from '../components/Menu'
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
        <Menu index={3} />
        <Login index={4} />
        <FAQ index={5} />
        <Footer index={6} />
      </div>
    );
  }
}

export default Landing;