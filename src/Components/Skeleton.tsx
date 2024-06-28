const Skeleton = () => {
  return (
    <div className="flex justify-center">
      <div>
        <div className="border-b border-grey-200 pb-4 m-5 w-screen max-w-xl cursor-pointer">
          <div className="flex justify-left py-4  ">
            <div className="flex justify-center flex-col">
              <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          <div className="pt-2 text-xl  font-thin">
            <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
          </div>
          <div className="pt-2 text-gray-500 font-thin">
            <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
