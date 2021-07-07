import React from "react";
import "./App.css";

export default class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      mail: "",
      mailerror: "",
    };
  }
  Valid() {
    if (!this.state.mail.includes("com"))
      this.setState({ mailerror: "Your mail must be contain .com" });
    else {
      return true;
    }
  }
  submit() {
    if (this.Valid()) {
      alert(" you have sucessfully Created Account ");
    }
  }
  render() {
    return (
      <div>
        <p className="para10">Email</p>

        <input
          type="text"
          name="mail"
          className="inputfield"
          placeholder="johndoe@email.com"
          onChange={(e) => {
            this.setState({ mail: e.target.value });
          }}
        ></input>
        <br></br>

        <p className="para11">{this.state.mailerror}</p>

        <br></br>
        <button className="button6" onClick={() => this.submit()}>
          Create Account
        </button>
      </div>
    );
  }
}
