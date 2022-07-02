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

const Staff = () => {
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
        setSelected({
          JobStatusID: response.data[0].JobStatusID,
          Description: response.data[0].Description,
        });
      } catch (err) {
        alert(err.response.data.message);
      }
    };
    getJobDetails();
  }, []);

  useEffect(() => {
    dispatch({ type: "getJobStatus", selected });
  }, [selected]);

  useEffect(() => {
    const getStaff = async () => {
      try {
        const response = await fincoDefault.get(
          `/finco/api/auth/staff/list?officeId=${staffId}&statusId=${
            statusId ? statusId : 1
          }`,
          {
            headers: {
              token: `${token}`,
            },
          }
        );
        setDatas(response.data);
      } catch (err) {
        alert(err);
      }
    };
    getStaff();
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
                  width={50}
                  style={{ color: "white" }}
                />
                <span className="d-inline-block text-white">Staff Details</span>
              </CCardHeader>
              <CCardBody>
                <div
                  className="m-1 p-2 d-flex justify-content-center"
                  style={{
                    borderRadius: "5px",
                    background: "#1a3eb4",
                    color: "white",
                  }}
                >
                  <CFormLabel
                    className="form-label pt-2 px-2 "
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    Job status:
                  </CFormLabel>

                  <CFormSelect
                    size="sm"
                    onChange={handleDropDown}
                    className="w-25"
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
                  </CFormSelect>
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
