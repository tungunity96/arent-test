import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { CiUser, CiLock } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const setIsLoggedIn = useUserStore((state) => state.setIsLoggedIn);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = document.forms[0];
    console.log("username", username);
    const defaultUsername = process.env.REACT_APP_USERNAME;
    const defaultPassword = process.env.REACT_APP_PASSWORD;

    if (!username.value || username.value.trim() === "") {
      setErrorMessage("Invalid Username!");
    } else if (!password.value || password.value.trim() === "") {
      setErrorMessage("Invalid Password!");
    } else if (
      username.value !== defaultUsername ||
      password.value !== defaultPassword
    ) {
      setErrorMessage("Username or Password is invalid!");
    } else {
      setIsLoggedIn(true);
      navigate("/");
    }
  };

  const renderErrorMessage = errorMessage && (
    <div className="text-red-500 text-center">{errorMessage}</div>
  );

  return (
    <div className="h-screen w-screen bg-gradient-to-r to-primary-400 from-primary-300 flex flex-col justify-center">
      <div className="w-[360px] shadow-xl bg-light mx-auto rounded-xl p-6">
        <div className="text-center font-bold text-2xl mb-4">Login</div>
        <Divider />
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="font-semibold mb-2">Username</div>
            <TextField
              id="username"
              variant="outlined"
              placeholder="Type Your Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CiUser />
                  </InputAdornment>
                ),
              }}
              size="small"
              fullWidth
              required
            />
          </div>

          <div className="mb-4">
            <div className="font-semibold mb-2">Password</div>
            <TextField
              id="password"
              variant="outlined"
              placeholder="Type Your Password"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CiLock />
                  </InputAdornment>
                ),
              }}
              size="small"
              fullWidth
              required
            />
          </div>

          {renderErrorMessage}

          <div className="bg-gradient-to-r to-primary-400 from-primary-300 w-[224px] h-[38px] rounded-md flex justify-center items-center mx-auto mt-6 cursor-pointer">
            <button type="submit">
              <div className="text-light">Sign In</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
