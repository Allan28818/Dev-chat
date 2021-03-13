import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddPeople from "../views/AddPeople";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import PageLanding from "../views/PageLanding";
import SignUp from "../views/SignUp";


const Routes = () => {
  return (
    <div>
            <BrowserRouter>
        <Switch>
          <Route exact path = "/home/:user" component = { PageLanding }/>
          <Route path = "/login" component = { Login } />
          <Route path = "/sign-up" component = { SignUp } />
          <Route path = "/add-an-user" component = { AddPeople } />

          <Route component = { NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;