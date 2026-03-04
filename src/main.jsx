import { render } from "preact";
import "./index.css";
import { App } from "./app";

render(
  <App />,
  (() => {
    const app = document.createElement("div");
    app.style = "position: fixed; top: 0; left: 0";
    document.body.append(app);
    return app;
  })(),
);
