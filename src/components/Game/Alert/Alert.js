import React, { useState, useEffect } from "react";
import successIcon from "../../../images/successIcon.svg";
import errorIcon from "../../../images/dangerIcon.svg";

import {
  AlertContainert,
  ToastAlert,
  ToastIcon,
  ToastMsg,
} from "./Alert.elements";
// import successIcon from "../../../images/successIcon.svg";

function Alert({ msg, open, type, icon }) {
  const handleIconType = (icon) => {
    switch (icon) {
      case "success":
        return successIcon;
      case "error":
        return errorIcon;
      default:
        return "#eee";
    }
  };

  return (
    <AlertContainert className={open ? `toast-visible` : null}>
      <ToastAlert type={type}>
        <ToastIcon src={handleIconType(icon)} />
        <ToastMsg type={type}>{msg}</ToastMsg>
      </ToastAlert>
    </AlertContainert>
  );
}
export default Alert;
