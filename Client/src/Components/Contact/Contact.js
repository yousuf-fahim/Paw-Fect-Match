import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:pawfect.mew@gmail.com">
        pawfect.mew@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/company/bubt/">
          User Name: BUBT
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/yousuf-fahim">
          yousuf-fahim
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/yousuf.fahim27/">
          @paw-fect-match
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+8807106561533">
          +88 017 06561533
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
