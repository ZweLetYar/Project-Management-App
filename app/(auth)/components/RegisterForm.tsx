"use client";

import Input from "../../components/input";
import Button from "@/app/components/Button";

function RegisterForm() {
  return (
    <form action="" className="w-3/4 flex flex-col  justify-center space-y-5">
      <h1 className="text-xl font-bold">Register PMS TOG</h1>
      <div className="w-full">
        <Input type="text" placeholder="Name" />
      </div>
      <div className="w-full">
        <Input type="text" placeholder="Username" />
      </div>
      <div className="w-full">
        <Input type="email" placeholder="E-mail Address" />
      </div>
      <div className="w-full">
        <Input type="password" placeholder="Password" />
      </div>
      <Button color="primary" type="submit">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
