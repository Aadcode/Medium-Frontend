import { Link } from "react-router-dom";

interface BlogcardProps {
  id: string;
  authorName: string;
  title: string;
  description: string;
  publisheddate: string;
}
const Blogcard = ({
  id,
  authorName,
  title,
  description,
  publisheddate,
}: BlogcardProps) => {
  return (
    <Link to={`/Blog/${id}`}>
      <div className="border-b border-grey-200 pb-4 m-5 w-screen max-w-xl cursor-pointer">
        <div className="flex justify-left py-4  ">
          <div className="flex justify-center flex-col">
            <Avatar name={authorName}></Avatar>
          </div>
          <div className="font-normal pl-3">{authorName}</div>
          <div className="pl-3 text-gray-500">{publisheddate}</div>
        </div>
        <div className="font-bold text-2xl">{title}</div>
        <div className="pt-2 text-xl  font-thin">
          {description.slice(0, 100) + "..."}
        </div>
        <div className="pt-2 text-gray-500 font-thin">{`${Math.ceil(
          description.length / 100
        )} min read`}</div>
      </div>
    </Link>
  );
};

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className=" font-extralight text-sm text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

export default Blogcard;
