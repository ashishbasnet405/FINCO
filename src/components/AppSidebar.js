import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CImage,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { AppSidebarNav } from "./AppSidebarNav";
import { logoNegative } from "src/assets/brand/logo-negative";
// import { sygnet } from "src/assets/brand/sygnet";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
// sidebar nav config
import navigation from "../_nav";
import fincoLogos from "./fincoLogos.png";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const imgunfoldable = {
    height: "40px",
    width: "50px",
  };
  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-flex py-1" to="/">
        {/* {unfoldable ? <h5 className="">FINCO</h5> : <h1>FINCO</h1>} */}
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
        {unfoldable ? (
          <img src={fincoLogos} alt="logo" className="" style={imgunfoldable} />
        ) : (
          <img
            src={fincoLogos}
            alt="logo"
            className=""
            height={80}
            width={150}
          />
        )}
      </CSidebarBrand>

      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>

      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
        }
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
