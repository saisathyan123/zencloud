import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import axios from "axios";
import img from "../assets/images/wesley-tingey-rtS8Fpb3rcI-unsplash.jpg";
import Navbar from "../components/Navbar";
import { UserContext } from "../components/Context/UserContext";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          email: email,
          password: password,
        }
      );
      let role = "USER";
      if (email == "sai@zencloud.com") {
        role = "ADMIN";
      }
      await setUser({
        email,
        password,
        token: response.data.token,
        role,
        id: response.data.id,
      });
      if (email == "sai@zencloud.com") {
        navigate("/dashboard/admin");
      } else {
        navigate("/dashboard/user");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-center">
        <div className="form-container">
          <div>
            <img src={img} alt="" />
          </div>
          <form onSubmit={handleSignUp} className="loginp">
            <center>
              <h1>Login</h1>
            </center>
            <br />
            <div>
              <label>
                Email:
                <br />
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Password:
                <br />
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </label>
            </div>
            <div>
              <br />
              <center>
                <button type="submit" className="loginbut">
                  Sign in
                </button>
              </center>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
