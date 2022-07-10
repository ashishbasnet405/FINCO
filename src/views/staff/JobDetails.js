import React, { useContext } from "react";
import { InputBox } from "./ReusableForm";
import { FormContext } from "src/views/staff/Staff";
const JobDetails = () => {
  const {
    inpValue,
    handleChanges: handleChange,
    jobStatus,
    officeList,
  } = useContext(FormContext);

  const extractJobStatus = jobStatus.map((element) => {
    const { JobStatusID: id, Description: name } = element;
    return { id, name };
  });

  const extractOfficeList = officeList.map((element) => {
    const { Id: id, Name: name } = element;
    return { id, name };
  });

  return (
    <div className="jobdetails bg-light py-2 mt-2">
      <h5 className="text-center form-head my-3">Job Details</h5>
      <div className="container">
        {/*  */}
        <div className="row ">
          <div className="col-12 col-sm-7">
            <InputBox
              handleChange={handleChange}
              label="Join Date:"
              id="joindate"
              inptypes="date"
              rowTypes="double"
              labelclassname="col-md-5 col-lg-5 "
              inpclassname="col-md-7 col-lg-7"
              values={inpValue.joindate}
            />
          </div>
          <div className="col-12 col-sm-5">
            <InputBox
              handleChange={handleChange}
              label="Grade:"
              id="grade"
              inptypes="number"
              rowTypes="double"
              labelclassname="col-md-5 col-lg-5 "
              inpclassname="col-md-7 col-lg-7 "
              values={inpValue.grade}
            />
          </div>
        </div>
        {/*  */}
        <div className="row  mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="JobStatus:"
            id="jobstatus"
            inptypes="selectwithid"
            rowTypes="single"
            labelclassname="col-12 col-sm-2 col-md-3 "
            inpclassname="col-12 col-sm-10 col-md-9"
            selectOptionText={extractJobStatus}
            values={inpValue.jobstatus}
            disable={false}
          />
        </div>
        <div className="row  mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="Position:"
            id="position"
            inptypes="selectwithid"
            rowTypes="single"
            labelclassname="col-12 col-sm-2 col-md-3 "
            inpclassname="col-12 col-sm-10 col-md-9"
            selectOptionText={""}
            values={inpValue.position}
            disable={true}
          />
        </div>
        <div className="row mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="Office:"
            id="office"
            inptypes="selectwithid"
            rowTypes="single"
            labelclassname="col-12 col-sm-2 col-md-3 "
            inpclassname="col-12 col-sm-10 col-md-9"
            selectOptionText={extractOfficeList}
            values={inpValue.office}
            disable={false}
          />
        </div>
        <div className="row mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="Department:"
            id="department"
            inptypes="selectwithid"
            rowTypes="single"
            labelclassname="col-12 col-sm-2 col-md-3"
            inpclassname="col-12 col-sm-10 col-md-9"
            selectOptionText={""}
            values={inpValue.jobtype}
            disable={true}
          />
        </div>
        <div className="row mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="Group:"
            id="group"
            inptypes="selectwithid"
            rowTypes="single"
            labelclassname="col-12 col-sm-2 col-md-3"
            inpclassname="col-12 col-sm-10 col-md-9"
            selectOptionText={""}
            values={inpValue.group}
            disable={true}
          />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
