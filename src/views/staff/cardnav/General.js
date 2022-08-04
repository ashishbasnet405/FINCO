import React, { useContext, useState, useRef, useEffect } from "react";
import { StaffTable } from "../table";
import MainModalB from "src/globalfun/MainModals";
import AddStaff from "../AddStaff";
import StaffEntry from "../StaffEntry";
import { fincoDefault } from "src/axios/axiosinstance";
import { getToken } from "src/globalfun/globalfun";
import "../staffpageall.css";
import { ProfileContext } from "./CardNav";
const General = () => {
  const { profile } = useContext(ProfileContext);
  console.log("profile", profile);
  const { staffId: id } = profile;
  const [staffProfile, setStaffProfile] = useState([]);
  const [shows, setShows] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const fileinp = useRef(null);
  const signinp = useRef(null);

  const makereq = async () => {
    const token = getToken();
    try {
      const response = await fincoDefault.get(
        `/finco/api/auth/staff/profile?staffId=${id}`,
        {
          headers: {
            token: `${token}`,
          },
        }
      );
      setStaffProfile(response.data);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  useEffect(() => {
    if (profile.staffId) {
      console.log("profile in useeffect", profile);
      makereq();
    }
  }, [profile, selectedPhoto]);

  const saveProfileImage = async (url, file) => {
    const token = getToken();
    try {
      let formData = new FormData();
      formData.append("file", file);
      const response = await fincoDefault.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          token: `${token}`,
        },
      });
      alert(response.data.message);
      makereq();
    } catch (err) {
      alert(err);
      console.log("photo save err", err);
    }
  };

  const handleEdit = () => {
    console.log("handleEdit called");
    setShows(true);
  };
  const handleClose = () => setShows(false);

  const handleSubmit = (file, name) => {
    if (name === "profile") {
      setSelectedPhoto(file);
      saveProfileImage(`/finco/file/auth/staff/photo/save?staffId=${id}`, file);
    }
    if (name === "sign") {
      setSelectedPhoto(file);
      saveProfileImage(`/finco/file/auth/staff/sign/save?staffId=${id}`, file);
    }
  };

  const handleChange = (e) => {
    console.log("handle change called", e.target.name);
    const name = e.target.name;
    const [File] = e.target.files;
    handleSubmit(File, name);
  };

  const handleClick = (e) => {
    if (e.target.name === "profile") {
      console.log("click", e.target.name);
      fileinp.current.click();
    }
    if (e.target.name === "sign") {
      console.log("click", e.target.name);
      signinp.current.click();
    }
  };

  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-3 col-xl-2 ">
            <div className="container img-container">
              <div className="row">
                <div className="col-6 col-lg-12 my-2 d-flex flex-column justify-content-lg-start align-items-lg-start justify-content-center">
                  <div className="profile-photo">
                    <img
                      src={`${staffProfile.photo}`}
                      alt="photo"
                      className="img-fluid img-responsive img-thumbnail general-image"
                    />
                  </div>
                  <div className="uploadbtn">
                    <input
                      type="file"
                      ref={fileinp}
                      onChange={handleChange}
                      multiple={false}
                      name="profile"
                      hidden
                    />
                    <button
                      className="btn btn-primary imageuploadbtn"
                      onClick={handleClick}
                      name="profile"
                    >
                      Load profile image
                    </button>
                  </div>
                </div>
                <div className="col-6 col-lg-12 my-2 d-flex flex-column justify-content-lg-start align-items-lg-start justify-content-center">
                  <div className="sign-photo">
                    <img
                      src={`${staffProfile.sign}`}
                      alt="sign"
                      className="img-fluid img-responsive img-thumbnail general-image"
                    />
                  </div>
                  <div className="uploadbtn">
                    <input
                      type="file"
                      ref={signinp}
                      onChange={handleChange}
                      multiple={false}
                      name="sign"
                      hidden
                    />
                    <button
                      className="btn btn-primary imageuploadbtn"
                      onClick={handleClick}
                      name="sign"
                    >
                      Load sign image
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-9 col-xl-10  p-3">
            <div className="container general-info-details px-0">
              <div className="edit-container d-flex justify-content-end my-1">
                <button className="btn btn-primary" onClick={handleEdit}>
                  Edit
                </button>
              </div>
              <div className="row justify-content-start mb-xl-4">
                <div className="col-lg-10 col-xl-6 general-column">
                  <fieldset className="border border-transparent border-1 p-2">
                    <legend className="float-none w-auto mb-0 general-legend">
                      General Information
                    </legend>
                    <div className="d-flex justify-content-between flex-sm-row flex-column">
                      <ul className="list-group list-group-flush general-info-ul">
                        <li className="list-group-item">
                          StaffId:{" "}
                          <span className="fw-bold">
                            {staffProfile.staffId}
                          </span>
                        </li>
                        <li className="list-group-item">
                          Name:{" "}
                          <span className="fw-bold">
                            {staffProfile.firstName} {staffProfile.lastName}
                          </span>
                        </li>
                        <li className="list-group-item">
                          Father's Name:{" "}
                          <span className="fw-bold">
                            {staffProfile.ffirstName} {staffProfile.flastName}
                          </span>
                        </li>
                        <li className="list-group-item">
                          Gender:{" "}
                          <span className="fw-bold">{staffProfile.gender}</span>
                        </li>
                      </ul>
                      <ul className="list-group list-group-flush general-info-ul">
                        <li className="list-group-item">
                          Code:{" "}
                          <span className="fw-bold">{staffProfile.code}</span>
                        </li>
                        <li className="list-group-item">
                          DOB:{" "}
                          <span className="fw-bold">{staffProfile.dob}</span>
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
                <div className="col-lg-10 col-xl-6 general-column">
                  <fieldset className="border border-black p-2">
                    <legend className="float-none w-auto mb-0 general-legend">
                      Contact
                    </legend>
                    <div className="d-flex justify-content-between flex-sm-row flex-column">
                      <ul className="list-group list-group-flush general-info-ul">
                        <li className="list-group-item">
                          Provience:{" "}
                          <span className="fw-bold">{staffProfile.zone}</span>
                        </li>
                        <li className="list-group-item">
                          VDC/MUN:{" "}
                          <span className="fw-bold">{staffProfile.vdc}</span>
                        </li>
                        <li className="list-group-item">
                          Tole:{" "}
                          <span className="fw-bold">{staffProfile.tole}</span>
                        </li>
                        <li className="list-group-item">
                          PhoneNo:{" "}
                          <span className="fw-bold">{staffProfile.phone1}</span>
                        </li>
                      </ul>

                      <ul className="list-group list-group-flush general-info-ul">
                        <li className="list-group-item">
                          District:{" "}
                          <span className="fw-bold">
                            {staffProfile.district}
                          </span>
                        </li>
                        <li className="list-group-item">
                          WardNo:{" "}
                          <span className="fw-bold">{staffProfile.wardNo}</span>
                        </li>
                        <li className="list-group-item">
                          Email:{" "}
                          <span className="fw-bold">{staffProfile.email}</span>
                        </li>
                        <li className="list-group-item">
                          mobile:{" "}
                          <span className="fw-bold">{staffProfile.mobile}</span>
                        </li>
                      </ul>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="row justify-content-start">
                <div className="col-lg-10 col-xl-5 general-column">
                  <fieldset className="border border-black p-2">
                    <legend className="float-none w-auto mb-0 general-legend">
                      CitizenShip Details
                    </legend>
                    <div className="d-flex justify-content-between flex-sm-row flex-column">
                      <ul className="list-group list-group-flush general-info-ul">
                        <li className="list-group-item  ">
                          No:{" "}
                          <span className="fw-bold">
                            {staffProfile.citizenShipNo}
                          </span>
                        </li>
                        <li className="list-group-item ">
                          District:{" "}
                          <span className="fw-bold">
                            {staffProfile.cdistrict}
                          </span>
                        </li>
                      </ul>

                      <ul className="list-group list-group-flush general-info-ul">
                        <li className="list-group-item">
                          Issued Date:{" "}
                          <span className="fw-bold">
                            {staffProfile.cissueDate}
                          </span>
                        </li>
                        <li className="list-group-item ">
                          PanNo:{" "}
                          <span className="fw-bold">{staffProfile.panNo}</span>
                        </li>
                      </ul>
                    </div>
                  </fieldset>
                </div>
                <div className="col-lg-10 col-xl-7 general-column">
                  <fieldset className="border border-black p-2">
                    <legend className="float-none w-auto mb-0 general-legend">
                      Responsibility
                    </legend>
                    <div className="d-flex justify-content-between flex-sm-row flex-column">
                      <ul className="list-group list-group-flush general-info-ul">
                        <li className="list-group-item  ">
                          Position:{" "}
                          <span className="fw-bold">
                            {staffProfile.position}
                          </span>
                        </li>
                        <li className="list-group-item ">
                          JobType:{" "}
                          <span className="fw-bold">
                            {staffProfile.jobType}
                          </span>
                        </li>
                      </ul>

                      <ul className="list-group list-group-flush general-info-ul">
                        <li className="list-group-item ">
                          DepartMent:{" "}
                          <span className="fw-bold">
                            {staffProfile.department}
                          </span>
                        </li>
                        <li className="list-group-item ">
                          Group:{" "}
                          <span className="fw-bold">
                            {staffProfile.groupType}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </fieldset>
                </div>
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
