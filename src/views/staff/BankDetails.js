import React, { useContext } from "react";
import { InputBox } from "./ReusableForm";
import { accountTypeList } from "../../globalfun/AccountTypeList";
import {
  extractAccountTypeList,
  extractOfficeList,
} from "src/globalfun/ExtractInput";
import { StaffEntryContext } from "./StaffEntry";
const BankDetails = () => {
  const {
    staffForm,
    officeList: officedata,
    inpValue: initialState,
    handleChange,
    reference,
  } = useContext(StaffEntryContext);
  let { inpValue, tempstaffForm } = useContext(StaffEntryContext);

  const officeList = extractOfficeList(officedata);
  if (tempstaffForm.form) {
    inpValue = {
      ...initialState,
      ...tempstaffForm.form,
    };
  }
  return (
    <fieldset className="border p-1 mt-1">
      <legend className="float-none w-auto mb-0">BankDetails</legend>
      <div className="bankdetails bg-light py-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-7">
              <InputBox
                handleChange={handleChange}
                label="BankName:"
                id="bankId"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-xl-4"
                inpclassname="col-xl-8"
                selectOptionText={accountTypeList ? accountTypeList : ""}
                values={inpValue.bankId}
                // disable={accountTypeList ? false : true}
              />
            </div>
            <div className="col-12 col-sm-5">
              <InputBox
                handleChange={handleChange}
                label="PAN Number:"
                id="panNo"
                inptypes="text"
                rowTypes="double"
                labelclassname="col-xl-6"
                inpclassname="col-xl-6"
                values={inpValue.panNo}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-7">
              <InputBox
                handleChange={handleChange}
                label="Salary Office:"
                id="salOfficeId"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-xl-4"
                inpclassname="col-xl-8"
                selectOptionText={officeList}
                values={inpValue.salOfficeId}
              />
            </div>
            <div className="col-12 col-sm-5">
              <InputBox
                handleChange={handleChange}
                label="BankAccount:"
                id="bankAc"
                inptypes="text"
                rowTypes="double"
                labelclassname="col-xl-6"
                inpclassname="col-xl-6"
                values={inpValue.bankAc}
              />
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default BankDetails;
