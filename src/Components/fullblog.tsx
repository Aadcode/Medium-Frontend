import Appbar from "./Appbar";
import { Blog } from "../hooks/index";

const Fullblog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar></Appbar>
      <div className="grid grid-cols-12  px-10 w-screen max-w-screen-xl">
        <div className="col-span-8 flex flex-col p-5">
          <div className="text-3xl font-bold pb-2">{blog.title}</div>
          <div className="text-sm text-gray-500 pb-3">
            Post on August 24 , 2024
          </div>
          <div>{blog.description}</div>
        </div>
        <div className="col-span-4 p-5">
          <div className="text-sm font-extralight">Author</div>
          <div className="flex">
            <div className="pt-7 pr-4 ">
              <Avatar></Avatar>
            </div>
            <div className="p-3">
              <div className="text-lg font-semibold">{blog.author.name}</div>
              <div className="text-gray-400 font-extralight">
                Master of mirth Lorem ipsum dolor sit amet. Lorem ipsum dolor,
                sit amet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Avatar() {
  return (
    <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-300">
      <span className=" font-extralight text-sm text-gray-600 dark:text-gray-300"></span>
    </div>
  );
}
export default Fullblog;
