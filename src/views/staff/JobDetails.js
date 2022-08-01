import React, { useContext, useRef } from "react";
import { InputBox } from "./ReusableForm";
import { StaffEntryContext } from "./StaffEntry";
const JobDetails = () => {
  return (
    <fieldset className="border p-1 mt-1">
      <legend className="float-none w-auto mb-0">Job Details</legend>
      <div className="jobdetails bg-light py-2">
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
                inptypes="text"
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
    </fieldset>
  );
};

export default JobDetails;
