import Image from "next/image";

import ProgressBar from "./ProgressBar";

const colorMap: Record<string, string> = {
  blue: "bg-blue-400",
  red: "bg-red-400",
  green: "bg-green-400",
  yellow: "bg-yellow-400",
};

function Project({
  color,
  name,
  date,
  status,
  percent,
}: {
  color: string;
  name: string;
  date: string;
  status: string;
  percent: number;
}) {
  return (
    <div className=" flex items-center justify-start m-3 gap-2 ">
      <div
        className={`w-7 h-7 flex items-center justify-center rounded-full ${colorMap[color]}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
      </div>
      <div className="flex flex-col min-w-[40%]">
        <h1 className="font-semibold">{name}</h1>
        <p className="text-sm text-gray-500">started at {date}</p>
      </div>
      <div
        className={`min-w-[10%] rounded-full text-sm ${colorMap[color]} text-white px-5 py-1 ml-auto `}
      >
        {status}
      </div>
      <div className="min-w-[20%] ">
        <ProgressBar value={percent} color={color} />
      </div>

      <div className="relative  min-w-[15%] h-7  ms-2">
        <div className="absolute top-0 left-0 flex items-center">
          <div className="flex -space-x-3">
            <Image src="userprofile.svg" alt="plus" width={30} height={30} />
            <Image src="userprofile2.svg" alt="plus" width={30} height={30} />
            <Image src="userprofile.svg" alt="plus" width={30} height={30} />
            <Image src="userprofile2.svg" alt="plus" width={30} height={30} />
          </div>
          <div className="ml-2 text-sm text-gray-500">+3</div>
        </div>
      </div>
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
          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </div>
  );
}

export default Project;
