import React, { useContext, useState, useRef, useEffect } from "react";
import { StaffTable } from "../table";
import MainModalB from "src/globalfun/MainModals";
import AddStaff from "../AddStaff";
import StaffEntry from "../StaffEntry";
const General = (sta) => {
  const { staffProfile } = useContext(StaffTable);
  const [shows, setShows] = useState(false);
  const fileinp = useRef(null);
  const [loadImage, setLoadImage] = useState("");
  const handleEdit = () => {
    console.log("handleEdit called");
    setShows(true);
  };
  const handleShow = () => setShows(true);
  const handleClose = () => setShows(false);

  const handleSubmit = ({ file }) => {
    console.log("handle submit called");
  };
  const handleChange = (e) => {
    console.log("handleChangecalled", e.target.files);
    const [File] = e.target.files;
    setLoadImage(File);
  };
  const handleClick = (e) => {
    fileinp.current.click();
  };
  useEffect(() => {
    if (loadImage) {
      handleSubmit();
    }
  }, [loadImage]);
  return (
    <>
      <div className="container-fluid position-relative  p-0 m-0 px-1 pb-1 bg-light">
        <fieldset className="border border-black p-2">
          <legend className="float-none w-auto mb-0">
            General Information
          </legend>
          <div className="container staffdetails-content p-0 m-0">
            {/*  */}

            {/*  */}
            <div className="container m-0 py-1">
              <div className="row">
                <div className="col-lg-3 ">
                  <div className="container img-container">
                    <div className="row">
                      <div className="col-6 col-lg-12 pb-2 ">
                        <div className="">
                          <img
                            src={`${staffProfile.photo}`}
                            alt="photo"
                            className="img-fluid img-responsive img-thumbnail general-image"
                          />
                        </div>
                        <div className="uploadbtn">
                          <input
                            type="file"
                            // style={{ display: "none" }}
                            ref={fileinp}
                            onChange={handleChange}
                            multiple={false}
                            hidden
                          />
                          <button
                            className="btn btn-primary imageuploadbtn"
                            onClick={handleClick}
                          >
                            Load profile image
                          </button>
                        </div>
                      </div>
                      <div className="col-6 col-lg-12">
                        <div className="">
                          <img
                            src={`${staffProfile.sign}`}
                            alt="sign"
                            className="img-fluid img-responsive img-thumbnail general-image"
                          />
                        </div>
                        <div className="uploadbtn">
                          <input
                            type="file"
                            // style={{ display: "none" }}
                            ref={fileinp}
                            onChange={handleChange}
                            multiple={false}
                            hidden
                          />
                          <button
                            className="btn btn-primary imageuploadbtn"
                            onClick={handleClick}
                          >
                            Load sign image
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 ">
                  <div className="container p-0 position-relative">
                    <div className="edit-icon d-flex justify-content-end">
                      <div className="editcontent">
                        <button
                          type="button"
                          className="fas fa-edit btn btn-primary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Edit"
                        ></button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-10  general-content">
                        <fieldset className="border border-black p-2">
                          <legend className="float-none w-auto mb-0 general-legend">
                            General
                          </legend>
                          <div className="general-content d-flex justify-content-around">
                            <ul className="list-group">
                              <li className="list-group-item">
                                StaffId:{" "}
                                <span className="fw-bold">
                                  {staffProfile.staffId}
                                </span>
                              </li>
                              <li className="list-group-item">
                                Name:{" "}
                                <span className="fw-bold">
                                  {staffProfile.firstName}{" "}
                                  {staffProfile.lastName}
                                </span>
                              </li>
                              <li className="list-group-item">
                                Father's Name:{" "}
                                <span className="fw-bold">
                                  {staffProfile.ffirstName}{" "}
                                  {staffProfile.flastName}
                                </span>
                              </li>
                              <li className="list-group-item">
                                Gender:{" "}
                                <span className="fw-bold">
                                  {staffProfile.gender}
                                </span>
                              </li>
                            </ul>
                            <ul className="list-group">
                              <li className="list-group-item">
                                Code:{" "}
                                <span className="fw-bold">
                                  {staffProfile.code}
                                </span>
                              </li>
                              <li className="list-group-item">
                                DOB:{" "}
                                <span className="fw-bold">
                                  {staffProfile.dob}
                                </span>
                              </li>
                              <li className="list-group-item">
                                Blood Group:{" "}
                                <span className="fw-bold">
                                  {staffProfile.bloodGroup}
                                </span>
                              </li>
                              <li className="list-group-item ">
                                MaritalStatus:{" "}
                                <span className="fw-bold">
                                  {staffProfile.maritalStatus}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-10 general-content">
                        <fieldset className="border border-black p-2">
                          <legend className="float-none w-auto mb-0 general-legend">
                            Contact
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">citz</div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">respons</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      {shows && (
        <MainModalB
          size="xlg"
          fullScreens="lg-down"
          modalFooter={true}
          title="Staff Entry Form"
          show={shows}
          handleClose={handleClose}
        >
          <StaffEntry
            staffProfile={staffProfile}
            handleClose={handleClose}
            modalFooter={true}
          />
        </MainModalB>
      )}
    </>
  );
};

export default General;
