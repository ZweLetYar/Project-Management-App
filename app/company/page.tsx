import Input from "../components/input";
import Image from "next/image";

import CompanyForm from "../components/CompanyForm";

function page() {
  return (
    <div className="flex h-screen w-full">
      <div className=" flex flex-col items-center justify-center bg-secondary w-[30%]">
        <h1 className="text-primary text-2xl font-bold">Find Your Company</h1>
        <div className="w-3/4 mt-8">
          <Input type="email" placeholder="Enter Company ID" />
        </div>
        <Image
          src="/bannersticker.png"
          width={300}
          height={300}
          alt="logo"
          className="mt-10"
        />
      </div>
      <div className="bg-primary w-[70%] flex items-center justify-center">
        <CompanyForm />
      </div>
    </div>
  );
}

export default page;
