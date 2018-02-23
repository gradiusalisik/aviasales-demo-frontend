import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "flexboxgrid2/flexboxgrid2.css";
import "./font.css";
import "./optimize.css";
import "./index.css";
import App from "./App";
import { IntlProvider, addLocaleData } from "react-intl";
import ru from "react-intl/locale-data/fr";
import registerServiceWorker from "./registerServiceWorker";
addLocaleData(ru);

ReactDOM.render(
  <IntlProvider locale="fr">
    <App />
  </IntlProvider>,
  document.getElementById("root")
);
registerServiceWorker();
