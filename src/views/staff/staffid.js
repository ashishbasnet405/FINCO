import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import CardNav from "./cardnav/CardNav";
import CIcon from "@coreui/icons-react";
import { cilUser } from "@coreui/icons";
import { getToken } from "src/globalfun/globalfun";
import { fincoDefault } from "src/axios/axiosinstance";
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
} from "@coreui/react";

const staffid = () => {
  const [profile, setProfile] = useState([]);
  const { state } = useLocation();
  useEffect(() => {
    if (state) {
      const makereq = async () => {
        const token = getToken();
        try {
          const response = await fincoDefault.get(
            `/finco/api/auth/staff/profile?staffId=${state.data.StaffId}`,
            {
              headers: {
                token: `${token}`,
              },
            }
          );
          setProfile(response.data);
        } catch (err) {
          alert(err);
          console.log(err);
        }
      };
      makereq();
    }
  }, [state]);

  if (state) {
    return (
      <>
        <CContainer>
          <CRow>
            <CCol xs="12">
              <CCard style={{ background: "white" }}>
                <CCardHeader component="h5">
                  <CIcon
                    icon={cilUser}
                    customClassName="nav-icon"
                    height={30}
                    width={40}
                    className="text-white"
                  />
                  <span className="d-inline-block text-dark">
                    Staff Profile
                  </span>
                </CCardHeader>
                <CCardBody className="p-0 p-lg-1">
                  <CardNav staffprofile={state} profile={profile} />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </>
    );
  } else {
    return <Navigate to="/staff" />;
  }
};

export default staffid;
