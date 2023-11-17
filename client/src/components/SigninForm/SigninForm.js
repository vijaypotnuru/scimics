import { Link } from "react-router-dom";
import "./SigninForm.css";

const SigninForm = () => {
  const emailInputField = () => {
    return (
      <div className="input-field-container">
        <label htmlFor="email">Email address*</label>
        <input
          className="input-field"
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          required
        />
      </div>
    );
  };

  const passwordInputField = () => {
    return (
      <div className="input-field-container">
        <label htmlFor="password">Password*</label>
        <input
          className="input-field"
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          required
        />
      </div>
    );
  };

  return (
    <div className="signin-form-container">
      <h1 className="logo-text">SCIMICS</h1>
      <div className="signin-form-card-container">
        <h3 className="welcome-text">Welcome👋</h3>
        <h1 className="login-title">Login Account</h1>
        <div className="social-logins">
          <button className="social-login-btn">
            <img
              className="social-icons"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="logo"
            />
            Google
          </button>
          <button className="social-login-btn">
            <img
              className="social-icons"
              src="https://pngimg.com/uploads/github/github_PNG32.png" alt="logo"
            />
            GitHub
          </button>
        </div>
        <p className="or">Or</p>
        <form className="signin-form">
          {emailInputField()}
          {passwordInputField()}
          <Link to="/">
            <button className="login-btn">Login</button>
          </Link>
        </form>
        <p className="message">
          You don't have an account?{" "}
          <Link className="sign-up-link" to="/sign-up">
            Register account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;
