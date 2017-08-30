import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
export default (renderMe, data) => (
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Hello World Server Side with Fetch API</title>
        </head>
        <body>
            <div id="app">${renderToStaticMarkup(renderMe)}</div>
        </body>
    </html>`
);