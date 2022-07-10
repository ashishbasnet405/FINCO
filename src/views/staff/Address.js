import React, { useContext } from "react";
import { InputBox } from "./ReusableForm";
import { District, provinceList } from "./District";
import { FormContext } from "src/views/staff/Staff";

const Address = () => {
  const { inpValue, handleChanges: handleChange } = useContext(FormContext);

  return (
    <div className="Address bg-light py-2 ">
      <h5 className="text-center form-head my-3">Address</h5>
      <div className="container">
        {/* first */}
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={handleChange}
              label="Province"
              id="province"
              inptypes="select"
              rowTypes="double"
              labelclassname="col-md-5 col-lg-4 "
              inpclassname="col-md-7 col-lg-8 "
              selectOptionText={provinceList}
              values={inpValue.province}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={handleChange}
              label="District:"
              id="addressdistrict"
              inptypes="select"
              rowTypes="double"
              labelclassname="col-md-5 col-lg-4 "
              inpclassname="col-md-7 col-lg-8 "
              selectOptionText={District}
              values={inpValue.addressdistrict}
              disable={true}
            />
          </div>
        </div>
        {/* end provinvce and district */}
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={handleChange}
              label="VDC/Mun:"
              id="vdc"
              inptypes="select"
              rowTypes="double"
              labelclassname="col-md-5 col-lg-4 "
              inpclassname="col-md-7 col-lg-8 "
              selectOptionText={""}
              values={inpValue.vdc}
              disable={true}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={handleChange}
              label="Ward:"
              id="ward"
              inptypes="number"
              rowTypes="double"
              labelclassname="col-md-5 col-lg-4 "
              inpclassname="col-md-7 col-lg-8 "
              values={inpValue.ward}
            />
          </div>
        </div>
        {/*  */}
        <div className="row mb-lg-2">
          <InputBox
            handleChange={handleChange}
            label="Tole:"
            id="tole"
            inptypes="text"
            rowTypes="single"
            labelclassname="col-12 col-sm-2 col-md-2 "
            inpclassname="col-12 col-sm-10 col-md-10"
            values={inpValue.tole}
          />
        </div>
        {/*  */}
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={handleChange}
              label="PhoneNo:"
              id="phone"
              inptypes="number"
              rowTypes="double"
              labelclassname="col-md-5 col-lg-4 "
              inpclassname="col-md-7 col-lg-8 "
              values={inpValue.phone}
              disable={false}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputBox
              handleChange={handleChange}
              label="MobileNo:"
              id="mobileno"
              inptypes="number"
              rowTypes="double"
              labelclassname="col-md-5 col-lg-4 "
              inpclassname="col-md-7 col-lg-8 "
              values={inpValue.mobileno}
            />
          </div>
        </div>
        {/*  */}
        <div className="row">
          <InputBox
            handleChange={handleChange}
            label="Email:"
            id="email"
            inptypes="email"
            rowTypes="single"
            labelclassname="col-12 col-sm-2 col-md-2 "
            inpclassname="col-12 col-sm-10 col-md-10"
            values={inpValue.email}
          />
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Address;
