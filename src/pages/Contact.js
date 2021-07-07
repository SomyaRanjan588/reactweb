import React from "react";
import "../App.css";
import Cont from "../contact";

const Contact = () => {
  return (
    <div>
      <div className="card">
        <div className="div1">
          <p className="para20">Contact Us</p>
          <p className="para2">
            Any question or remarks? just write us a message!
          </p>
        </div>
        <div className="mycard">
          <div className="row">
            <div className="col-md-5">
              <div className="left">
                <div className="div2">
                  <p className="para22">Contact Information</p>
                  <p className="para21">
                    Fill up the form and our Team will get back to you within 24
                    hours
                  </p>
                </div>
                <div className="div3">
                  <span className="span1">
                    <ion-icon name="call-outline"></ion-icon>
                  </span>
                  <span className="span2">+0123 4567 8910</span>
                </div>
                <div className="div4">
                  <span className="span1">
                    <ion-icon name="mail-outline"></ion-icon>
                  </span>
                  <span className="span3">hello@flowbase.com</span>
                </div>
                <div className="div5">
                  <span className="span1">
                    <ion-icon name="location-outline"></ion-icon>
                  </span>
                  <span className="span4">102 Street 2714 Don</span>
                </div>
                <div className="div6">
                  <span className="span5">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </span>
                  <span className="span6">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </span>
                  <span className="span7">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </span>
                  <span className="span8">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="right">
                <Cont />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
