import React from "react";

function page() {
  return (
    <div className="flex flex-col m-5 gap-5">
      <h1 className="text-xl font-semibold">Welcome Back, Zwe Let Yar 👋 </h1>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center ">
          <h2 className="text-lg font-medium">Overview</h2>
          <button className="border border-secondary rounded-md flex items-center justify-center gap-2 px-3 py-1 hover:bg-secondary/10 transition text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
            <p className="text-sm font-medium">New Project</p>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[24%] h-25 border border-gray-200 shadow-sm rounded-lg  flex flex-col items-center justify-center gap-4 ">
            <div className="flex justify-start items-center w-[80%]">
              <div className="bg-green-200 h-10 w-10 rounded-md flex items-center justify-center mr-3">
                <p className="text-xl font-bold text-green-500">5</p>
              </div>
              <p className="texl-md font-semibold leading-tight max-w-[60%] ">
                Active Projects
              </p>
            </div>
            <div className="w-[80%] h-2 rounded-full bg-green-300"></div>
          </div>
          <div className="w-[24%] h-25 border border-gray-200 shadow-sm rounded-lg  flex flex-col items-center justify-center gap-4 ">
            <div className="flex justify-start items-center w-[80%]">
              <div className="bg-blue-200 h-10 w-10 rounded-md flex items-center justify-center mr-3">
                <p className="text-xl font-bold text-blue-500">24</p>
              </div>
              <p className="texl-md font-semibold leading-tight max-w-[60%] ">
                Tasks in Progress
              </p>
            </div>
            <div className="w-[80%] h-2 rounded-full bg-blue-300"></div>
          </div>
          <div className="w-[24%] h-25 border border-gray-200 shadow-sm rounded-lg  flex flex-col items-center justify-center gap-4 ">
            <div className="flex justify-start items-center w-[80%]">
              <div className="bg-orange-200 h-10 w-10 rounded-md flex items-center justify-center mr-3">
                <p className="text-xl font-bold text-orange-500">3</p>
              </div>
              <p className="texl-md font-semibold leading-tight max-w-[60%] ">
                Upcoming Deadlines
              </p>
            </div>
            <div className="w-[80%] h-2 rounded-full bg-orange-300"></div>
          </div>
          <div className="w-[24%] h-25 border border-gray-200 shadow-sm rounded-lg  flex flex-col items-center justify-center gap-4 ">
            <div className="flex justify-start items-center w-[80%]">
              <div className="bg-red-200 h-10 w-10 rounded-md flex items-center justify-center mr-3">
                <p className="text-xl font-bold text-red-500">7</p>
              </div>
              <p className="texl-md font-semibold leading-tight max-w-[60%] ">
                Pending Reviews
              </p>
            </div>
            <div className="w-[80%] h-2 rounded-full bg-red-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
