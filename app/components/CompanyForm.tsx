"use client";

import Input from "../components/input";
import Button from "@/app/components/Button";

function CompanyForm() {
  return (
    <form action="" className="w-3/4 flex flex-col  justify-center space-y-5">
      <h1 className="text-xl font-bold text-secondary ">
        Create a Company or Organization
      </h1>
      <div className="w-full">
        <Input type="text" placeholder="Company Name" />
      </div>
      <div className="w-full">
        <Input type="text" placeholder="Company Address" />
      </div>
      <div className="w-full">
        <Input
          type="text"
          placeholder="What kind of company is this?(eg.software,marketing)"
        />
      </div>
      <div className="w-full">
        <Input type="text" placeholder="Company Owner ID (CEO)" />
      </div>
      <Button color="primary" type="submit">
        Create
      </Button>
    </form>
  );
}

export default CompanyForm;
