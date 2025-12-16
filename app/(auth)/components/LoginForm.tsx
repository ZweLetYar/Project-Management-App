"use client";

import Input from "../../components/input";
import Button from "@/app/components/Button";

function LoginForm() {
  return (
    <form action="" className="w-3/4 flex flex-col  justify-center space-y-8">
      <h1 className="text-xl text-[#f7e7ce] font-bold">Sign in to PMS TOG</h1>
      <div className="w-full">
        <Input type="email" placeholder="E-mail Address" />
      </div>
      <div className="w-full">
        <Input type="password" placeholder="Password" />
      </div>
      <Button variant="normal" type="submit" color="primary">
        Log In
      </Button>
    </form>
  );
}

export default LoginForm;
