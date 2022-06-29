import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCardText,
} from "@coreui/react";
import React, { useState, useEffect } from "react";
import { fincoDefault } from "src/axios/axiosinstance";
import { getToken } from "src/globalfun/globalfun";
import Table from "./table";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import CIcon from "@coreui/icons-react";
import { cilUser } from "@coreui/icons";
const Staff = () => {
  const [data, setDatas] = useState([]);
  const staffId = useSelector((state) => state.dropDownData.selected.id);
  const token = getToken();
  //   console.log("state",staffId)

  useEffect(() => {
    // console.log("inside useffect staff",staffId);
    const getStaff = async () => {
      try {
        const response = await fincoDefault.get(
          `/finco/api/auth/staff/list?officeId=${staffId}&statusId=1`,
          {
            headers: {
              token: `${token}`,
            },
          }
        );
        setDatas(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getStaff();
  }, [staffId]);

  return (
    <>
      <CContainer>
        <CRow>
          <CCol xs="12">
            <CCard style={{ background: "#60779f" }}>
              <CCardHeader component="h5">
                {/* <Icon icon="entypo:man" width="50" height="30" inline={true} className="text-white"/> */}
                <CIcon
                  icon={cilUser}
                  customClassName="nav-icon"
                  height={30}
                  width={50}
                  style={{ color: "white" }}
                />
                <span className="d-inline-block text-white">Staff Details</span>
              </CCardHeader>
              <CCardBody>
                <Table data={data} />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Staff;
