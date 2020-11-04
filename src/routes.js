const express = require('express');
const path = require('path')

class Router {
    routes() {
        const routes = express.Router();

        routes.get("/", (req, res) => {
            res.render('home.html');
        })

        return routes;
    }
}

module.exports = {
    Router
}