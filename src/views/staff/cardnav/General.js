import React, { useContext, useState } from "react";
import { StaffTable } from "../table";
import MainModalB from "src/globalfun/MainModals";
import AddStaff from "../AddStaff";
import StaffEntry from "../StaffEntry";
const General = (sta) => {
  const { staffProfile } = useContext(StaffTable);
  const [shows, setShows] = useState(false);

  const handleEdit = () => {
    console.log("handleEdit called");
    setShows(true);
  };
  const handleShow = () => setShows(true);
  const handleClose = () => setShows(false);
  return (
    <>
      <div className="container  bg-light p-2" id="general">
        <div className="d-flex justify-content-sm-around">
          <div className="d-flex my-2 justify-content-between flex-column flex-sm-row flex-fill">
            <h3 className="text-center">General Information</h3>
            <button className="btn btn-primary" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 border border-transparent">
            <div className="container">
              <div className="row">
                <div className="col-12 pb-2">
                  <div className="text-center">
                    <img
                      src={`${staffProfile.photo}`}
                      alt="photo"
                      className="img-fluid text-center"
                      style={{ height: "200px", width: "400px" }}
                    />
                  </div>
                  <div className="btn btn-success">Load profile From File</div>
                </div>
                <div className="col-12">
                  <div className="text-center">
                    <img
                      src={`${staffProfile.sign}`}
                      alt="sign"
                      className="img-fluid"
                      style={{ height: "200px", width: "400px" }}
                    />
                  </div>
                  <div className="btn btn-success">Load sign From File</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div className="general border border-transparent border-1 p-2 mb-1">
              <p className="fs-5 mb-0">General</p>
              <div className="col1 d-sm-flex justify-content-sm-between">
                <ul className="list-group">
                  <li className="list-group-item bg-light py-1 ">
                    StaffId:{" "}
                    <span className="fw-bold">{staffProfile.staffId}</span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    Name:{" "}
                    <span className="fw-bold">
                      {staffProfile.firstName} {staffProfile.lastName}
                    </span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    Father's Name:{" "}
                    <span className="fw-bold">
                      {staffProfile.ffirstName} {staffProfile.flastName}
                    </span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    Gender:{" "}
                    <span className="fw-bold">{staffProfile.gender}</span>
                  </li>
                </ul>
                <ul className="list-group">
                  <li className="list-group-item bg-light py-1 ">
                    Code: <span className="fw-bold">{staffProfile.code}</span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    DOB: <span className="fw-bold">{staffProfile.dob}</span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    Blood Group:{" "}
                    <span className="fw-bold">{staffProfile.bloodGroup}</span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    MaritalStatus:{" "}
                    <span className="fw-bold">
                      {staffProfile.maritalStatus}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact border border-transparent border-1 p-2 mb-1">
              <p className="fs-5 mb-0">Contact</p>
              <div className="col1 d-sm-flex justify-content-sm-between">
                <ul className="list-group">
                  <li className="list-group-item bg-light py-1 ">
                    Provience:{" "}
                    <span className="fw-bold">{staffProfile.zone}</span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    VDC/MUN: <span className="fw-bold">{staffProfile.vdc}</span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    Tole: <span className="fw-bold">{staffProfile.tole}</span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    PhoneNo:{" "}
                    <span className="fw-bold">{staffProfile.phone1}</span>
                  </li>
                </ul>

                <ul className="list-group">
                  <li className="list-group-item bg-light py-1 ">
                    District:{" "}
                    <span className="fw-bold">{staffProfile.district}</span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    WardNo:{" "}
                    <span className="fw-bold">{staffProfile.wardNo}</span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    Email: <span className="fw-bold">{staffProfile.email}</span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    mobile:{" "}
                    <span className="fw-bold">{staffProfile.mobile}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="citizen border border-transparent border-1 p-2 mb-1">
              <p className="fs-5 mb-0">CitizenShip Details</p>
              <div className="col1 d-sm-flex justify-content-sm-between">
                <ul className="list-group">
                  <li className="list-group-item bg-light py-1 ">
                    No:{" "}
                    <span className="fw-bold">
                      {staffProfile.citizenShipNo}
                    </span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    District:{" "}
                    <span className="fw-bold">{staffProfile.cdistrict}</span>
                  </li>
                </ul>

                <ul className="list-group">
                  <li className="list-group-item bg-light py-1 ">
                    Issued Date:{" "}
                    <span className="fw-bold">{staffProfile.cissueDate}</span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    PanNo: <span className="fw-bold">{staffProfile.panNo}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="responsibility border border-transparent border-1 p-2 mb-1">
              <p className="fs-5 mb-0">Responsibility</p>
              <div className="col1 d-sm-flex justify-content-sm-between">
                <ul className="list-group">
                  <li className="list-group-item bg-light py-1 ">
                    Position:{" "}
                    <span className="fw-bold">{staffProfile.position}</span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    JobType:{" "}
                    <span className="fw-bold">{staffProfile.jobType}</span>
                  </li>
                </ul>

                <ul className="list-group">
                  <li className="list-group-item bg-light py-1 ">
                    DepartMent:{" "}
                    <span className="fw-bold">{staffProfile.department}</span>
                  </li>
                  <li className="list-group-item bg-light py-1">
                    Group:{" "}
                    <span className="fw-bold">{staffProfile.groupType}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
          <StaffEntry staffProfile={staffProfile} />
        </MainModalB>
      )}
    </>
  );
};

export default General;
