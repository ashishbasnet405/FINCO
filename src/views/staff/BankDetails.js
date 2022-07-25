import React, { useContext } from "react";
import { InputBox } from "./ReusableForm";

const BankDetails = () => {
  return (
    <div className="bankdetails bg-light py-2 mt-2">
      <h5 className="text-center form-head my-3">Bank Details</h5>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="BankName:"
              id="bankname"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-md-6"
              inpclassname="col-md-6"
              selectOptionText={""}
              values={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="BankAccount:"
              id="bankacc"
              inptypes="text"
              rowTypes="double"
              labelclassname="col-md-6"
              inpclassname="col-md-6"
              values={""}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="PAN Number:"
              id="bankacc"
              inptypes="text"
              rowTypes="double"
              labelclassname="col-md-6"
              inpclassname="col-md-6"
              values={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="Salary Office:"
              id="salaryoffice"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-md-6"
              inpclassname="col-md-6"
              selectOptionText={""}
              values={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
