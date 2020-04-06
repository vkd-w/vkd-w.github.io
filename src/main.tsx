import * as React from "react";
import {render} from "react-dom";
import {AppComponent} from "./components/app.component";

const app = document.querySelector('.app')

render(<AppComponent />, app)
