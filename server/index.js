import React from 'react';
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import App from '../src/App'

const sheet = new ServerStyleSheet()


const indexFile = path.resolve(__dirname, '../public/index.html')
fs.readFile(indexFile, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
  }
try {
  const markup = ReactDOMServer.renderToStaticMarkup(
    <React.StrictMode>
      <StyleSheetManager sheet={sheet.instance}>
      <App /></StyleSheetManager>
    </React.StrictMode>
  );
  const styleTags = sheet.getStyleTags()
  process.stdout.write(data.replace('<div id="root"></div>', `<div id="root">${styleTags}${markup}</div>`))
  } catch (e) {
    console.error(e)
  } finally {
    sheet.seal()
  }
});
