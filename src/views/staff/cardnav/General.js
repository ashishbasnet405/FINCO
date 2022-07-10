import React, { useContext, useState } from "react";
import { FormContext } from "../Staff";
import { ModalNavContext } from "../table";
import AddModals from "src/globalfun/AddModals";
import AddStaff from "../AddStaff";
const General = () => {
  const { staffProfile, handleClose } = useContext(ModalNavContext);
  const [show, setShow] = useState(false);
  console.log("staff general", staffProfile);

  const handleEdit = () => {
    console.log("handleEdit called");
    setShow(true);
    // handleClose();
  };
  return (
    <>
      <div
        className="container border border-primary bg-light p-2"
        id="general"
      >
        <div className="d-flex justify-content-sm-around">
          <div className="d-flex my-2 justify-content-between flex-column flex-sm-row flex-fill">
            <h3 className="text-center">General Information</h3>
            <button className="btn btn-primary" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 border border-dark">
            <div className="container">
              <div className="row">
                <div className="col-12 border border-warning">profile img</div>
                <div className="col-12 border border-warning">sign image</div>
              </div>
            </div>
          </div>

          <div className="col-md-7 border border-dark">details</div>
        </div>
      </div>
      {show && (
        <FormContext.Provider
          value={{
            staffProfile,
          }}
        >
          <AddModals
            title="Staff Entry"
            show={show}
            handleClose={handleClose}
            // handleSubmits={handleSubmits}
            footers={true}
          >
            <AddStaff />
          </AddModals>
        </FormContext.Provider>
      )}
    </>
  );
};

export default General;
