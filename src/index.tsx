import { StrictMode } from "react";
import { render } from "react-dom";

import App from "../src/components/app/app";

const rootElement = document.getElementById("root");
render(<App />, rootElement);