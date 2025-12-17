import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import LoginForm from "../components/LoginForm";
import AuthForm from "../components/AuthForm";
import RegisterForm from "../components/RegisterForm";

function page() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-primary  flex justify-center items-center gap-10 flex-col p-20">
        <Image src="/bannersticker.png" width={400} height={400} alt="logo" />
        <div className="flex space-x-5 items-center">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
          <h1 className="text-6xl font-bold text-[#77a8a8]">
            PMS <span className="text-sky-400">TOG</span>
          </h1>
        </div>

        <p className="w-5/6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="w-5/6">
          <Button color="primary">Login</Button>
        </div>
      </div>
      <div className=" bg-secondary flex flex-col gap-4 items-center justify-center w-1/2  text-lg ">
        <RegisterForm />
        <AuthForm />
      </div>
    </div>
  );
}

export default page;
