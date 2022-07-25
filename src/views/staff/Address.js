import React from "react";
import { InputBox } from "./ReusableForm";

const Address = () => {
  return (
    <div className="Address bg-light py-2 ">
      <h5 className="text-center form-head my-3">Address</h5>
      <div className="container">
        {/* first */}
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="Province:"
              id="zoneId"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-md-5 "
              inpclassname="col-md-7 "
              selectOptionText={""}
              values={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="District:"
              id="district"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-md-5"
              inpclassname="col-md-7"
              selectOptionText={""}
              values={""}
            />
          </div>
        </div>
        {/* end provinvce and district */}
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="VDC/Mun:"
              id="vdcId"
              inptypes="selectwithid"
              rowTypes="double"
              labelclassname="col-md-5"
              inpclassname="col-md-7"
              selectOptionText={""}
              values={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="Ward:"
              id="wardNo"
              inptypes="number"
              rowTypes="double"
              labelclassname="col-md-5"
              inpclassname="col-md-7"
              values={""}
            />
          </div>
        </div>
        {/*  */}
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="Email:"
              id="email"
              inptypes="email"
              rowTypes="double"
              labelclassname="col-md-5"
              inpclassname="col-md-7"
              values={""}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="Tole:"
              id="tole"
              inptypes="text"
              rowTypes="double"
              labelclassname="col-md-5"
              inpclassname="col-md-7"
              values={""}
            />
          </div>
        </div>
        {/*  */}
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="PhoneNo:"
              id="phone1"
              inptypes="text"
              rowTypes="double"
              labelclassname="col-md-5  "
              inpclassname="col-md-7  "
              values={""}
              disable={false}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={""}
              label="MobileNo:"
              id="mobile"
              inptypes="text"
              rowTypes="double"
              labelclassname="col-md-5 "
              inpclassname="col-md-7 "
              values={""}
            />
          </div>
        </div>
        {/*  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Address;
