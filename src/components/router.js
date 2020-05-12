import React from "react";

/**
 *  Components
 */

import Actividad1 from "./actividad_1";
import Actividad2 from "./actividad_2";
import Actividad3 from "./actividad_3";
import ActivitiesList from "./index";

import { Router } from "@reach/router";

const Routers = () => (
  <Router>
    <Actividad1 path="/Actividad1" />
    <Actividad2 path="/Actividad2" />
    <Actividad3 path="/Actividad3" />
    <ActivitiesList path="/" />
  </Router>
);

export default Routers;
