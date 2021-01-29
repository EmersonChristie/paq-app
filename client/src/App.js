import "./styles/App.css";
import Layout from "./components/shared/Layout/Layout";
import CrmLayout from "./components/shared/CrmLayout/CrmLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Crm/Home/Home";
import Login from "./components/pages/Login/Login";
import { useEffect, useState } from "react";

import getUser from "./api/routes/user.routes";
import useApiFetch from "./api/hooks/useApiFetch";

function App() {
  const { isLoading, error, data, execute } = useApiFetch();

  const [user, setUser] = useState(null);

  useEffect(async () => {
    if (user == null) {
      const response = await execute("/user/me");
      console.log(
        "🚀 ~ file: App.js ~ line 20 ~ useEffect ~ response",
        response
      );
      const json = await response.json();
      console.log("🚀 ~ file: App.js ~ line 26 ~ useEffect ~ json", json);
      const userObj = json.user;
      setUser(userObj);
    }
    return () => {};
  }, []);
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
        </Switch>
        <CrmLayout>
          <Switch>
            <Route path="/crm" component={Home}></Route>
          </Switch>
        </CrmLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
