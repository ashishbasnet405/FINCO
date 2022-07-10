import React, { useContext } from "react";
import { InputBox } from "./ReusableForm";
import { District, provinceList } from "./District";
import { FormContext } from "src/views/staff/Staff";

const BankDetails = () => {
  const {
    inpValue,
    handleChanges: handleChange,
    officeList,
  } = useContext(FormContext);

  const extractOffice = officeList.map((element) => {
    const { Id: id, Name: name } = element;
    return { id, name };
  });
  return (
    <div className="bankdetails bg-light py-2 mt-2">
      <h5 className="text-center form-head my-3">Bank Details</h5>
      <div className="container">
        <div className="row  mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="BankName:"
            id="bankname"
            inptypes="select"
            rowTypes="single"
            labelclassname="col-12 col-sm-3 "
            inpclassname="col-12 col-sm-9 "
            selectOptionText={""}
            values={inpValue.bankname}
            disable={true}
          />
        </div>
        <div className="row  mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="BankAccount:"
            id="bankacc"
            inptypes="text"
            rowTypes="single"
            labelclassname="col-12 col-sm-3 "
            inpclassname="col-12 col-sm-9 "
            values={inpValue.bankacc}
          />
        </div>
        <div className="row mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="PAN Number:"
            id="bankacc"
            inptypes="text"
            rowTypes="single"
            labelclassname="col-12 col-sm-3 col-lg-4 col-xl-3"
            inpclassname="col-12 col-sm-9 col-lg-8 col-xl-9"
            values={inpValue.bankacc}
          />
        </div>
        <div className="row mb-0 mb-sm-2">
          <InputBox
            handleChange={handleChange}
            label="Salary Office:"
            id="salaryoffice"
            inptypes="selectwithid"
            rowTypes="single"
            labelclassname="col-12 col-sm-3 col-lg-4 col-xl-3"
            inpclassname="col-12 col-sm-9 col-lg-8 col-xl-9"
            selectOptionText={extractOffice}
            values={inpValue.salaryoffice}
          />
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
