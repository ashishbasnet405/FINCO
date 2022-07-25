import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CFormLabel,
  CFormSelect,
} from "@coreui/react";
import React, { useState, useEffect } from "react";
import { fincoDefault } from "src/axios/axiosinstance";
import { getToken } from "src/globalfun/globalfun";
import Table from "./table";
import { useSelector, useDispatch } from "react-redux";
import CIcon from "@coreui/icons-react";
import { cilUser } from "@coreui/icons";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import MainModals from "src/globalfun/MainModals";
import AddStaff from "./AddStaff";
import StaffEntry from "./StaffEntry";
import "../offices/customstyle.css";

const Staff = () => {
  const navigate = useNavigate();
  const [data, setDatas] = useState([]);
  const [jobStatus, setJobStatus] = useState([]);
  const [selected, setSelected] = useState({
    JobStatusID: "",
    Description: "",
  });
  const dispatch = useDispatch();
  const staffId = useSelector((state) => state.dropDownData.selected.id);
  const statusId = useSelector(
    (state) => state.jobStatus.selected?.JobStatusID
  );

  const token = getToken();
  const handleDropDown = (e) => {
    const JobStatusID = e.target.value.split("!!")[0];
    const Description = e.target.value.split("!!")[1];
    setSelected({ ...selected, JobStatusID, Description });
  };

  useEffect(() => {
    const getJobDetails = async () => {
      try {
        const response = await fincoDefault.get("/finco/api/job/status/list", {
          headers: { token: `${token}` },
        });
        setJobStatus(response.data);
        dispatch({
          type: "setJobStatus",
          selected: {
            JobStatusID: response.data[0].JobStatusID,
            Description: response.data[0].Description,
          },
        });
        setSelected({
          JobStatusID: response.data[0].JobStatusID,
          Description: response.data[0].Description,
        });
      } catch (err) {
        console.log(err);
        alert(err);
        navigate("/dashboard");
      }
    };
    getJobDetails();
  }, []);

  useEffect(() => {
    dispatch({ type: "getJobStatus", selected });
  }, [selected]);

  useEffect(() => {
    if (statusId) {
      const getStaff = async () => {
        try {
          const response = await fincoDefault.get(
            `/finco/api/auth/staff/list?officeId=${staffId}&statusId=${statusId}`,
            {
              headers: {
                token: `${token}`,
              },
            }
          );
          setDatas(response.data);
        } catch (err) {
          alert(err);
          navigate("/dashboard");
        }
      };
      getStaff();
    }
  }, [staffId, statusId]);

  return (
    <>
      <CContainer>
        <CRow>
          <CCol xs="12">
            <CCard style={{ background: "#60779f" }}>
              <CCardHeader component="h5">
                <CIcon
                  icon={cilUser}
                  customClassName="nav-icon"
                  height={30}
                  width={40}
                  className="text-white"
                />
                <span className="d-inline-block text-white">Staff Details</span>
              </CCardHeader>
              <CCardBody className="p-0 p-lg-1">
                <div className="container staff-card-form pt-0">
                  <div
                    className="row"
                    style={{
                      background:
                        "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
                    }}
                  >
                    <div className="col-lg-5 col-md-6 col-sm-9 mx-auto p-1 ">
                      <div className="container">
                        <div className="row align-items-center">
                          <label
                            htmlFor="jobstatus"
                            className="col-form-label col-xl-4 col-lg-5 stafflabel"
                          >
                            Job Status :
                          </label>
                          <div className="px-0 col-xl-6 col-lg-7">
                            <select
                              className="form-select form-select-sm"
                              onChange={handleDropDown}
                            >
                              {jobStatus.map((element) => {
                                const { JobStatusID, Description } = element;
                                return (
                                  <option
                                    value={`${JobStatusID}!!${Description}`}
                                    key={JobStatusID}
                                  >
                                    {Description}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Table data={data} jobs={jobStatus} />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Staff;
