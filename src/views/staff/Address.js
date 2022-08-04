import React, { useContext, useEffect, useState } from "react";
import { fincoDefault } from "src/axios/axiosinstance";
import {
  extractDistrictList,
  extractVdcList,
  extractZoneList,
} from "src/globalfun/ExtractInput";
import { getToken } from "src/globalfun/globalfun";
import { InputBox } from "./ReusableForm";
import { StaffEntryContext } from "./StaffEntry";

const Address = () => {
  const [districtList, setDistrictList] = useState([]);
  const [vdcList, setvdcList] = useState([]);
  const {
    inpValue: initialState,
    reference,
    handleChange,
  } = useContext(StaffEntryContext);
  let { inpValue, tempstaffForm } = useContext(StaffEntryContext);

  const zoneList = reference.zoneList
    ? extractZoneList(reference.zoneList)
    : "";

  if (tempstaffForm.form) {
    inpValue = { ...initialState, ...tempstaffForm.form };
  }
  const getVdc = async (id) => {
    if (id) {
      const token = getToken();
      try {
        const vdclist = await fincoDefault.get(
          `/finco/api/auth/detail/vdc/list?districtId=${id}`,
          {
            headers: {
              token: `${token}`,
            },
          }
        );
        const vdc = extractVdcList(vdclist.data);
        setvdcList(vdc);
      } catch (err) {
        console.log("error", err);
        alert(err);
      }
    }
  };
  useEffect(() => {
    getVdc(inpValue.districtId);
  }, [inpValue.districtId]);

  useEffect(() => {
    const token = getToken();
    if (!isNaN(parseInt(inpValue.zoneId))) {
      const makeReq = async () => {
        try {
          const response = await fincoDefault.get(
            `/finco/api/auth/detail/district/list?zoneId=${inpValue.zoneId}`,
            {
              headers: {
                token: `${token}`,
              },
            }
          );
          const districtList = extractDistrictList(response.data);
          if (!tempstaffForm.form) {
            getVdc(districtList[0].id);
          }
          setDistrictList(districtList);
        } catch (err) {
          console.log("error", err);
          alert(err);
        }
      };
      makeReq();
    } else {
      setDistrictList("");
      setvdcList("");
    }
  }, [inpValue.zoneId]);

  return (
    <fieldset className="border p-1">
      <legend className="float-none w-auto mb-0">Address</legend>
      <div className="address bg-light py-2">
        <div className="container">
          {/* first */}
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="Province:"
                id="zoneId"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-lg-4"
                inpclassname="col-lg-8"
                selectOptionText={zoneList}
                values={inpValue.zoneId}
              />
            </div>
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="District:"
                id="districtId"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-lg-4"
                inpclassname="col-lg-8"
                selectOptionText={districtList ? districtList : ""}
                values={inpValue.districtId}
                disable={districtList ? false : true}
              />
            </div>
          </div>
          {/* end provinvce and district */}
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="VDC/Mun:"
                id="vdcId"
                inptypes="selectwithid"
                rowTypes="double"
                labelclassname="col-lg-4"
                inpclassname="col-lg-8"
                selectOptionText={vdcList ? vdcList : ""}
                values={inpValue.vdcId}
                disable={districtList && vdcList ? false : true}
              />
            </div>
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="Ward:"
                id="wardNo"
                inptypes="text"
                rowTypes="double"
                labelclassname="col-lg-4"
                inpclassname="col-lg-8"
                values={inpValue.wardNo}
              />
            </div>
          </div>
          {/*  */}
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="Email:"
                id="email"
                inptypes="email"
                rowTypes="double"
                labelclassname="col-lg-4"
                inpclassname="col-lg-8"
                values={inpValue.email}
              />
            </div>
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="Tole:"
                id="tole"
                inptypes="text"
                rowTypes="double"
                labelclassname="col-lg-4"
                inpclassname="col-lg-8"
                values={inpValue.tole}
              />
            </div>
          </div>
          {/*  */}
          <div className="row">
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="PhoneNo:"
                id="phone1"
                inptypes="text"
                rowTypes="double"
                labelclassname="col-lg-4  "
                inpclassname="col-lg-8  "
                values={inpValue.phone1}
              />
            </div>
            <div className="col-12 col-sm-6">
              <InputBox
                handleChange={handleChange}
                label="MobileNo:"
                id="mobile"
                inptypes="text"
                rowTypes="double"
                labelclassname="col-lg-4 "
                inpclassname="col-md-8 "
                values={inpValue.mobile}
              />
            </div>
          </div>
          {/*  */}

          {/*  */}
        </div>
      </div>
    </fieldset>
  );
};

export default Address;
