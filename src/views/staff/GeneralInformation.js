import React, { useContext } from "react";
import { InputBox } from "./ReusableForm";
import { District } from "./District";
import { FormContext } from "src/views/staff/Staff";
const GeneralInformation = () => {
  const { inpValue, handleChanges: handleChange } = useContext(FormContext);
  console.log(inpValue);
  return (
    <div className="generalinfo bg-light py-2">
      <h5 className="text-center form-head my-3">General Information</h5>
      <div className="container ">
        {/* first */}
        <div className="row ">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={handleChange}
              label="StaffCode:"
              id="staffcode"
              inptypes="text"
              rowTypes="double"
              labelclassname="col-md-6 col-lg-5 "
              inpclassname="col-md-6 col-lg-7 "
              values={inpValue.staffcode}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={handleChange}
              label="Gender:"
              id="gender"
              inptypes="select"
              rowTypes="double"
              labelclassname="col-md-5 col-lg-4 "
              inpclassname="col-md-7 col-lg-8 "
              selectOptionText={["Male", "Female"]}
              values={inpValue.gender}
            />
          </div>
        </div>
        {/* end first */}
        {/* second start */}
        <div className="row  mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="FirstName:"
            id="fname"
            inptypes="text"
            rowTypes="single"
            labelclassname="col-12 col-sm-4 col-md-2 "
            inpclassname="col-12 col-sm-8 col-md-10"
            values={inpValue.fname}
          />
        </div>
        {/* second end */}
        {/* third start */}
        <div className="row  mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="LastName:"
            id="lname"
            inptypes="text"
            rowTypes="single"
            labelclassname="col-12 col-sm-4 col-md-2 "
            inpclassname="col-12 col-sm-8 col-md-10"
            values={inpValue.lname}
          />
        </div>
        {/* third end */}
        {/* father details */}
        <div className="row  mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="FatherFirstName:"
            id="ffname"
            inptypes="text"
            rowTypes="single"
            labelclassname="col-12 col-sm-4 col-md-3"
            inpclassname="col-12 col-sm-8 col-md-9"
            values={inpValue.ffname}
          />
        </div>
        <div className="row  mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="FatherLastName:"
            id="flname"
            inptypes="text"
            rowTypes="single"
            labelclassname="col-12 col-sm-4 col-md-3 "
            inpclassname="col-12 col-sm-8 col-md-9"
            values={inpValue.flname}
          />
        </div>
        {/* father details end */}
        {/* marital and blood group */}
        <div className="row ">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={handleChange}
              label="MaritalStatus:"
              id="maritalstatus"
              inptypes="select"
              rowTypes="double"
              labelclassname="col-12 col-md-6 col-lg-6 "
              inpclassname="col-12 col-md-6 col-lg-6 "
              selectOptionText={["Married", "Single", "UnMarried", "Divorced"]}
              values={inpValue.maritialstatus}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={handleChange}
              label="BloodGroup:"
              id="bloodgroup"
              inptypes="select"
              rowTypes="double"
              labelclassname="col-12 col-md-6 col-lg-6 "
              inpclassname="col-12 col-md-6 col-lg-6 "
              selectOptionText={["A+", "A-", "O+", "O-", "B+", "B-"]}
              values={inpValue.bloodgroup}
            />
          </div>
        </div>
        {/* marital and blood end */}
        {/* dob and citizenno */}
        <div className="row ">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={handleChange}
              label="DOB:"
              id="dob"
              inptypes="date"
              rowTypes="double"
              labelclassname="col-12 col-md-6 col-lg-5 "
              inpclassname="col-12 col-md-6 col-lg-7 "
              values={inpValue.dob}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={handleChange}
              label="CitizenShipNo"
              id="citizenshipno"
              inptypes="text"
              rowTypes="double"
              labelclassname="col-12 col-md-6 col-lg-6 "
              inpclassname="col-12 col-md-6 col-lg-6 "
              values={inpValue.citizenshipno}
            />
          </div>
        </div>
        {/* dob and citizen end */}
        {/* ctn issue and ctzn district */}
        <div className="row mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="Ctzn issue Date"
            id="ctznissuedate"
            inptypes="date"
            rowTypes="single"
            labelclassname="col-12 col-sm-4 col-md-3 col-lg-4"
            inpclassname="col-12 col-sm-8 col-md-9  col-lg-8"
            values={inpValue.ctznissuedate}
          />
        </div>
        <div className="row mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="Ctzn district"
            id="ctzndistrict"
            inptypes="select"
            rowTypes="single"
            labelclassname="col-12 col-sm-4 col-md-3 "
            inpclassname="col-12 col-sm-8 col-md-9 "
            selectOptionText={District}
            values={inpValue.ctzndistrict}
          />
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default GeneralInformation;
