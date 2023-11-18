import { Routes, Route } from "react-router-dom";
import SigninForm from "./components/SigninForm/SigninForm";
import SignupForm from "./components/SignupForm/SignupForm";
import OtpForm from "./components/OtpForm/OtpForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
        <Route path="/otp" element={<OtpForm />} />
      </Routes>
    </>
  );
}

export default App;
