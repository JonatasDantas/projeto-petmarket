const express = require('express');
const path = require('path')
const { menuItems, stores } = require('./variaveis')

class Router {
    routes() {
        const routes = express.Router();

        routes.get("/", (req, res) => {
            res.render('home.html', {
                menuItems,
            });
        })

        routes.get("/catalogo", (req, res) => {
            const store = stores.find((store) => store.id == parseInt(req.query.store));

            res.render('petshop-catalog.html', {
                menuItems,
                store,
            });
        })

        routes.get("/produto", (req, res) => {
            res.render('produto.html', {
                menuItems,
            });
        })
        /*
        routes.get("/cadastro-loja", (req, res) => {
            res.render('/cadastro-loja.html', {
    
            });
        })
        */
        return routes;
    }
}

module.exports = {
    Router
}