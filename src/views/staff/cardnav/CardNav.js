import React, { useState, useEffect } from "react";
import General from "./General";
import JobHistory from "./JobHistory";
import Document from "./Document";
import LeaveHistory from "./LeaveHistory";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { getToken } from "src/globalfun/globalfun";
import { fincoDefault } from "src/axios/axiosinstance";

const CardNav = ({ rowData, staffProfile }) => {
  const [key, setKey] = useState("general");
  return (
    <>
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
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
      </div>
    </>
  );
};

export default CardNav;
