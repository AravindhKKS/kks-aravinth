import { Launch } from "@material-ui/icons";
import "./Course.css";

const Course = () => {
  return (
    <div className="Course">
      <div className="CourseWrapper">
        <div className="CourseTitle">
          <span>Certificate Course</span>
        </div>
        <div className="CourseContent">
          <div className="CourseItem">
            <span>React.js</span>
            <div className="CourseNav">
              <p className="CourseText">Udemy Certificte</p>
              <a href="https://drive.google.com/file/d/1YfxLkkewfIzFjS63TvAFKcqauJURX9dv/view?usp=drivesdk">
                <Launch />
              </a>
            </div>
          </div>
          <div className="CourseItem">
            <span>Typewriting</span>
            <div className="CourseNav">
              <div className="CourseText">English Junior</div>
              <a href="https://drive.google.com/file/d/1VFzXDrV2cP1hoOFmxzTLdjGFZQT9TjEN/view?usp=drivesdk">
                <Launch />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
