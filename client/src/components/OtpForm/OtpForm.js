import { Link } from "react-router-dom";
import "./OtpForm.css";
import { ScimicsLogo } from "../../icons";

const OtpForm = () => {
  const otpInputField = () => {
    return (
      <div className="otp-input-field-container">
        <label htmlFor="otp">OTP sent to your Email address</label>
        <div className="digit-inputs">
          <input
            className="otp-input-field"
            type="text"
            name="otp"
            id="otp"
            placeholder="0"
            required
            maxLength={1}
          />
          <input
            className="otp-input-field"
            type="text"
            name="otp"
            id="otp"
            placeholder="0"
            required
            maxLength={1}
          />
          <input
            className="otp-input-field"
            type="text"
            name="otp"
            id="otp"
            placeholder="0"
            required
            maxLength={1}
          />
          <input
            className="otp-input-field"
            type="text"
            name="otp"
            id="otp"
            placeholder="0"
            required
            maxLength={1}
          />
          <input
            className="otp-input-field"
            type="text"
            name="otp"
            id="otp"
            placeholder="0"
            required
            maxLength={1}
          />
          <input
            className="otp-input-field"
            type="text"
            name="otp"
            id="otp"
            placeholder="0"
            required
            maxLength={1}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="otp-form-container">
      <ScimicsLogo />
      <div className="otp-form-card-container">
        <div className="otp-form-card">
          <h1 className="otp-title">OTP Verification</h1>

          <form className="otp-form">
            {otpInputField()}
            <p className="note">Did n’t Receive code </p>
            <Link className="resend-link" to="/signup">
              Resend Code
            </Link>

            <button className="confirm-btn">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
