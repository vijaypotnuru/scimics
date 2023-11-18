import { Link } from "react-router-dom";
import "./SigninForm.css";
import { ScimicsLogo } from "../../icons";

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
     <ScimicsLogo/>
      <div className="signin-form-card-container">
        <div className="signin-form-card">
          <h3 className="welcome-text">Welcome 👋</h3>
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
              <svg
                className="social-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0184 0C18.3304 0 23.447 5.04892 23.447 11.2782C23.447 16.2601 20.1761 20.4863 15.6378 21.979C15.0584 22.0901 14.8527 21.7379 14.8527 21.4376C14.8527 21.0658 14.8664 19.8515 14.8664 18.3423C14.8664 17.2907 14.5007 16.6043 14.0904 16.2545C16.6355 15.9751 19.3098 15.0213 19.3098 10.6895C19.3098 9.45754 18.8664 8.45219 18.1327 7.66239C18.2515 7.37749 18.6435 6.23034 18.0207 4.67714C18.0207 4.67714 17.063 4.37494 14.8813 5.83354C13.9681 5.58384 12.9898 5.4582 12.0184 5.4538C11.047 5.4582 10.0698 5.58384 9.15784 5.83354C6.97384 4.37494 6.01384 4.67714 6.01384 4.67714C5.39327 6.23034 5.78527 7.37749 5.90298 7.66239C5.1727 8.45219 4.72584 9.45754 4.72584 10.6895C4.72584 15.0103 7.39441 15.9788 9.93269 16.2637C9.60584 16.5453 9.30984 17.042 9.20698 17.7713C8.55555 18.0595 6.90069 18.5583 5.88126 16.8346C5.88126 16.8346 5.2767 15.751 4.12927 15.6718C4.12927 15.6718 3.01498 15.6575 4.05155 16.3571C4.05155 16.3571 4.80012 16.7036 5.32012 18.0071C5.32012 18.0071 5.99098 20.0201 9.17041 19.3381C9.17612 20.2808 9.18641 21.1692 9.18641 21.4376C9.18641 21.7357 8.97612 22.0846 8.40583 21.9801C3.86412 20.4896 0.589844 16.2612 0.589844 11.2782C0.589844 5.04892 5.70755 0 12.0184 0Z"
                  fill="#838383"
                />
              </svg>
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
            You don't have an account ? {" "}
            <Link className="sign-up-link" to="/sign-up">
              {" "}Register account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
