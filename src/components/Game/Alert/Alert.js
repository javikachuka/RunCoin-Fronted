import React, { useState, useEffect } from "react";

import {
  AlertContainert,
  ToastAlert,
  ToastIcon,
  ToastMsg,
} from "./Alert.elements";
// import successIcon from "../../../images/successIcon.svg";

function Alert({ msg, open, type, icon }) {
  return (
    <AlertContainert className={open ? `toast-visible` : null}>
      <ToastAlert type={type}>
        <ToastIcon src={icon} />
        <ToastMsg type={type}>{msg}</ToastMsg>
      </ToastAlert>
    </AlertContainert>
  );
}
export default Alert;
