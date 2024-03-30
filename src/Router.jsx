import React from "react";
import { Routes, Route } from 'react-router-dom'

import Index from './pages/Index'
import AboutUs from "./pages/AboutUs";
import Plans from "./pages/Plans"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function Router() {
  return(
    <Routes>
      <Route exact path="/" Component={Index}></Route>
      <Route exact path="/about" Component={AboutUs}></Route>
      <Route exact path="/plans" Component={Plans}></Route>
      <Route exact path="/login" Component={Login}></Route>
      <Route exact path="/signup" Component={Signup}></Route>
      <Route exact path="/dashboard" Component={Index}></Route>
    </Routes>
  ) 
}

export default Router