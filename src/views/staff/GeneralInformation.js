import React, { useContext } from "react";
import { InputBox } from "./ReusableForm";
import CustomFormStyle from "./CustomFormStyle.css";
import { StaffEntryContext } from "./StaffEntry";
import {
  extractMaritialStatus,
  extractGender,
  extractDistrictList,
  extractBloodGroupList,
  extractDate,
} from "src/globalfun/ExtractInput";
const GeneralInformation = () => {
  const {
    inpValue: initialState,
    reference,
    staffForm,
    handleChange,
  } = useContext(StaffEntryContext);
  let { inpValue, tempstaffForm } = useContext(StaffEntryContext);

  const districtsList = extractDistrictList(reference.districtList);
  const genderList = extractGender(reference.genderTypeList);
  const maritalStatusList = extractMaritialStatus(reference.maritalStatusList);
  const bloodGroupList = extractBloodGroupList();

  if (tempstaffForm.form) {
    inpValue = { ...initialState, ...tempstaffForm.form };
  }

  return (
    <fieldset className="border p-1">
      <legend className="float-none w-auto mb-0">General Information</legend>
      <div className="generalinfo bg-light py-2">
        <div className="container ">
          <div className="row ">
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="StaffCode:"
                id="code"
                inptypes="text"
                rowTypes="double"
                labelclassname="col-md-6 col-lg-6"
                inpclassname="col-md-6 col-lg-6"
                values={inpValue.code}
              />
            </div>
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="Gender:"
                id="genderId"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-md-6 col-lg-6 "
                inpclassname="col-md-6 col-lg-6 "
                selectOptionText={genderList}
                values={inpValue.genderId}
              />
            </div>
          </div>
          {/* end first */}
          {/* second start */}
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="FirstName:"
                id="firstName"
                inptypes="text"
                rowTypes="double"
                labelclassname="col-md-6 col-lg-6"
                inpclassname="col-md-6 col-lg-6"
                values={inpValue.firstName}
              />
            </div>
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="LastName:"
                id="lastName"
                inptypes="text"
                rowTypes="double"
                labelclassname="col-12 col-md-6 col-lg-6 "
                inpclassname="col-12 col-md-6 col-lg-6 "
                values={inpValue.lastName}
              />
            </div>
          </div>
          {/* third end */}
          {/* father details */}
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="FatherFirstName:"
                id="ffirstName"
                inptypes="text"
                rowTypes="double"
                labelclassname="col-12 col-md-6 col-lg-6"
                inpclassname="col-12 col-md-6 col-lg-6"
                values={inpValue.ffirstName}
              />
            </div>
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="FatherLastName:"
                id="flastName"
                inptypes="text"
                rowTypes="double"
                labelclassname="col-12 col-md-6 col-lg-6"
                inpclassname="col-12 col-md-6 col-lg-6"
                values={inpValue.flastName}
              />
            </div>
          </div>

          {/* father details end */}
          {/* marital and blood group */}
          <div className="row ">
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="MaritalStatus:"
                id="maritalStatusId"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-12 col-md-6 col-lg-6"
                inpclassname="col-12 col-md-6 col-lg-6"
                selectOptionText={maritalStatusList}
                values={inpValue.maritalStatusId}
              />
            </div>
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="BloodGroup:"
                id="bloodGroup"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-12 col-md-6 col-lg-6"
                inpclassname="col-12 col-md-6 col-lg-6"
                selectOptionText={bloodGroupList}
                values={inpValue.bloodGroup}
                disable={false}
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
                labelclassname="col-12 col-md-6 col-lg-6"
                inpclassname="col-12 col-md-6 col-lg-6"
                values={extractDate(inpValue.dob)}
              />
            </div>
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="CitizenShipNo"
                id="citizenshipNo"
                inptypes="text"
                rowTypes="double"
                labelclassname="col-12 col-md-6 col-lg-6 "
                inpclassname="col-12 col-md-6 col-lg-6 "
                values={inpValue.citizenshipNo}
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="Ctzn issue Date"
                id="cissueDate"
                inptypes="date"
                rowTypes="double"
                labelclassname="col-12 col-md-6 col-lg-6 "
                inpclassname="col-12 col-md-6 col-lg-6 "
                values={extractDate(inpValue.cissueDate)}
              />
            </div>
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="Ctzn district:"
                id="cdistrictId"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-12 col-md-6 col-lg-6 "
                inpclassname="col-12 col-md-6 col-lg-6 "
                selectOptionText={districtsList}
                values={inpValue.cdistrictId}
              />
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default GeneralInformation;
