import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../hook";
import { sendsay } from "../../../init";

const UserInfo: FC = () => {
  const session = useAppSelector((s) => s.user.session);
  const [authData, setAuthData] = useState({
    account: "account",
    sublogin: "sublogin",
  });

  useEffect(() => {
    if (session) {
      sendsay.setSession(session);
      sendsay.request({ action: "pong" }).then((response) => {
        let newAuthData = { account: "account", sublogin: "" };
        console.log(response.account === response.sublogin)
        response.account === response.sublogin
          ? (newAuthData.account = response.account)
          : (newAuthData = {
              account: response.account,
              sublogin: response.sublogin,
            });
        setAuthData(newAuthData);
      });
    }
  }, [session]);

  return (
    <div className="UserInfo">
      <span>{authData.account}</span>
      {(authData.sublogin === authData.account) && (
        <>
          <span className="split">:</span>
          <span>{authData.sublogin}</span>
        </>
      )}
    </div>
  );
};

export default UserInfo;
