import React, { FC } from "react";
import Button from "../../components/styled/Button";
import Form from "../../components/styled/Form";
import Link from "../../components/styled/Link";
import TextField from "../../components/styled/TextField";
import logo from "./../../assets/img/LOGO.svg";

const LoginPage: FC = () => {
  return (
    <main className="LoginPage">
      <img src={logo} />
      <Form>
        <h1 className="LoginPage__headline">API-консолька</h1>
        <TextField titleText="Логин" maxLength={32} />
        <TextField
          titleText="Сублогин"
          optionalText="Опционально"
          maxLength={32}
        />
        <TextField titleText="Пароль" type="password" maxLength={32} />
        <Button width="110px">Войти</Button>
      </Form>
      <Link href="https://github.com/recket337">@github:recket337</Link>
    </main>
  );
};
export default LoginPage;
