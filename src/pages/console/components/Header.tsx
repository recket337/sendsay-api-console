import React, { FC, useState } from "react";
import logo from "./../../../assets/img//LOGO.svg";
import fullsreenOn from "./../../../assets/img//fullscreen.svg";
import fullsreenOff from "./../../../assets/img//fscOff.svg";
import UserInfo from "./UserIInfo";
import LogOut from "./LogOut";

const Header: FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    if (!isFullscreen) {
      document.body.requestFullscreen();
      setIsFullscreen(true);
    } else {
      setIsFullscreen(false);
      document.exitFullscreen();
    }
  };
  return (
    <header className="header">
      <div className="header__info">
        <img src={logo} />
        <h1 className="header__info__title">API-консолька</h1>
      </div>
      <div className="header__utils">
        <UserInfo />
        <LogOut />
        <button
          className="header__utils__fullscreen"
          onClick={handleFullscreen}
        >
          <img src={isFullscreen ? fullsreenOn : fullsreenOff} />
        </button>
      </div>
    </header>
  );
};

export default Header;
