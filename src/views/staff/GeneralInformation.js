import React, { useContext } from "react";
import { InputBox } from "./ReusableForm";
import CustomFormStyle from "./CustomFormStyle.css";
const GeneralInformation = () => {
  console.log("general info");
  return (
    <div className="generalinfo bg-light py-2">
      <h5 className="text-center form-head my-3">General Information</h5>
      <div className="container ">
        {/* first */}
        <div className="row ">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="StaffCode:"
              id="code"
              inptypes="text"
              rowTypes="double"
              labelclassname="col-md-6 col-lg-6"
              inpclassname="col-md-6 col-lg-6"
              values={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="Gender:"
              id="gender"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-md-6 col-lg-6 "
              inpclassname="col-md-6 col-lg-6 "
              selectOptionText={""}
              values={""}
            />
          </div>
        </div>
        {/* end first */}
        {/* second start */}
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="FirstName:"
              id="firstName"
              inptypes="text"
              rowTypes="double"
              labelclassname="col-md-6 col-lg-6"
              inpclassname="col-md-6 col-lg-6"
              values={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="LastName:"
              id="lastName"
              inptypes="text"
              rowTypes="double"
              labelclassname="col-12 col-md-6 col-lg-6 "
              inpclassname="col-12 col-md-6 col-lg-6 "
              values={""}
            />
          </div>
        </div>
        {/* third end */}
        {/* father details */}
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="FatherFirstName:"
              id="ffirstName"
              inptypes="text"
              rowTypes="double"
              labelclassname="col-12 col-md-6 col-lg-6"
              inpclassname="col-12 col-md-6 col-lg-6"
              values={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="FatherLastName:"
              id="flastName"
              inptypes="text"
              rowTypes="double"
              labelclassname="col-12 col-md-6 col-lg-6"
              inpclassname="col-12 col-md-6 col-lg-6"
              values={""}
            />
          </div>
        </div>

        {/* father details end */}
        {/* marital and blood group */}
        <div className="row ">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="MaritalStatus:"
              id="maritalStatusId"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-12 col-md-6 col-lg-6"
              inpclassname="col-12 col-md-6 col-lg-6"
              selectOptionText={""}
              values={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="BloodGroup:"
              id="bloodGroup"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-12 col-md-6 col-lg-6"
              inpclassname="col-12 col-md-6 col-lg-6"
              // selectOptionText={["A+", "A-", "O+", "O-", "B+", "B-"]}
              // values={inpValue.bloodGroup}
              disable={false}
            />
          </div>
        </div>
        {/* marital and blood end */}
        {/* dob and citizenno */}
        <div className="row ">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="DOB:"
              id="dob"
              inptypes="date"
              rowTypes="double"
              labelclassname="col-12 col-md-6 col-lg-6"
              inpclassname="col-12 col-md-6 col-lg-6"
              values={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="CitizenShipNo"
              id="citizenShipNo"
              inptypes="text"
              rowTypes="double"
              labelclassname="col-12 col-md-6 col-lg-6 "
              inpclassname="col-12 col-md-6 col-lg-6 "
              values={""}
            />
          </div>
        </div>

        <div className="row ">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="Ctzn issue Date"
              id="cissueDate"
              inptypes="date"
              rowTypes="double"
              labelclassname="col-12 col-md-6 col-lg-6 "
              inpclassname="col-12 col-md-6 col-lg-6 "
              values={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="Ctzn district:"
              id="cdistrict"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-12 col-md-6 col-lg-6 "
              inpclassname="col-12 col-md-6 col-lg-6 "
              selectOptionText={""}
              values={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
