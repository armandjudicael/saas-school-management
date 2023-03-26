import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../component/Pages/Login";
import Enregistrer from "../component/Pages/etudiants/Enregistrer";
import ListeEtudiants from "../component/Pages/etudiants/ListeEtudiants";

function MainRoutes({ isAuthenticated }) {
  return (
    
    <Router>
      <Routes>
        <Route exact path="/" component={<Login />}/>
        <Route exact path="/login" component={<Login />}/>
        <PrivateRoute exact path="/creer" component={<Enregistrer />} />
        <PrivateRoute exact path="/list-etudiant" component={<ListeEtudiants />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;
