import React, { createContext, useEffect, useState } from "react";
import { fincoDefault } from "src/axios/axiosinstance";
import { getToken } from "src/globalfun/globalfun";
import { useSelector } from "react-redux";
import Address from "./Address";
import BankDetails from "./BankDetails";
import GeneralInformation from "./GeneralInformation";
import JobDetails from "./JobDetails";
import { formState } from "./FormNameState";
import { Modal, ModalFooter } from "react-bootstrap";
import { Button } from "react-bootstrap";
export const StaffEntryContext = createContext();

const StaffEntry = ({ staffProfile = "", modalFooter, handleClose }) => {
  console.log("staffProfile", staffProfile);
  const [reference, setReference] = useState([]);
  const [staffForm, setStaffForm] = useState([]);
  const [tempstaffForm, settempStaffForm] = useState([]);
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

    if (tempstaffForm.form) {
      settempStaffForm({ ...tempstaffForm.form, [name]: value });
      setInpvalue({ ...tempstaffForm.form, [name]: value });
    } else {
      setInpvalue({ ...inpValue, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", inpValue);
  };

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
        } catch (error) {
          console.log(error.response);
        }
      };
      getStaffForm();
    }
  }, []);

  return (
    <>
      {reference && tempstaffForm && (
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
