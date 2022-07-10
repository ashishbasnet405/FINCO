import { cilBlind } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCol,
  CContainer,
  CRow,
  CCardHeader,
  CCard,
  CCardBody,
  CFormLabel,
  CFormSelect,
} from "@coreui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fincoDefault, fincoMemberEndpoints } from "src/axios/axiosinstance";
import { getToken } from "src/globalfun/globalfun";
import "./style.css";

const Member = () => {
  const memberDetailsStatus = useSelector(
    (state) => state.memberDetails.status
  );
  const memberDetailsCategory = useSelector(
    (state) => state.memberDetails.category
  );
  console.log("member from redux status", memberDetailsStatus);
  console.log("member from redux category", memberDetailsCategory);
  const dispatch = useDispatch();
  const [memberStatus, setMemberStatus] = useState([]);
  const [memberCategory, setMemberCategory] = useState([]);
  const [selected, setSelected] = useState({
    status: {},
    category: {},
  });
  const styles = {
    borderRadius: "5px",
    background: "#1a3eb4",
    color: "white",
  };

  const accessToken = getToken();

  const handleDropDown = (...props) => {
    console.log("handledropdown", props);

    if (props[0].type === "status") {
      console.log("status", props[0].value);
      const id = props[0].value.split("!!")[0];
      const item = memberStatus.filter((item) => {
        return id == item.ID;
      });
      console.log("status", item);
      dispatch({ type: "updateMemberDetails", item: item[0] });
    }

    if (props[0].type === "category") {
      console.log("category", props[0].value);
      const id = props[0].value.split("!!")[0];
      const item = memberCategory.filter((item) => {
        return id == item.ID;
      });
      console.log("category", item);
      dispatch({ type: "updateMemberDetails", item: item[0] });
    }
  };

  useEffect(() => {
    Promise.all(
      fincoMemberEndpoints.map((endpoints) =>
        fincoDefault.get(endpoints, {
          headers: {
            token: `${accessToken}`,
          },
        })
      )
    )
      .then(
        axios.spread((status, category) => {
          // console.log("status", status);
          setMemberStatus(status.data);
          // console.log("category", category);
          setMemberCategory(category.data);
          setSelected({
            status: status.data[0],
            category: category.data[0],
          });
        })
      )
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    dispatch({ type: "setMemberDetails", selected });
  }, [selected]);
  // console.log("selected", selected);

  return (
    <>
      <CContainer>
        <CRow>
          <CCol xs="12">
            <CCard style={{ background: "#60779f" }}>
              <CCardHeader component="h5">
                <CIcon
                  icon={cilBlind}
                  customClassName="nav-icon"
                  height={30}
                  width={50}
                  style={{ color: "white" }}
                />
                <span className="d-inline-block text-white">
                  Members Details
                </span>
              </CCardHeader>
              <CCardBody>
                <div className="m-1 p-2 d-flex" style={styles}>
                  <div className="box  d-flex justify-content-around w-75 ">
                    <div className="status  d-flex align-items-center py-sm-1 py-2">
                      <CFormLabel
                        className="form-label pt-2 px-2"
                        style={{ fontSize: "1rem", fontWeight: "bold" }}
                      >
                        Status:
                      </CFormLabel>
                      <CFormSelect
                        size="sm"
                        className=""
                        onChange={(e) => {
                          e.preventDefault();
                          handleDropDown({
                            type: "status",
                            value: e.target.value,
                          });
                        }}
                      >
                        {memberStatus.map((element) => {
                          const { ID, MemberStatus } = element;
                          return (
                            <option value={`${ID}!!${MemberStatus}`} key={ID}>
                              {MemberStatus}
                            </option>
                          );
                        })}
                      </CFormSelect>
                    </div>

                    <div className="category d-flex align-items-center py-sm-1 py-2">
                      <CFormLabel
                        className="form-label pt-2 px-2"
                        style={{ fontSize: "1rem", fontWeight: "bold" }}
                      >
                        Category:
                      </CFormLabel>
                      <CFormSelect
                        size="sm"
                        className=""
                        onChange={(e) => {
                          e.preventDefault();
                          handleDropDown({
                            type: "category",
                            value: e.target.value,
                          });
                        }}
                      >
                        {memberCategory.map((element) => {
                          const { ID, MemberCategory } = element;
                          return (
                            <option value={`${ID}!!${MemberCategory}`} key={ID}>
                              {MemberCategory}
                            </option>
                          );
                        })}
                      </CFormSelect>
                    </div>
                  </div>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Member;
