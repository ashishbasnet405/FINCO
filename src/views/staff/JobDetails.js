import React, { useContext, useEffect, useState } from "react";
import {
  extractDate,
  extractDepartmentList,
  extractGroupList,
  extractJobList,
  extractJobStatus,
  extractOfficeList,
  extractPositionList,
} from "src/globalfun/ExtractInput";
import { getReference } from "src/globalfun/function";
import { InputBox } from "./ReusableForm";
import { StaffEntryContext } from "./StaffEntry";
const JobDetails = () => {
  const {
    inpValue: initialState,
    staffForm,
    handleChange,
    reference,
    officeList,
  } = useContext(StaffEntryContext);
  let { inpValue, tempstaffForm } = useContext(StaffEntryContext);

  const positionList = reference.staffPositionList
    ? extractPositionList(reference.staffPositionList)
    : "";
  const jobStatus = reference.staffPositionList
    ? extractJobStatus(reference.jobStatusList)
    : "";
  const office = extractOfficeList(officeList);
  const departmentList = reference.departmentList
    ? extractDepartmentList(reference.departmentList)
    : "";
  const groupList = reference.staffGroupList
    ? extractGroupList(reference.staffGroupList)
    : "";
  const jobTypeList = reference.jobTypeList
    ? extractJobList(reference.jobTypeList)
    : "";
  if (tempstaffForm.form) {
    inpValue = { ...initialState, ...tempstaffForm.form };
  }
  return (
    <fieldset className="border p-1 mt-1">
      <legend className="float-none w-auto mb-0">Job Details</legend>
      <div className="jobdetails bg-light py-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="Join Date:"
                id="joinDate"
                inptypes="date"
                rowTypes="double"
                labelclassname="col-xl-5"
                inpclassname="col-xl-7"
                values={extractDate(inpValue.joinDate)}
                disable={staffForm.form ? true : false}
              />
            </div>
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="Grade:"
                id="grade"
                inptypes="text"
                rowTypes="double"
                labelclassname="col-xl-5 "
                inpclassname="col-xl-7 "
                values={inpValue.grade}
                disable={staffForm.form ? true : false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="JobStatus:"
                id="statusId"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-xl-5"
                inpclassname="col-xl-7"
                selectOptionText={jobStatus}
                values={inpValue.statusId}
                disable={staffForm.form ? true : false}
              />
            </div>
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="Position:"
                id="positionId"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-xl-5"
                inpclassname="col-xl-7"
                selectOptionText={positionList}
                values={inpValue.positionId}
                disable={staffForm.form ? true : false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="Office:"
                id="officeId"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-xl-5"
                inpclassname="col-xl-7"
                selectOptionText={office}
                values={inpValue.officeId}
                disable={staffForm.form ? true : false}
              />
            </div>
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="Department:"
                id="departmentId"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-xl-5"
                inpclassname="col-xl-7"
                selectOptionText={departmentList}
                values={inpValue.departmentId}
                disable={staffForm.form ? true : false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="Group:"
                id="groupId"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-xl-5"
                inpclassname="col-xl-7"
                selectOptionText={groupList}
                values={inpValue.groupId}
                disable={staffForm.form ? true : false}
              />
            </div>
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="JobType:"
                id="jobTypeId"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-xl-5"
                inpclassname="col-xl-7"
                selectOptionText={jobTypeList}
                values={inpValue.jobTypeId}
                disable={staffForm.form ? true : false}
              />
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default JobDetails;
