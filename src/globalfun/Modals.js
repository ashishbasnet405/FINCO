import React from "react";
import { useSelector } from "react-redux";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from "@coreui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Modals = (props) => {
  const {
    status: visible,
    statusCode,
    message,
  } = useSelector((state) => state.modalVisible);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <CModal
        visible={visible}
        onClose={() => dispatch({ type: "setModal", modalVisible: false })}
      >
        <CModalHeader
          onClose={() => dispatch({ type: "setModal", modalVisible: false })}
          className={
            !props.modalType ? "bg-danger text-white" : "bg-success text-white"
          }
        >
          <CModalTitle>
            {!props.modalType ? "Login Error" : "Login Success"}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h3 className={!props.modalType ? "text-danger" : "text-success"}>
            {statusCode}:{message}
          </h3>
        </CModalBody>
        <CModalFooter>
          <CButton
            onClick={() => dispatch({ type: "setModal", modalVisible: false })}
            color={!props.modalType ? "danger" : "success"}
          >
            Close
          </CButton>
          <CButton
            color="primary"
            onClick={() => dispatch({ type: "setModal", modalVisible: false })}
          >
            Try Again
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Modals;
