import React from "react";
import ReactDOM from "react-dom";
import { App } from "./src/App";

const AppMount = document.querySelector("div[id='app-mount']")!;

ReactDOM.render(<App />, AppMount);
