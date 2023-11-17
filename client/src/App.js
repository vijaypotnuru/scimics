import { Routes, Route } from "react-router-dom";
import SigninForm from "./components/SigninForm/SigninForm";
import SignupForm from "./components/SignupForm/SignupForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
      </Routes>
    </>
  );
}

export default App;
