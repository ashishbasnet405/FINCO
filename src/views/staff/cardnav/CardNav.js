import React, { useState, useEffect, createContext } from "react";
import General from "./General";
import JobHistory from "./JobHistory";
import Document from "./Document";
import LeaveHistory from "./LeaveHistory";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../staffpageall.css";
export const ProfileContext = createContext();
const CardNav = ({ staffprofile: { data: staffprofile }, profile }) => {
  const [key, setKey] = useState("general");
  return (
    <>
      <ProfileContext.Provider value={{ profile }}>
        <div className="card editmodalnav">
          {/* <div className=" card-header-pills">Staff Profile</div> */}
          <div className="card-body profile-card-body">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="general" title="General">
                <General staffProfile={staffprofile} />
              </Tab>
              <Tab eventKey="jobhistory" title="JobHistory">
                <JobHistory />
              </Tab>
              <Tab eventKey="document" title="Document">
                <Document />
              </Tab>
              <Tab eventKey="leavehistory" title="LeaveHistory">
                <LeaveHistory />
              </Tab>
            </Tabs>
          </div>
        </div>
      </ProfileContext.Provider>
    </>
  );
};

export default CardNav;
