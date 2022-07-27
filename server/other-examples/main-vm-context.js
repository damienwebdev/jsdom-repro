const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const express = require('express');
const vm = require("vm");

const render = () => new Promise((resolve, reject) => {
    const window = {};
    contextifyWindow(window);
    resolve("renderVm");
});

const app = express();

app.get('*', (req, res, next) => {
    render()
        .then(html => res.send(html))
        .catch(err => next(err))
});

module.exports = { app }

function contextifyWindow(window) {
    if (vm.isContext(window)) {
        return;
    }

    vm.createContext(window);
}