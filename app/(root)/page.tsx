import DonutChart from "../components/DonutChart";
import LineChart from "../components/LineChart";
import Project from "../components/Project";
const sampleChartData = [
  { x: "Mon", y: 12 },
  { x: "Tue", y: 18 },
  { x: "Wed", y: 14 },
  { x: "Thu", y: 22 },
  { x: "Fri", y: 20 },
  { x: "Sat", y: 26 },
  { x: "Sun", y: 24 },
];

const sampleChartData2 = [
  { x: "Mon", y: 6 },
  { x: "Tue", y: 9 },
  { x: "Wed", y: 11 },
  { x: "Thu", y: 16 },
  { x: "Fri", y: 14 },
  { x: "Sat", y: 19 },
  { x: "Sun", y: 22 },
];

const donutData = [
  { label: "Completed", value: 58, color: "#06b6d4" },
  { label: "In Progress", value: 28, color: "#f59e0b" },
  { label: "Blocked", value: 8, color: "#ef4444" },
  { label: "Planned", value: 6, color: "#10b981" },
];

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
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center ">
          <h2 className="text-lg font-medium">Projects</h2>
          <button className="border text-sm font-medium border-secondary rounded-md  px-3 py-1 hover:bg-secondary/10 transition text-secondary">
            View all projects
          </button>
        </div>
        <div className="flex flex-col  justify-between border border-gray-200 shadow-sm rounded-lg ">
          <Project
            color="red"
            name="Project Management System"
            date="3 Nov, 2025"
            status="Overdue"
            percent={75}
          />
          <Project
            color="blue"
            name="Dev Talk Forum"
            date="15 Oct, 2025"
            status="On Track"
            percent={60}
          />
          <Project
            color="green"
            name="Period Tracker App"
            date="10 Nov, 2025"
            status="Behind"
            percent={45}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 border border-gray-200 shadow-sm rounded-lg p-4 ">
        <h2 className="text-lg font-medium">Activity Summary</h2>
        <div className="flex gap-6 justify-evenly items-center ">
          <div className="flex flex-col items-center">
            <LineChart
              data={sampleChartData}
              width={250}
              height={140}
              color="#06b6d4"
              showArea
            />
            <div className="text-sm text-gray-500 mt-2">This week — Visits</div>
          </div>

          <div className="flex flex-col items-center">
            <LineChart
              data={sampleChartData2}
              width={250}
              height={140}
              color="#7c3aed"
              showArea
            />
            <div className="text-sm text-gray-500 mt-2">
              This week — Signups
            </div>
          </div>

          <div className="flex flex-col items-center">
            <DonutChart data={donutData} size={140} thickness={22} />
            <div className="text-sm text-gray-500 mt-2">Task Status</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
