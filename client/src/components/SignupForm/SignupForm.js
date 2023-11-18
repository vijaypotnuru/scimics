import { Link } from "react-router-dom";
import "./SignupForm.css";
import { ScimicsLogo } from "../../icons";

const SignupForm = () => {
  const firstNameInputField = () => {
    return (
      <div className="input-field-container">
        <label htmlFor="firstName">First Name*</label>
        <input
          className="input-field"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter first name"
          required
        />
      </div>
    );
  };

  const lastNameInputField = () => {
    return (
      <div className="input-field-container">
        <label htmlFor="lastName">Last Name*</label>
        <input
          className="input-field"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter last name"
          required
        />
      </div>
    );
  };

  const emailInputField = () => {
    return (
      <div className="input-field-container">
        <label htmlFor="email">Email* (OTP Will Send To Email)</label>
        <input
          className="input-field"
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
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

  const confirmPasswordInputField = () => {
    return (
      <div className="input-field-container">
        <label htmlFor="confirmPassword">Confirm Password*</label>
        <input
          className="input-field"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm password"
          required
        />
      </div>
    );
  };

  const termsAndConditions = () => {
    return (
      <div className="terms-and-conditions">
        <input className="term-checkbox" type="checkbox" name="terms" id="terms" required />
        <label className="terms" htmlFor="terms">I agree to terms & conditions</label>
      </div>
    );
  };

  return (
    <div className="signup-form-container">
      <ScimicsLogo />
      <div className="signup-form-card-container">
        <div className="signup-form-card">
          <h1 className="registration-title">User Registration</h1>

          <form className="signup-form">
            {firstNameInputField()}
            {lastNameInputField()}
            {emailInputField()}
            {passwordInputField()}
            {confirmPasswordInputField()}
            {termsAndConditions()}
            <Link to="/sign-in">
              <button className="register-btn">Register</button>
            </Link>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
