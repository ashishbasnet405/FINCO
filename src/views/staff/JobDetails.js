import React, { useContext } from "react";
import { InputBox } from "./ReusableForm";

const JobDetails = () => {
  return (
    <div className="jobdetails bg-light py-2 py-lg-1 py-xl-2 mt-2">
      <h5 className="text-center form-head my-3 my-lg-1 my-xl-3">
        Job Details
      </h5>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="Join Date:"
              id="joinDate"
              inptypes="date"
              rowTypes="double"
              labelclassname="col-xl-5"
              inpclassname="col-xl-7"
              values={""}
              disable={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="Grade:"
              id="grade"
              inptypes="number"
              rowTypes="double"
              labelclassname="col-xl-5 "
              inpclassname="col-xl-7 "
              values={""}
              disable={""}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="JobStatus:"
              id="JobStatusID"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-xl-5"
              inpclassname="col-xl-7"
              selectOptionText={""}
              values={""}
              disable={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="Position:"
              id="positionId"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-xl-5"
              inpclassname="col-xl-7"
              selectOptionText={""}
              values={""}
              disable={""}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="Office:"
              id="officeId"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-xl-5"
              inpclassname="col-xl-7"
              selectOptionText={""}
              values={""}
              disable={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="Department:"
              id="jobTypeId"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-xl-5"
              inpclassname="col-xl-7"
              selectOptionText={""}
              values={""}
              disable={""}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="Group:"
              id="group"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-xl-5"
              inpclassname="col-xl-7"
              selectOptionText={""}
              values={""}
              disable={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="JobType:"
              id="jobtype"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-xl-5"
              inpclassname="col-xl-7"
              selectOptionText={""}
              values={""}
              disable={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
