import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import Reveal from './../Reveal';

import styles from './Container.module.css';

class Container extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            hasEnteredView: false
        }
    }
    handleScroll() {
        const hasEnteredView = this.state.hasEnteredView;
        if (!hasEnteredView) {
            console.log("scrolled into view");
            this.setState({
                hasEnteredView: true
            })
        }
    }
    render() {
        const hasEnteredView = this.state.hasEnteredView;
        return(
            <Waypoint onEnter={this.handleScroll}>
                <div className={`${styles.container} ${this.props.index % 2 === 0 ? styles.main : styles.secondary}`}>
                <Reveal show={hasEnteredView}>
                    {this.props.children}
                </Reveal>
                </div>
            </Waypoint>
        );
    }
}

export default Container;