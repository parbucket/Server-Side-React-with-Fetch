import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter, matchPath } from 'react-router'
import App from './app';
import renderHTML from './render';

const routes = [
    '/'
];

const app = express();

const url = 'https://reqres.in/api/users';

app.use('/', express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
    if (!match) {
        res.status(404).send(render('4 doh 4'));
        return;
    }
    fetch(url)
    .then(data => data.json())
    .then(data => {
        res.status(200)
        .send(renderHTML(
            <StaticRouter context={{}} location={req.url}>
                <App data={data} />
            </StaticRouter>
        ));
    }).catch(err => {
        console.error(err);
        res.status(500).send(renderHTML('Errar'));
    });
});

// Start server
app.listen(3000, () => console.log('App is listening on port 3000'));