import React from "react";
import InputForm from "../../components/input-form/InputForm";
import AllButton from "../../components/all-button/AllButton";
import { auth, createUserProfileDocument } from "../../firebase/Firebase";
import "./SignUp.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmedPassword: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmedPassword } = this.state;
    if (password !== confirmedPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmedPassword: ""
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmedPassword } = this.state;
    return (
      <div className="sign-up-page">
        <div className="sign-up">
          <h3>Sign up with your information</h3>
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <InputForm
              type="text"
              name="displayName"
              value={displayName}
              handleChange={this.handleChange}
              label="Name"
              required
            />
            <InputForm
              type="email"
              name="email"
              value={email}
              handleChange={this.handleChange}
              label="Email"
              required
            />
            <InputForm
              name="password"
              type="password"
              label="Password"
              value={password}
              handleChange={this.handleChange}
              required
            />
            <InputForm
              type="password"
              name="confirmedPassword"
              value={confirmedPassword}
              handleChange={this.handleChange}
              label="Confirmed Password"
              required
            />
            <AllButton type="submit">SIGN UP</AllButton>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
