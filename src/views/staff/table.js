import React, { useState, useEffect, createContext } from "react";
import MaterialTable, { MTableBodyRow } from "@material-table/core";
import { Icon } from "@iconify/react";
import { fincoDefault } from "src/axios/axiosinstance";
import { downloadPdf, downloadExcelPopulate } from "../../globalfun/globalfun";
import { useSelector } from "react-redux";
import { CContainer, CFormLabel } from "@coreui/react";
import AddModals from "src/globalfun/AddModals";
import CardNav from "./cardnav/CardNav";
import { getToken } from "../../globalfun/globalfun";
export const ModalNavContext = createContext();
const Tables = ({ data }) => {
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
    { title: "JobType", field: "JobType" },
    { title: "StaffGroup", field: "StaffGroup" },
    { title: "PanNo", field: "PanNo" },
    { title: "Gender", field: "Gender" },
    { title: "District", field: "District" },
    { title: "Vdc", field: "Vdc" },
    { title: "Tole", field: "Tole" },
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [rowData, setRowData] = useState("");
  const [staffProfile, setStaffProfile] = useState([]);
  const token = getToken();

  const makereq = async (id) => {
    try {
      const response = await fincoDefault.get(
        `/finco/api/auth/staff/profile?staffId=${id}`,
        {
          headers: {
            token: `${token}`,
          },
        }
      );
      console.log("response", response);
      setStaffProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (event, rowData) => {
    setRowData(rowData);
    makereq(rowData.StaffId);
    handleShow();
    // alert(`event.target.tagName = '${rowData}'`);
  };
  return (
    <>
      <CContainer className="p-2">
        <MaterialTable
          title={title}
          data={data}
          columns={columns}
          options={{
            // selection: true,
            headerStyle: {
              background: "rgb(84,142,239)",
              color: "white",
              fontWeight: "bold",
              position: "sticky",
              top: 0,
            },
            maxBodyHeight: "650px",
            sorting: true,
            columnsButton: true,
            // searchFieldVariant:"outlined",
            paginationType: "stepped",
            showFirstLastPageButtons: true,
          }}
          actions={[
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
                // downloadExcel(excelData)
                downloadExcelPopulate(excelData);
              },
            },
            {
              icon: () => (
                <Icon
                  icon="mdi:file-pdf-box"
                  color={"red"}
                  width="20"
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
          // components={{
          //   Row: (props) => {
          //     return (
          //       <MTableBodyRow
          //         {...props}
          //         persistEvents
          //         onRowClick={handleClick}
          //       />
          //     );
          //   },
          // }}
          onRowClick={handleClick}
        />
      </CContainer>
      {show && (
        <ModalNavContext.Provider
          value={{ rowData, staffProfile, handleClose, handleShow }}
        >
          <AddModals
            title="General"
            show={show}
            handleClose={handleClose}
            footers={false}
          >
            <CardNav />
          </AddModals>
        </ModalNavContext.Provider>
      )}
    </>
  );
};

export default Tables;
