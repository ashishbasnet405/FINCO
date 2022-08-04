import React, { createContext, useEffect, useState } from "react";
import { fincoDefault } from "src/axios/axiosinstance";
import { getToken } from "src/globalfun/globalfun";
import { useSelector } from "react-redux";
import Address from "./Address";
import BankDetails from "./BankDetails";
import GeneralInformation from "./GeneralInformation";
import JobDetails from "./JobDetails";
import { formState } from "./FormNameState";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const StaffEntryContext = createContext();

const StaffEntry = ({ staffProfile = "", modalFooter, handleClose }) => {
  const [reference, setReference] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    const makeRequest = async () => {
      try {
        const response = await fincoDefault.get(
          "/finco/api/auth/detail/reference",
          {
            headers: {
              token: `${token}`,
            },
          }
        );
        setReference(response.data);
      } catch (err) {
        console.log("error", err);
        alert(err);
      }
    };
    makeRequest();
  }, []);
  const [staffForm, setStaffForm] = useState([]);
  const [tempstaffForm, settempStaffForm] = useState([]);
  const [updateSubmit, setupdateSubmit] = useState([]);
  const officeId = useSelector((state) => state.dropDownData.selected.id);

  const formKeyName = { ...formState };
  const [inpValue, setInpvalue] = useState(formKeyName);
  console.log("inpValue", inpValue);
  const [officeList, setOffice] = useState([]);
  useEffect(() => {
    const token = getToken();
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
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("name", name, "-----value=", value);

    if (tempstaffForm.form) {
      settempStaffForm({ ...tempstaffForm.form, [name]: value });
      setInpvalue({ ...tempstaffForm.form, [name]: value });
      setupdateSubmit({ ...updateSubmit, [name]: value });
      // setInpvalue({ ...tempstaffForm.form });
    } else {
      setInpvalue({ ...inpValue, [name]: value });
    }
  };

  const staffSave = async () => {
    const token = getToken();
    try {
      const response = await fincoDefault.post(
        `/finco/api/auth/staff/save`,
        inpValue,
        {
          headers: {
            token: `${token}`,
          },
        }
      );
      alert(response.data?.message);
      console.log(response);
      if (response.status === 200) {
        const rowData = {
          StaffId: inpValue.staffId,
        };
        navigate("/staff/profile", { state: { data: rowData } });
      }
    } catch (err) {
      alert("staff save error", err);
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", inpValue);
    if (staffForm.form) {
      if (!tempstaffForm.form) {
        console.log("inp value to submit inpvalue=", inpValue);
        staffSave(inpValue);
      } else {
        console.log("inp value to submit tempstaffform=", tempstaffForm.form);
        staffSave(tempstaffForm.form);
      }
    } else {
      staffSave(inpValue);
    }
    handleClose();
  };

  useEffect(() => {
    if (staffProfile) {
      const token = getToken();
      const getStaffForm = async () => {
        try {
          const response = await fincoDefault(
            `/finco/api/auth/staff/form?staffId=${staffProfile.staffId}&officeId=${officeId}`,
            {
              headers: {
                token: `${token}`,
              },
            }
          );
          setStaffForm(response.data);
          settempStaffForm(response.data);
          // setInpvalue(response.data.form);
          setupdateSubmit(response.data.form);
        } catch (error) {
          console.log(error.response);
        }
      };
      getStaffForm();
    }
  }, []);
  return (
    <>
      {tempstaffForm && (
        <StaffEntryContext.Provider
          value={{
            reference,
            staffForm,
            inpValue,
            handleChange,
            tempstaffForm,
            officeList,
          }}
        >
          <div className="container mb-2">
            <div className="row g-2">
              <div className="col-lg-6 col-12 firstcont">
                <GeneralInformation />
                <BankDetails />
              </div>
              <div className="col-lg-6 col-12 secondcont">
                <Address />
                <JobDetails />
              </div>
            </div>
          </div>
        </StaffEntryContext.Provider>
      )}
      {modalFooter && (
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      )}
    </>
  );
};

export default StaffEntry;
