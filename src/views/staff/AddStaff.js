import React from "react";
import Address from "./Address";
import BankDetails from "./BankDetails";
import GeneralInformation from "./GeneralInformation";
import JobDetails from "./JobDetails";

const AddStaff = () => {
  <>
    <div className="container bg-dark">
      <div className="row g-2">
        <div className="col-lg-6 col-12">
          <GeneralInformation />
          <BankDetails />
        </div>
        <div className="col-lg-6 col-12">
          <Address />
          <JobDetails />
        </div>
      </div>
    </div>
  </>;
};

export default AddStaff;
