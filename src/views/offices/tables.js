import React, { useState, useEffect, useCallback } from "react";
import MaterialTable from "@material-table/core";

import { Icon } from "@iconify/react";

import { fincoDefault } from "src/axios/axiosinstance";
import { downloadExcelPopulate, downloadPdf } from "../../globalfun/globalfun";
import { CContainer } from "@coreui/react";
import { useSelector } from "react-redux";

const Tables = ({ data }) => {
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Address", field: "address" },
    { title: "Province", field: "province" },
    { title: "PhoneNumber", field: "phoneNo" },
  ];

  const excelData = {
    data: data,
    sheetName: "Records",
    fileName: "OfficeList.xlsx",
  };
  const pdfData = {
    data: data,
    pdfTitle: "Office Details:",
    pdfName: "OfficeList.pdf",
    columns: columns,
  };

  return (
    <>
      <CContainer className="p-2">
        <MaterialTable
          title="Office Details"
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
            showFirstLastPageButtons: false,
          }}
          actions={[
            {
              icon: () => (
                <Icon
                  icon="mdi:file-excel"
                  width="25"
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
                  width="26"
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
