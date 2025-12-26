import Image from "next/image";
import React from "react";

function RightSidebar() {
  return (
    <div className="w-[23%] h-screen ">
      <div className="flex flex-col justify-start mt-5 mr-5 gap-5">
        {/* search bar */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {/* Search icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>
          </span>

          <input
            type="text"
            placeholder="Search Projects..."
            className="rounded-2xl border-2 border-secondary pl-11 pr-12 py-2 w-full"
          />

          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label="Start voice search"
          >
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
                d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
              />
            </svg>
          </button>
        </div>
        {/* teams overview */}
        <div className="border border-gray-300 rounded-xl p-3">
          <h2 className="font-semibold mb-3">Teams Overview</h2>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 rounded-full p-2">
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
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <div className="font-medium truncate">Frontend Team</div>
                  <div className="text-sm text-gray-500">15 members</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center bg-gray-200 text-sm rounded-full">
                  5
                </span>
                <span className="text-sm text-gray-500 w-10">10</span>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 rounded-full p-2">
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
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <div className="font-medium truncate">Backend Team</div>
                  <div className="text-sm text-gray-500">7 members</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center bg-gray-200 text-sm rounded-full">
                  3
                </span>
                <span className="text-sm text-gray-500 w-10">4</span>
              </div>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 rounded-full p-2">
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
                      d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <div className="font-medium truncate">Design Team</div>
                  <div className="text-sm text-gray-500">8 members</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center bg-gray-200 text-sm rounded-full">
                  2
                </span>
                <span className="text-sm text-gray-500 w-10">6</span>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 rounded-full p-2">
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
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <div className="font-medium truncate">QA Team</div>
                  <div className="text-sm text-gray-500">5 members</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center bg-gray-200 text-sm rounded-full">
                  4
                </span>
                <span className="text-sm text-gray-500 w-10">1</span>
              </div>
            </li>
          </ul>
        </div>
        {/* upcoming deadlines */}
        <div className="border border-gray-300 rounded-xl p-3">
          <div className="flex justify-between">
            <h2 className="font-semibold mb-3">Upcoming Deadlines</h2>
            <div className="bg-gray-100 rounded-full p-1 cursor-pointer h-4 flex items-center justify-center">
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
          </div>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-pink-200 rounded-md p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-green-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <div className="font-medium truncate">
                    E-commerce Backend API
                  </div>
                  <div className="text-sm text-gray-500">Due Tomorrow</div>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-green-200 rounded-md p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-pink-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <div className="font-medium truncate">CRM Dashboard UI</div>
                  <div className="text-sm text-gray-500">Due Jan 5, 2026</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* Notifications */}
        <div className="border border-gray-300 rounded-xl p-3">
          <div className="flex justify-between">
            <h2 className="font-semibold mb-3">Notifications</h2>
            <div className="bg-primary rounded-full p-1 cursor-pointer  flex items-center justify-center">
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
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
            </div>
          </div>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="userprofile2.svg"
                  alt="plus"
                  width={30}
                  height={30}
                />

                <div className="min-w-0">
                  <div className="font-medium truncate">
                    Chan Myae Hnin finish...
                  </div>
                  <div className="text-sm text-gray-500">3 days before Due</div>
                </div>
              </div>
              <p className="text-xs text-gray-500">Dec 22</p>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="userprofile2.svg"
                  alt="plus"
                  width={30}
                  height={30}
                />

                <div className="min-w-0">
                  <div className="font-medium truncate">
                    Tone Tone finish...
                  </div>
                  <div className="text-sm text-gray-500">1 days after Due</div>
                </div>
              </div>
              <p className="text-xs text-gray-500">Dec 24</p>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="userprofile2.svg"
                  alt="plus"
                  width={30}
                  height={30}
                />

                <div className="min-w-0">
                  <div className="font-medium truncate">
                    Vp remind you to...
                  </div>
                  <div className="text-sm text-gray-500">2 days after Due</div>
                </div>
              </div>
              <p className="text-xs text-gray-500">Dec 25</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
