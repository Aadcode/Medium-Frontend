import Appbar from "../Components/Appbar";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URl } from "../config";
import { useNavigate } from "react-router-dom";
const publish = () => {
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center w-full h-full ">
        <div className="px-200 flex flex-col justify-center">
          <div className="pt-6 pb-4">
            <textarea
              onChange={(e) => {
                settitle(e.target.value);
              }}
              className="w-screen max-w-2xl focus:outline-none font-semibold  p-2.5   text-3xl text-gray-900  rounded-lg  dark:placeholder-gray-400 dark:text-black"
              placeholder="Title .. "
            ></textarea>
          </div>
          <div>
            <textarea
              onChange={(e) => {
                setdescription(e.target.value);
              }}
              className="pb-20 w-screen max-w-2xl  focus:outline-none font-semibold  p-2.5  text-xl text-gray-900  rounded-lg  dark:placeholder-gray-400 dark:text-black "
              placeholder="Tell Your Story ... "
            ></textarea>
          </div>
          <div>
            <button
              onClick={async () => {
                const res = await axios.post(
                  `${BACKEND_URl}/api/v1/blog`,
                  {
                    title,
                    description,
                    published: true,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("Token"),
                    },
                  }
                );

                navigate(`/Blog/${res.data.id}`);
              }}
              type="button"
              className="ml-2 mt-5 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className=" font-extralight text-sm text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

export default publish;
