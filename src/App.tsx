import React from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.scss";
import { sendsay } from "./init";
import Console from "./pages/console";
import LoginPage from "./pages/login";

export const isAuth = () => {
  let user = localStorage.getItem("user");
  console.log(user);
  if (!user) {
    return;
  }
  user = JSON.parse(user);
  if (!sendsay.session) {
    sendsay.setSession(localStorage.getItem("session"));
  }
  return true;
};

console.log("authed", isAuth());

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoginPage /> // isAuth() ? <Navigate to="/console" replace /> :
        }
      />
      <Route
        path="/login"
        element={
          <LoginPage /> // isAuth() ? <Navigate to="/console" replace /> :
        }
      />
      <Route
        path="/console"
        element={
          <Console /> //isAuth() ? <Console /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}

export default App;
