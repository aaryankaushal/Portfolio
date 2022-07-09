import React, { Component } from 'react';
import Social from '../components/Social';
import Map from '../img/location.PNG';

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
            <h1 className="subtopic">Contact Me</h1>
            <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
            <div class="con_out glass"><img src={Map} class="co1"></img></div>
            <a href="https://drive.google.com/file/d/1rwDhKZuHlr13iJWv3R8GrJiqeAMXjRm6/view?usp=sharing"><div className="back3 glass">Download Resume</div></a>
            <a href="mailto:aaryankaushal@gmail.com"><div className="back3 back4 glass">Contact Me</div></a>
            <div className="hr_line line3 glass"><div className="inner3"></div></div>
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    