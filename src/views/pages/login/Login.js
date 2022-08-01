import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { fincoLogin } from "src/axios/axiosinstance";
import { useSelector, useDispatch } from "react-redux";
import Modals from "src/globalfun/Modals";

const Login = () => {
  const initialState = {
    userName: "",
    passWord: "",
  };

  const [details, setDetails] = useState(initialState);
  const [localStat] = useState(localStorage.getItem("fincoLoginDetails"));

  const navigate = useNavigate();
  const modalState = useSelector((state) => state.modalVisible.status);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fincoLogin.post(
        "/finco/api/staff/login?detail=true",
        details
      );
      if (response.data.token) {
        localStorage.setItem(
          "fincoLoginDetails",
          JSON.stringify(response.data)
        );
        setDetails(initialState);
        navigate("/dashboard");
      }
    } catch (err) {
      dispatch({
        type: "setModal",
        status: !modalState,
        statusCode: err.response.status,
        message: err.response.data.message,
      });
    }
  };

  if (localStat) {
    return <Navigate to="/dashboard" />;
  } else {
    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-medium-emphasis">
                        Sign In to your account
                      </p>

                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          type="text"
                          placeholder="Username"
                          name="userName"
                          onChange={handleInput}
                          value={details.userName}
                        />
                      </CInputGroup>

                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          name="passWord"
                          onChange={handleInput}
                          value={details.passWord}
                        />
                      </CInputGroup>

                      <CRow>
                        <CCol xs={6}>
                          <CButton
                            color="primary"
                            className="px-4"
                            onClick={handleSubmit}
                          >
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right">
                          {/* <CButton color="link" className="px-0">
                              Forgot password?
                            </CButton> */}
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard
                  className="text-white bg-primary py-5"
                  style={{ width: "44%" }}
                >
                  <CCardBody className="text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      {/* <h2>Sign up</h2> */}
                      <h3>FINCO 360</h3>
                      {/* <Link to="/register">
                          <CButton color="primary" className="mt-3" active tabIndex={-1}>
                            Register Now!
                          </CButton>
                        </Link> */}
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
        {modalState && <Modals modalType={false} />}
      </div>
    );
  }
};

export default Login;
