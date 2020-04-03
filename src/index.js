import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

/*const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);*/
function Layout() {
  return <App />;
}

ReactDOM.render(<Layout />, document.getElementById("root"));
