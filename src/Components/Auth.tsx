import { Link, useNavigate } from "react-router-dom";
import Labeled from "./Labeled";
import { useState } from "react";
import axios from "axios";
import { signuptype } from "@aadarsh_jain/medium-zod-common";
import { BACKEND_URl } from "../config";

const Auth = ({ type }: { type: "Signin" | "Signup" }) => {
  const navigate = useNavigate();
  const [PostInputs, setPostInputs] = useState<signuptype>({
    email: "",
    name: "",
    password: "",
  });

  async function sendrequest() {
    try {
      const res = await axios.post(
        `${BACKEND_URl}/api/v1/user/${type === "Signin" ? "signin" : "signup"}`,
        PostInputs
      );
      const jwt = res.data.jwt;
      localStorage.setItem("Token", jwt);
      navigate("/Blogs");
    } catch {
      alert("Request failed");
    }
  }
  // } else {
  //   async function sendrequest() {
  //     await axios.post(`${BACKEND_URL}/user/Signup`);
  //   }
  // }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className=" max-w-md text-3xl text-center font-semibold ">
              {type === "Signin" ? "SignIn Medium" : "Create an Account"}
            </div>
            <div className="text-center text-slate-400 p-3">
              {type === "Signin"
                ? "Don't have an Account ?"
                : "Already have an Account ?"}
              <Link
                className="text-slate-500 pl-2 underline"
                to={type === "Signin" ? "/signup" : "/signin"}
              >
                {type === "Signin" ? "Creat Account" : "Login"}
              </Link>
            </div>
          </div>
          <div>
            <Labeled
              label="Email"
              placeholder="xyz@gmail.com"
              onChange={(e) => {
                setPostInputs({
                  ...PostInputs,
                  email: e.target.value,
                });
              }}
            ></Labeled>
            {type === "Signup" ? (
              <Labeled
                label="Name"
                placeholder="Aadarsh Jain"
                onChange={(e) => {
                  setPostInputs({
                    ...PostInputs,
                    name: e.target.value,
                  });
                }}
              ></Labeled>
            ) : null}

            <Labeled
              label="Password"
              placeholder="password"
              type="password"
              onChange={(e) => {
                setPostInputs({
                  ...PostInputs,
                  password: e.target.value,
                });
              }}
            ></Labeled>
            <button
              onClick={sendrequest}
              type="button"
              className="  mt-7 w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-l px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              {type}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
