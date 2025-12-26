import Image from "next/image";
import React from "react";

function navbar() {
  return (
    <div className="flex h-16 border-b border-b-gray-300  items-center justify-between">
      <div className="h-full w-[17%] bg-gray-50  ">
        <div className="flex space-x-5 items-center justify-center h-full">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <h1 className="text-xl font-bold text-secondary">
            PMS <span className="text-sky-400">TOG</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-full w-6/10 ">
        <div className="flex justify-between items-center border-r border-r-secondary w-full">
          <button className="flex border rounded-lg px-3 py-1 space-x-2 items-center ml-5 text-secondary">
            <Image src="plus.svg" alt="plus" width={20} height={20} />
            <div>Acme.Inc</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between h-full w-[23%]">
        <div className="flex  rounded-lg px-3 py-1 space-x-2 items-center ml-2 text-gray-600">
          <Image src="userprofile.svg" alt="plus" width={30} height={30} />
          <div>Zwe Let Yar</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <button className="flex border rounded-lg px-2 py-1  items-center mr-5 text-white bg-secondary">
          <div className="flex space-x-2 items-center mr-2 border-r border-r-gray-100 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>

            <div>Create</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default navbar;
