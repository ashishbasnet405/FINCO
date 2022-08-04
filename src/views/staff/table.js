import React, { useState, useEffect, createContext } from "react";
import MaterialTable, { MTableBodyRow } from "@material-table/core";
import { Icon } from "@iconify/react";
import { fincoDefault } from "src/axios/axiosinstance";
import { downloadPdf, downloadExcelPopulate } from "../../globalfun/globalfun";
import { useSelector } from "react-redux";
import { CContainer, CFormLabel } from "@coreui/react";
import { getToken } from "../../globalfun/globalfun";
import MainModals from "src/globalfun/MainModals";
import { useDispatch } from "react-redux";
import CardNav from "./cardnav/CardNav";
import "../offices/customstyle.css";
import StaffEntry from "./StaffEntry";
import AddStaff from "./AddStaff";
import { useNavigate } from "react-router-dom";

export const StaffTable = createContext();
const Tables = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getToken();
  const [shows, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [staffProfile, setStaffProfile] = useState([]);

  const [staffEntry, setStaffEntry] = useState(false);
  const handleEntryModalShow = () => setStaffEntry(true);
  const handleEntryModalClose = () => setStaffEntry(false);

  const columns = [
    { title: "Id", field: "StaffId" },
    { title: "FirstName", field: "Firstname" },
    { title: "LastName", field: "Lastname" },
    { title: "Code", field: "Code" },
    { title: "Dob", field: "Dob" },
    { title: "MaritalStatus", field: "MaritalStatus" },
    { title: "Mobile", field: "Mobile" },
    { title: "Email", field: "Email" },
    { title: "BloodGroup", field: "BloodGroup" },
    { title: "JoinDate", field: "JoinDate" },
    {
      title: "JobType",
      field: "JobType",
      cellStyle: {
        whiteSpace: "nowrap",
      },
    },
    { title: "StaffGroup", field: "StaffGroup" },
    { title: "PanNo", field: "PanNo" },
    { title: "Gender", field: "Gender" },
    { title: "District", field: "District" },
    { title: "Vdc", field: "Vdc" },
    { title: "Tole", field: "Tole", cellStyle: { whiteSpace: "nowrap" } },
    { title: "WardNo", field: "WardNo" },
  ];

  const excelData = {
    data: data,
    sheetName: "Records",
    fileName: "StaffList.xlsx",
  };
  const pdfData = {
    data: data,
    pdfTitle: "Staff Details:",
    pdfName: "StaffList.pdf",
    columns: columns,
  };
  const officeName = useSelector((state) => state.dropDownData.selected.name);

  const title = `Office Name:${officeName}`;

  const handleClick = (event, rowData) => {
    navigate(`/staff/profile`, { state: { data: rowData } });
  };
  const TableCellStyle = { border: "1px solid #e5e5e5" };
  return (
    <>
      <CContainer className="p-2">
        <MaterialTable
          title={title}
          data={data}
          columns={columns}
          options={{
            cellStyle: TableCellStyle,
            // selection: true,
            padding: "dense",
            headerStyle: {
              background: "rgb(84,142,239)",
              color: "white",
              fontWeight: "bold",
              position: "sticky",
              top: 0,
              whiteSpace: "nowrap",
            },
            rowStyle: {
              height: "45px",
            },
            padding: "dense",
            sorting: true,
            columnsButton: true,
            paginationType: "stepped",
            showFirstLastPageButtons: true,
            maxBodyHeight: 300,
          }}
          actions={[
            {
              icon: () => (
                <Icon
                  icon="ant-design:plus-square-filled"
                  color="black"
                  width="23"
                  id={1}
                  inline={true}
                />
              ),
              tooltip: "Add Staff",
              isFreeAction: true,
              onClick: (event) => {
                handleEntryModalShow();
              },
            },
            {
              icon: () => (
                <Icon
                  icon="mdi:file-excel"
                  width="20"
                  inline={true}
                  id={1}
                  color={"green"}
                />
              ),
              tooltip: "Export To Excel",
              isFreeAction: true,
              onClick: (event) => {
                downloadExcelPopulate(excelData);
              },
            },
            {
              icon: () => (
                <Icon
                  icon="mdi:file-pdf-box"
                  color={"red"}
                  id={1}
                  inline={true}
                />
              ),
              tooltip: "Download as pdf",
              isFreeAction: true,
              onClick: (event) => {
                downloadPdf(pdfData);
              },
            },
          ]}
          onRowClick={handleClick}
        />
      </CContainer>
      {shows && (
        <StaffTable.Provider value={{ staffProfile, handleClose }}>
          <MainModals
            size="lg"
            fullScreens="md-down"
            modalFooter={false}
            title="Staff Entry"
            show={shows}
            handleClose={handleClose}
          >
            <CardNav />
          </MainModals>
        </StaffTable.Provider>
      )}
      {staffEntry && (
        <MainModals
          size="lg"
          fullScreens="lg-down"
          modalFooter={true}
          title="Staff Entry"
          show={staffEntry}
          handleClose={handleEntryModalClose}
        >
          <StaffEntry modalFooter={true} handleClose={handleEntryModalClose} />
        </MainModals>
      )}
    </>
  );
};

export default Tables;
