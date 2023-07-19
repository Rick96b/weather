import React from 'react';

import { withProviders } from "./providers";
import { Routing } from 'pages';

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/weather-icons.min.css";

const App = () => {
  return (
    <Routing />
  )
}

export default withProviders(App);
