import React, { useState } from "react";
import "./Footer.css";
import {
  FacebookOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  ErrorOutline,
} from "@mui/icons-material";

const Footer = () => {
  const style = {
    width: "30px",
    height: "30px",
  };

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwi6QfYDoXXUA3Shgtpfk_FuSs_vROC7Zjs2fCbN2jQPcxcFciNc1lyB50o78M3bRNbeg/exec";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 5000);
      return;
    }
    const form = e.target;
    const formData = new FormData(form);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        console.log("Success!", response);
        setSuccessMessage("Form submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div className="Footer">
      <div className="FooterContact">Contact</div>
      <div className="FooterWrapper">
        <div className="FooterLeft">
          <div className="FooterAddress">
            <div className="Footertitle">Address</div>
            <div className="FooterDesc">
              Karuppur,
              <br />
              Thanjavur Dist, <br /> Tamilnadu 609807.
            </div>
          </div>
          <div className="FooterContanct">
            <div className="Footertitle">Contact</div>
            <div className="FooterDesc">+91 8524928800</div>
            <div className="FooterDesc">Aravinthnatarajan16@gmail.com</div>
          </div>
          <div className="FooterConnect">
            <div className="Icon">
              <a href="https://www.facebook.com/kadaikutty.singam.773/">
                <FacebookOutlined style={style} />
              </a>
            </div>
            <div className="Icon">
              <a href="https://www.instagram.com/kadaikutty.singam/">
                <Instagram style={style} />
              </a>
            </div>
            <div className="Icon">
              <a href="https://www.linkedin.com/in/aravinth-natarajan-0b8871254/">
                <LinkedIn style={style} />
              </a>
            </div>
            <div className="Icon">
              <a href="https://twitter.com/ARAVINTH8524">
                <Twitter style={style} />
              </a>
            </div>
            <div className="Icon">
              <a href="https://github.com/login">
                <GitHub style={style} />
              </a>
            </div>
          </div>
        </div>
        <div className="FooterRight">
          <form className="form" onSubmit={handleSubmit}>
            {errorMessage && (
              <p className="error">
                <ErrorOutline style={{ marginRight: "10px" }} />
                Please Enter the Value
              </p>
            )}
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              type="text"
              name="Message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="button" type="submit">
              Submit
            </button>
          </form>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
