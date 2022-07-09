import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2 glass"><div className="inner2"></div></div>
            <h2 className="abouthead">Aaryan <mark className="mark2">Kaushal</mark></h2>
            <p>Full Stack Web Developer</p>
            <br></br>
            <p className="p10">I started my journey in the world of computers from an young age,
            now I’m 21 years old, Pursuing my Computer Science and Engineering Degree in
            Lovely Professional University, Phagwara.  Web development is my center of interest, i always
            love to work with CSS and its frameworks. I also like
            creating Interactive UI components for better UX and also enjoy video editing using Adobe After Effects 
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3>Education</h3>
            <div className="vr_line glass">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <h4>B.Tech in CSE</h4>
            <p className="p1">Lovely Professional University</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>July 2019 - 2023</p>
            <h4>High School</h4>
            <p className="p1">Kailash Vdiya Vihar</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>June 2019</p>

            <h3 class="sk_head">Skills</h3>
            <div class="sk glass">HTML</div>
            <div class="sk s2 glass">CSS</div>
            <div class="sk s3 glass">JavaScript</div>
            <div class="sk s4 glass">React</div>
            <div class="sk s5 glass">PHP</div>
            <div class="sk s6 glass">Python</div>
            <div class="sk s7 glass">MySQL</div>
            <div class="sk s8 glass">C++</div>
            </div>
            )
        }
    }
    
export default About
    