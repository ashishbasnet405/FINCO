import React, { createContext } from "react";
import GeneralInformation from "./GeneralInformation";
import Address from "./Address";
import BankDetails from "./BankDetails";
import JobDetails from "./JobDetails";

const AddStaff = () => {
  return (
    <div className="container bg-dark">
      <div className="row g-2">
        <div className="col-lg-6 col-12">
          {/* general info start */}
          <GeneralInformation />
          <BankDetails />
          {/* general info */}
        </div>
        <div className="col-lg-6 col-12">
          <Address />
          <JobDetails />
        </div>
        {/* </div>
      <div className="row"> */}
        {/* <div className="col-lg-6 col-12"> */}

        {/* </div> */}
      </div>
    </div>
  );
};

export default AddStaff;
