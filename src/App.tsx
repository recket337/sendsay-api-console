import React, { useEffect, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.scss";
import { useAppSelector } from "./hook";
import { sendsay } from "./init";
import Console from "./pages/console";
import LoginPage from "./pages/login";
import { setAuthenticated, setSession } from "./store/userSlice";

// export const isAuth = () => {
//   let user = localStorage.getItem("user");
//   console.log(user);
//   if (!user) {
//     return;
//   }
//   user = JSON.parse(user);
//   if (!sendsay.session) {
//     sendsay.setSession(localStorage.getItem("session"));
//   }
//   return true;
// };

// console.log("authed", isAuth());

function App() {
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const isAuthenticated = useAppSelector(s => s.user.isAuthenticated)
  useEffect(() => {
    const session = localStorage.getItem("session");
    if (session) { 
      sendsay.setSession(session);
      sendsay
        .request({
          action: "pong",
        })
        .then(() => {
          setAuthenticated(true);
          setSession(session);
        })
        .catch((e) => {
          setAuthenticated(false);
          localStorage.removeItem("session");
        })
        .finally(() => setIsAuthChecked(true));
    } else {
      setIsAuthChecked(true);
    }
  }, [])


  let avaliableRoute, redirect;
  if (isAuthChecked) {
    if (isAuthenticated) {
      avaliableRoute = <Route path="/main" component={Console} />;
      redirect = <Redirect from="/" to="/main" />;
    } else {
      avaliableRoute = <Route path="/login" component={LoginPage} />;
      redirect = <Redirect from="/" to="/login" />;
    }
  }
  return (
    <div className="App">
      <Switch>
        {avaliableRoute}
        {redirect}
      </Switch>
    </div>
  )
}

export default App;
