import React from "react";
import Address from "./Address";
import BankDetails from "./BankDetails";
import GeneralInformation from "./GeneralInformation";
import JobDetails from "./JobDetails";
import FormContainer from "./cardnav/FormContainer.css";
const StaffEntry = () => {
  return (
    <>
      <div className="container ">
        <div className="row g-2">
          <div className="col-lg-6 col-12 firstcont">
            <GeneralInformation />
            <BankDetails />
          </div>
          <div className="col-lg-6 col-12 secondcont">
            <Address />
            <JobDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffEntry;
