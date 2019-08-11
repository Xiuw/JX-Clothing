import React from "react";
import InputForm from "../../components/input-form/InputForm";
import AllButton from "../../components/all-button/AllButton";
import { signInWithGoogle, auth } from "../../firebase/Firebase";
import { Link } from "react-router-dom";
import "./SignIn.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="sign-in-page">
        <div className="sign-in">
          <h3>Sign in with your email and password</h3>
          <form onSubmit={this.handleSubmit}>
            <InputForm
              name="email"
              type="email"
              value={this.state.email}
              label="Email"
              handleChange={this.handleChange}
              required
            />
            <InputForm
              name="password"
              type="password"
              label="Password"
              value={this.state.password}
              handleChange={this.handleChange}
              required
            />

            <div className="buttons">
              <AllButton type="submit">Sign In</AllButton>

              <div className="or">or</div>

              <Link to="/signup">
                <AllButton>Need an account</AllButton>
              </Link>

              <AllButton onClick={signInWithGoogle} isGoogleSignIn>
                Sign In With Google
              </AllButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SignIn;
