import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CFormSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilMenu } from "@coreui/icons";
import { AppBreadcrumb } from "./index";
import { AppHeaderDropdown } from "./header/index";

const AppHeader = () => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState({ id: "", name: "" });
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const states = useSelector((state) => state);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fincoLoginDetails"));
    if (data) {
      setItems({ ...data });
      setSelected({
        id: data.detail.officeList[0].id,
        name: data.detail.officeList[0].name,
      });
    }
  }, []);

  useEffect(() => {
    dispatch({ type: "setOfficeDetails", selected });
  }, [selected]);

  const handleDropDown = (e) => {
    // console.log(e.target.selectedOptions[0].label)  //return the txt of selected option
    const id = e.target.value.split("!!")[0];
    const name = e.target.value.split("!!")[1];
    setSelected({ ...selected, id, name });
  };
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderNav className="d-none d-md-flex">
          <CHeaderToggler
            className="ps-1"
            onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>

          <CNavLink to="/dashboard" component={NavLink}>
            Dashboard
          </CNavLink>
          <CNavItem></CNavItem>
        </CHeaderNav>

        <CHeaderNav>
          <CFormSelect size="md" onChange={handleDropDown}>
            {items.token &&
              items.detail.officeList.map((element) => {
                const { id, name } = element;
                return (
                  <option value={`${id}!!${name}`} key={id}>
                    {name}
                  </option>
                );
              })}
          </CFormSelect>
        </CHeaderNav>

        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
