import React, { FC, memo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { sendsay } from "../../../init";
import { setAuthenticated, setSession } from "../../../store/userSlice";
import logout from "./../../../assets/img/log-out.svg";

const LogOut: FC = () => {
  const session = useAppSelector((s) => s.user.session);
  const dispatch = useAppDispatch();

  function logOut() {
    sendsay.setSession(session);
    sendsay.request({
      action: "logout",
    });
    localStorage.removeItem("session");
    dispatch(setSession(null));
    dispatch(setAuthenticated(false));
  }

  return (
    <button className="header__utils__logout" onClick={logOut}>
      Выйти
      <img src={logout} />
    </button>
  );
};
export default memo(LogOut);
