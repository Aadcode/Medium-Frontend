import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { searchState } from "../state";

const Appbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setsearch = useSetRecoilState(searchState);

  const showSearch = location.pathname === "/Blogs";

  return (
    <div className="border-b border-gray-200 px-10 py-4 flex justify-between">
      <div className="flex w-full justify-between">
        <div>
          <Link to={"/Blogs"}>
            <div className="px-4 font-style:italic text-2xl font-semibold cursor-pointer">
              Medium
            </div>
          </Link>
        </div>
        {showSearch && (
          <div className="w-full">
            <input
              type="search"
              className=" mx-4 w-full max-w-lg focus outline-none p-2 text-md text-gray-900 border rounded-lg bg-slate-50"
              placeholder="Search Keywords"
              required
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
          </div>
        )}
      </div>
      <div className="flex justify-between w-sm">
        <div>
          <button
            onClick={() => {
              navigate("/Publish");
            }}
            className="mr-10 text-white bg-green-500 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 dark:hover:bg-green-400"
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
      <span className="font-extralight text-sm text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

export default Appbar;
