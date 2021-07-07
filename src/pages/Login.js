import React from "react";
import "../App.css";
import Img from "../loginimages";
import Form from "../newproject";

const Login = () => {
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="mycard">
            <div className="row">
              <div className="col-md-6">
                <div className="leftdiv" style={{ textAlign: "center" }}>
                  <p className="para1">Baselane</p>
                  <div className="image">
                    <Img />
                  </div>
                  <div className="leftdiv2">
                    <p className="para2">
                      Manage you cash flow with confidence{" "}
                    </p>
                    <p className="para3">
                      Optimize and take control of your class flow - we give you
                      the insights you need to make the right decisions
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="rightdiv">
                  <div className="rightdiv1">
                    <p>
                      I already have an account
                      <button className="signin">sign in</button>
                    </p>
                  </div>
                  <p className="para4">Sign Up to Baselane</p>
                  <div className="rightdiv2">
                    <p>
                      <button className="landroad">Landroad</button>
                      <span className="span20"> Tentant</span>
                    </p>
                  </div>
                  <div className="rightdiv3">
                    <button className="google">
                      <span className="span21">
                        <ion-icon name="logo-google"></ion-icon>
                      </span>
                      <span className="span22">Login in with Google+</span>
                    </button>
                    <div className="rightdiv4">
                      <button className="facebook">
                        <span className="span3">
                          <ion-icon name="logo-facebook"></ion-icon>
                        </span>
                        <span className="span2">Login in with Facebook</span>
                      </button>
                    </div>
                    <div className="rightdiv5">
                      <p>- - - - - - Or Sign up with email - - - - - -</p>
                    </div>
                    <div>
                      <Form />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
