import "./Self.css";

const Self = () => {
  return (
    <div className="Self">
      <div className="SelfWrapper">
        <div className="SelfLeft">
          <div className="LeftWrapper">
            <h3>Self-leaner</h3>
            <h1>
              Hi I'm,
              <br />
              <span>Aravinth</span>
            </h1>
            <h2>React Developer</h2>
            <button className="RESUME">
              <a
                href="https://drive.google.com/file/d/1YbZWrinJjz3g13yVoDZuMXQ7BuuGmOtL/view?usp=drivesdk"
                download
              >
                {" "}
                Resume
              </a>
            </button>
          </div>
        </div>
        <div className="SelfRight">
          <div className="cricule">
            <img src="assests/bg4.jpg" alt="" className="SelfImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Self;
