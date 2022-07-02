import React, { useState, useEffect, useCallback } from "react";
import MaterialTable from "@material-table/core";
import { Icon } from "@iconify/react";
import { fincoDefault } from "src/axios/axiosinstance";
import { downloadPdf, downloadExcelPopulate } from "../../globalfun/globalfun";
import { useSelector } from "react-redux";
import { CContainer, CFormLabel } from "@coreui/react";
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

  return (
    <>
      <CContainer className="p-2">
        <MaterialTable
          title={title}
          data={data}
          columns={columns}
          options={{
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
        />
      </CContainer>
    </>
  );
};

export default Tables;
