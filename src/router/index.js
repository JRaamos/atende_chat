import React from "react";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Landpage from 'screens/Landpage'
import NotFound from 'screens/NotFound'

import Login from 'screens/Authentication/Login'
import Register from 'screens/Authentication/Register'
import Forgot from 'screens/Authentication/Forgot'
import CreatePassword from 'screens/Authentication/CreatePassword'

import DashboardHome from 'screens/Dashboard/Home'
import DashboardMe from 'screens/Dashboard/Me'
import ManageAgents from "screens/ManageAgents";
import ManageToken from "screens/ManageToken";
import AgentsIaForm from "screens/AgentsIaForm";


export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route path="/" exact> <Landpage /> </Route> */}
          <Route path="/" exact>
            <Redirect to="/manage-agents" />
          </Route>
          <Route path="/manage-agents" exact> <ManageAgents /> </Route>
          <Route path="/manage-tokens" exact> <ManageToken /> </Route>
          <Route path="/manage-agents/form/:mode" exact> <AgentsIaForm /> </Route>
          {/* <Route path="/login" exact> <Login /> </Route>
          <Route path="/register" exact> <Register /> </Route>
          <Route path="/forgot" exact> <Forgot /> </Route>
          <Route path="/create-password" exact> <CreatePassword /> </Route>

          <Route path="/dashboard" exact> <DashboardHome /> </Route>
          <Route path="/dashboard/Me" exact> <DashboardMe /> </Route> */}

          <Route path="*" exact> <NotFound /> </Route>
        </Switch>
      </div>
    </Router>
  );
}