import { Link, useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div className="border-b border-gray-200 px-10 py-4 flex justify-between">
      <Link to={"/Blogs"}>
        <div className="text-2xl font-semibold cursor-pointer">Medium</div>
      </Link>
      <div className="flex justify-between w-sm ">
        <div>
          <button
            onClick={() => {
              navigate("/Publish");
            }}
            className="mr-10 text-white bg-green-500  font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 dark:hover:bg-green-400 "
          >
            Publish
          </button>
        </div>
        <div>
          <Avatar name={"Aadarsh"}></Avatar>
        </div>
      </div>
    </div>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className=" font-extralight text-sm text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

export default Appbar;
