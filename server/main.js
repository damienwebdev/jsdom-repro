const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const express = require('express');

const render = () => new Promise((resolve, reject) => {
    let dom = new JSDOM("<html><body><p>Test</p></body></html>", { runScripts: 'dangerously' });
    const result = dom.serialize()
    dom.window.close();
    dom.window = null;
    dom = null;
    resolve(result);
});

const app = express();

app.get('*', (req, res, next) => {
    render()
        .then(html => res.send(html))
        .catch(err => next(err))
});

module.exports = { app }