import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
// import XlsxPopulate from "xlsx-populate";
import * as XlsxPopulate from "xlsx-populate/browser/xlsx-populate";

const alphabetList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const getToken = () => {
  const data = JSON.parse(localStorage.getItem("fincoLoginDetails"));
  const token = data.token;
  if (token) {
    return token;
  } else {
    return false;
  }
};

// export const downloadExcel = ({data,sheetName,fileName}) => {
//     // const res = trans();
//       if(data){
//         const fileType ="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

//         //first create the worksheet
//        const workSheet = XLSX.utils.json_to_sheet(data) //data may be the state

//        //second create the workBook
//        const workBook  = XLSX.utils.book_new()

//        //third append the worksheet in work book with name
//        XLSX.utils.book_append_sheet(workBook,workSheet,sheetName) //sheet name

//        XLSX.utils.h

//        //create a buffer to deal with bulk data
//        let buf = XLSX.write(workBook,{bookType:"xlsx",type:"buffer"})

//        //write a workbook data i.e. binary string
//        XLSX.write(workBook,{bookType:"xlsx",type:"binary"})

//        //download a file
//        XLSX.writeFile(workBook,fileName)
//       }
// }

export const downloadPdf = ({ data, pdfTitle, pdfName, columns }) => {
  console.log("downloadPdf called");

  let doc = new jsPDF("p", "mm", [430, 430]);

  //create a pdf title
  doc.text(pdfTitle, 15, 10);

  //to insert a table
  autoTable(doc, {
    body: data,
    columns: columns.map((col) => {
      return { ...col, dataKey: col.field };
    }),

    //to draw a image
    // didDrawCell: function(data) {
    //         if (data.column.index === 3 && data.cell.section === 'body') {
    //           console.log("data",data)
    //           var td = data.cell.raw;
    //           var img = imgRef;
    //           var dim = data.cell.height - data.cell.padding('vertical');
    //           var textPos = data.cursor;
    //           console.log("textpos",textPos)
    //           doc.addImage("https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg", textPos.x,  textPos.y, dim, dim);
    //         }
    //       }
    theme: "grid",
    columnStyles: {
      0: { cellWidth: 10 },
      1: { cellWidth: 25 },
      2: { cellWidth: 20 },
      3: { cellWidth: 25 },
      4: { cellWidth: 25 },
      5: { cellWidth: 30 },
      6: { cellWidth: 25 },
      7: { cellWidth: 25 },
      8: { cellWidth: 25 }, //blood
      9: { cellWidth: 25 },
      10: { cellWidth: 25 }, //jobtype
      11: { cellWidth: 22 },
      12: { cellWidth: 20 }, //panno
      13: { cellWidth: 22 },
      14: { cellWidth: 20 },
      15: { cellWidth: 20 },
      16: { cellWidth: 30 },
      17: { cellWidth: 20 },
    },
    styles: {
      fontSize: 10,
      theme: "grid",
    },
    headStyles: {
      lineWidth: 0.5,
      fontSize: 10,
      fontStyle: "bold",
      fillColor: "#f9c46b",
      lineColor: "#ffffff",
    },
    bodyStyles: {
      fillColor: "#e3e3e3",
      lineWidth: 0.5,
      lineColor: "#ffffff",
    },
  });

  //save the doc with filename
  doc.save(pdfName);
};

function addStyle(workbookBlob, dataInfo) {
  return XlsxPopulate.fromDataAsync(workbookBlob).then((workbook) => {
    workbook.sheets().forEach((sheet) => {
      sheet.usedRange().style({
        fontFamily: "Arial",
        verticalAlignment: "center",
      });

      alphabetList.forEach((name) => {
        sheet.column(name).width(18);
      });

      sheet.range(dataInfo.titleRange).merged(true).style({
        bold: true,
        horizontalAlignment: "center",
        verticalAlignment: "center",
      });

      sheet.range(dataInfo.theadRange).style({
        fill: "edd2cb",
        bold: false,
        horizontalAlignment: "center",
      });

      sheet.range(dataInfo.tbodyRange).style({
        horizontalAlignment: "left",
        fill: "f1e8e6",
      });

      sheet.range(dataInfo.tableRange).style({
        border: {
          style: "thin",
          color: "000000",
          direction: "both",
        },
      });
    });

    return workbook
      .outputAsync()
      .then((workbookBlob) => URL.createObjectURL(workbookBlob));
  });
}

function handleExport({ finalData, columnLength }) {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

  //create a sheet
  const workSheet = XLSX.utils.json_to_sheet(finalData, {
    skipHeader: true,
  });

  //create a workbook
  const workBook = XLSX.utils.book_new();

  //append sheet to workbook
  XLSX.utils.book_append_sheet(workBook, workSheet, "Staff List");

  const excelBuffer = XLSX.write(workBook, { bookType: "xlsx", type: "array" });
  const workbookBlob = new Blob([excelBuffer], { type: fileType });
  const dataInfo = {
    titleCell: "A2",
    titleRange: `A1:B2`,

    theadRange: `A3:${alphabetList[columnLength - 1]}3`, //table header from A3:S3
    tbodyRange: `A4:${alphabetList[columnLength - 1]}${finalData.length}`, //table body from A4:S[total item]
    tableRange: `A3:${alphabetList[columnLength - 1]}${finalData.length}`, //from table head A3:S[total item]
  };
  return addStyle(workbookBlob, dataInfo);
}

export const downloadExcelPopulate = ({ data, sheetName, fileName }) => {
  let columnKeys = [];
  for (const keys in data[0]) {
    columnKeys.push(keys);
  }

  const tableHead = {};
  const table = [];
  for (let i = 0; i < columnKeys.length; i++) {
    const keys = alphabetList[i];
    tableHead[keys] = columnKeys[i];
  }
  table.push(tableHead);

  const title = [{ A: "Details:" }, {}];
  const finalData = [...title, ...table];

  let obj = {};
  data.forEach((element, index) => {
    for (let key in tableHead) {
      const index = tableHead[key];
      obj[key] = element[index];
    }
    finalData.push({ ...obj });
  });

  const res = {
    finalData,
    columnLength: columnKeys.length,
    sheetName,
  };

  handleExport(res).then((url) => {
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", url);
    downloadAnchorNode.setAttribute("download", fileName);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  });
};
