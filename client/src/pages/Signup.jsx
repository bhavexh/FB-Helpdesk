import { useState } from "react";
import { BottomWarning } from "../components/bottomWarning";
import { Button } from "../components/button ";
import { Heading } from "../components/heading";
import { InputBox } from "../components/inputBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  const isValidUsername = function (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidPassword = function (password) {
    const passwordRegex = /^.{6,}$/;
    return passwordRegex.test(password);
  };
  const isValidFirstName = function (name) {
    return name.length >= 3;
  };

  const signupHandler = async () => {
    if (!isValidFirstName(name)) {
      setError("First name must be at least 3 characters long");
      return;
    }
    if (!isValidUsername(email)) {
      setError("username must be in email format");
      return;
    }
    if (!isValidPassword(password)) {
      setError("password must be at least 6 characters long");
      return;
    }
    setIsLoading(true);
    try {
        console.log({name,email,password});
      await axios.post("http://localhost:3000/api/users/signup", {
        name,
        email,
        password,
      });
      console.log("User created successfully");
      navigate("/signin");
    } catch (error) {
      console.error("Sign-up error:", error);
      setError("Email already exists. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 p-2 h-max px-4">
          <Heading label={"Sign Up"} />
         
          <InputBox
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
            label={"Name"}
          />

          <InputBox
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="min 6 characters"
            label={"Password"}
          />
          {error && (
            <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
          )}
          <div className="pt-4">
            <Button
              onClick={signupHandler}
              label={"Sign Up"}
              disable={isLoading}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}
