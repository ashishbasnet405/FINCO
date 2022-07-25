import React, { useRef } from "react";
import MaterialTable, { MTableToolbar } from "@material-table/core";
import ReactToPrint from "react-to-print";
import Toolbar from "@material-ui/core";
import { Icon } from "@iconify/react";
import { AddCircleOutlineRounded } from "@material-ui/icons";
import { downloadExcelPopulate, downloadPdf } from "../../globalfun/globalfun";
import { CContainer } from "@coreui/react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import "./customstyle.css";

const Tables = ({ data }) => {
  console.log("office data", data);
  const columns = [
    { title: "ID", field: "Id", width: "10%" },
    { title: "Code", field: "Code" },
    { title: "Name", field: "Name" },
    { title: "EstdDate", field: "EstdDate" },
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
          rowStyle: {
            height: "40px",
          },
          padding: "dense",
          sorting: true,
          columnsButton: true,
          // searchFieldVariant: "outlined",
          // searchFieldAlignment: "left",
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          // toolbarButtonAlignment: "left",
          showTitle: true,
          maxBodyHeight: 250,
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
