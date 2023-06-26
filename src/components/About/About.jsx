import { useState } from "react";
import "./About.css";

const About = () => {
  const [exper, setExper] = useState(true);
  const [edu, setEdu] = useState(false);

  const experClick = () => {
    setExper(true);
    setEdu(false);
  };

  const eduClick = () => {
    setEdu(true);
    setExper(false);
  };

  return (
    <div className="About">
      <div className="AboutWrapper">
        <div className="AboutLeft">
          <img
            src="assests/4de47e6d-e1cb-4676-8d10-5974b80b94d5.jpg"
            className="aboutImage"
            alt=""
          />
        </div>
        <div className="AboutRight">
          <div className="Aboutme">
            <div className="AboutTitle">About Me</div>
            <div className="AboutDesc">
              I'm a self learned front-end developer, I use this lockdown to
              learn about web designing then I worked with some of my personal
              projects to enhance my skills in web designing
            </div>
            <div className="myself">
              <div className="experience" onClick={experClick}>
                <div className="Text">Experience</div>
              </div>
              <div className="education" onClick={eduClick}>
                <div className="Text">Education</div>
              </div>
            </div>
            {exper && (
              <div className="experienceContent">
                <span>
                  I worked on few personal projects, I write short and reusable
                  code, I know to work with small frameworks like bootstrap,
                  animate.css and all.
                </span>
              </div>
            )}
            {edu && (
              <div className="educationContent">
                <div className="mca">
                  <div className="eduTitle">
                    Master of Computer Application (MCA),
                  </div>
                  <div className="eduDesc">
                    MASS College of Arts & Science,
                    <br /> Kumbakonam.
                    <br /> (Bharathidasan University)
                  </div>
                </div>
                <div className="bca">
                  <div className="eduTitle">
                    Bachelor of Computer Application (BCA),
                  </div>
                  <div className="eduDesc">
                    MASS College of Arts & Science,
                    <br /> Kumbakonam.
                    <br /> (Bharathidasan University)
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="skillContainer">
        <div className="skill">
          <h1>SKILLS</h1>
        </div>
        <div className="skillWrapper">
          <div className="skillContent">
            <div className="skillTitle ">FRONT-END</div>
            <div className="skillDesc">HTML</div>
            <div className="skillDesc">CSS</div>
            <div className="skillDesc">REACT.JS</div>
          </div>
          <div className="skillContent">
            <div className="skillTitle">PROGRAMMING</div>
            <div className="skillDesc">JAVASCRIPT</div>
          </div>
          <div className="skillContent">
            <div className="skillTitle">VERSIONING</div>
            <div className="skillDesc">GIT</div>
            <div className="skillDesc">GITHUB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
