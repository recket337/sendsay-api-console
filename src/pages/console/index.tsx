import React, { FC, memo, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { isAuth } from "../../App";
import Button from "../../components/styled/Button";
import { sendsay } from "../../init";
import logo from "./../../assets/img/LOGO.svg";
import fullsreenOn from "./../../assets/img/fullscreen.svg";
import fullsreenOff from "./../../assets/img/fscOff.svg";
import format from "./../../assets/img/align-right.svg";
import logout from "./../../assets/img/log-out.svg";
import Link from "../../components/styled/Link";
import SplittedTextarea from "../components/SplitPane";
import UserInfo from "../components/UserIInfo";

const Console: FC = () => {
  const [fullcreenEnabled, toggleFullscreen] = useState(false);

  const navigate = useNavigate();
  // console.log(!isAuth)
  // !isAuth() && navigate('/console')

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    localStorage.removeItem("session");

    sendsay.setSession(localStorage.getItem("session"));
    sendsay.request({
      action: "logout",
    });

    navigate("/login");
    console.log("redirect");
  };

  const handleFullscreen = () => {
    if(fullcreenEnabled) {
      document.body.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    toggleFullscreen(!fullcreenEnabled);
  };

  return (
    <div className="ConsolePage">
      <header className="header">
        <div className="header__info">
          <img src={logo} />
          <h1 className="header__info__title">API-консолька</h1>
        </div>
        <div className="header__utils">
          <UserInfo />
          <button className="header__utils__logout" onClick={logOut}>
            Выйти
            <img src={logout} />
          </button>
          <button
            className="header__utils__fullscreen"
            onClick={handleFullscreen}
          >
            <img src={fullcreenEnabled ? fullsreenOn : fullsreenOff} />
          </button>
        </div>
      </header>
      <section className="history">
        <ul className="history__list"></ul>
        <button className="history__clearButton" />
      </section>
      <SplittedTextarea />
      <footer className="footer">
        <Button width="120px">Отправить</Button>
        <Link href="https://github.com/recket337">@github:recket337</Link>
        <button className="footer__format">
          <img src={format} />
          Форматировать
        </button>
      </footer>
    </div>
  );
};
export default memo(Console);
