import React from "react";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <main className="w-3/5">{children}</main>
        <RightSidebar />
      </div>
    </div>
  );
}

export default layout;
