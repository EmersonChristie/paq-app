import "./styles/App.css";
import Layout from "./components/shared/Layout/Layout";
import CrmLayout from "./components/shared/CrmLayout/CrmLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/pages/crm/Home/Home";
import LoginForm from "./components/shared/LoginForm/LoginForm";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <CrmLayout>
          <Switch>
            <Route path="/crm" component={Home}></Route>
            <Route path="/login" component={LoginForm}></Route>
          </Switch>
        </CrmLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
