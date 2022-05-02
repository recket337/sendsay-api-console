import React, { FC } from "react";
import Link from "../../components/styled/link";
import logo from "./../../assets/img/LOGO.svg";

const LoginPage: FC = () => {
    return (
        <main className="LoginPage">
            <img src={logo} />
            <Link href="https://github.com/recket337">@github:recket337</Link>
        </main>

    );
}
export default LoginPage;