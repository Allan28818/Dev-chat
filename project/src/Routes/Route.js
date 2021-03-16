import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddPeople from "../views/AddPeople";
import ErrorOcurred from "../views/RouteErrors/ErrorOcurred";
import Login from "../views/Login";
import NotFound from "../views/RouteErrors/NotFound";
import Contacts from "../views/Contacts";
import SignUp from "../views/SignUp";

import PrivateRoute from "../components/PrivateRoute";
import UserIsNotLogged from "../views/RouteErrors/UserIsNotLogged";
import Home from "../views/Home";
import PublicRoute from "../components/PublicRoutes";
import IndividualChat from "../views/IndividualChat";


const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path = "/" component = { Home }/>
          <PrivateRoute exact path = "/home/:user" component = { Contacts }/>
          <PrivateRoute exact path = "/home" component = { ErrorOcurred }/>
          <PrivateRoute path = "/add-an-user" component = { AddPeople } />
          <PrivateRoute path = "/chat/:user/:recipient_account_code" 
          component = { IndividualChat }/>
          <PrivateRoute path = "/chat" component = { ErrorOcurred } />

          <PublicRoute path = "/login" component = { Login } />
          <PublicRoute path = "/sign-up" component = { SignUp } />
          
          <PublicRoute path = "/user-is-not-logged" component = { UserIsNotLogged } />

          <Route component = { NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;