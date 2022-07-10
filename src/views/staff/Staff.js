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
import React, { useState, useEffect, createContext } from "react";
import { fincoDefault } from "src/axios/axiosinstance";
import { getToken } from "src/globalfun/globalfun";
import Table from "./table";
import { useSelector, useDispatch } from "react-redux";
import CIcon from "@coreui/icons-react";
import { cilUser } from "@coreui/icons";
import { Icon } from "@iconify/react";
import AddModals from "src/globalfun/AddModals";
import AddStaff from "./AddStaff";
import { formState as initialState } from "./FormNameState";

export const FormContext = createContext();

const Staff = () => {
  const [inpValue, setInpValue] = useState(initialState);

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("name", name, "  value", value);
    setInpValue((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmits = (e) => {
    e.preventDefault();
    console.log("handleSubmit called", inpValue);
    setInpValue(initialState);
  };
  const [data, setDatas] = useState([]);
  const [jobStatus, setJobStatus] = useState([]);
  const [show, setShow] = useState(false);
  const token = getToken();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selected, setSelected] = useState({
    JobStatusID: "",
    Description: "",
  });
  const [officeList, setOffice] = useState([]);

  useEffect(() => {
    const getOffice = async () => {
      try {
        const response = await fincoDefault.get(`/finco/api/auth/office/list`, {
          headers: {
            token: `${token}`,
          },
        });
        setOffice(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOffice();
  }, []);
  const dispatch = useDispatch();
  const staffId = useSelector((state) => state.dropDownData.selected.id);
  const statusId = useSelector(
    (state) => state.jobStatus.selected?.JobStatusID
  );

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
                  className="m-1 p-2 d-flex justify-content-center align-items-center flex-sm-row flex-column"
                  style={{
                    borderRadius: "5px",
                    background: "#1a3eb4",
                    color: "white",
                  }}
                >
                  <div className="w-25">
                    <button
                      className="btn btn-success text-white"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="Add New Record"
                      onClick={handleShow}
                    >
                      <Icon
                        icon="carbon:add-filled"
                        width="22"
                        height="22"
                        inline={true}
                        className="pt-1"
                      />
                      <span className="px-2">Add</span>
                    </button>
                  </div>

                  <div className="d-flex w-50">
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
                </div>
                <Table data={data} jobs={jobStatus} />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
      {show && (
        <FormContext.Provider
          value={{
            inpValue,
            setInpValue,
            handleChanges,
            handleSubmits,
            officeList,
            jobStatus,
          }}
        >
          <AddModals
            title="Staff Entry"
            show={show}
            handleClose={handleClose}
            handleSubmits={handleSubmits}
            footers={true}
          >
            <AddStaff />
          </AddModals>
        </FormContext.Provider>
      )}
    </>
  );
};

export default Staff;
