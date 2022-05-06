import React, { FC } from "react";

const UserInfo: FC = () => {
  return (
      <div className="UserInfo">
          <span>some@email.com</span>
          <span className="split">:</span>
          <span>sublogin</span>
      </div>
  );
};

export default UserInfo;