import React from "react";
import fs from "fs";
import path from "path";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

const indexFile = path.resolve(__dirname, "../public/index.html");
fs.readFile(indexFile, "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  try {
    const markup = ReactDOMServer.renderToStaticMarkup(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    process.stdout.write(
      data.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    );
  } catch (e) {
    console.error(e);
  }
});
