import React from "react";
import MaterialTable from "@material-table/core";

import { Icon } from "@iconify/react";

import { downloadExcelPopulate, downloadPdf } from "../../globalfun/globalfun";
import { useSelector } from "react-redux";

const Tables = ({ data }) => {
  const columns = [
    { title: "ID", field: "Id", width: "10%" },
    { title: "Code", field: "Code" },
    { title: "Name", field: "Name" },
    { title: "EstdDate", field: "EstdDate" },
    // { title: "Email", field: "email" },
    // { title: "Address", field: "address" },
    // { title: "Province", field: "province" },
    { title: "PhoneNumber", field: "PhoneNo" },
  ];

  const excelData = {
    data: data,
    sheetName: "Records",
    fileName: "OfficeList.xlsx",
  };
  const pdfData = {
    data: data,
    pdfTitle: "Unique Cooperative Ltd.",
    pdfName: "OfficeList.pdf",
    columns: columns,
  };

  const officeName = useSelector((state) => state.dropDownData.selected.name);
  const title = `Office Name:${officeName}`;

  return (
    <>
      {/* <CContainer className=""> */}
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
          // searchFieldAlignment: "left",
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          // toolbarButtonAlignment: "left",
          // showTitle: false,
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
      {/* </CContainer> */}
    </>
  );
};

export default Tables;
