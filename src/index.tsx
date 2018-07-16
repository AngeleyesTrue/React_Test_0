import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
