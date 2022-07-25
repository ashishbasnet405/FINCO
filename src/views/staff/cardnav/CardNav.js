import React, { useState, useEffect, createContext } from "react";
import General from "./General";
import JobHistory from "./JobHistory";
import Document from "./Document";
import LeaveHistory from "./LeaveHistory";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const CardNav = ({ staffProfile }) => {
  const [key, setKey] = useState("general");
  return (
    <>
      <div className="card">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="general" title="General">
            <General />
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
    </>
  );
};

export default CardNav;
