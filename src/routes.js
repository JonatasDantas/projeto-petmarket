const express = require('express');
const path = require('path')

class Router {
    routes() {
        const routes = express.Router();
        const menuItems = [
            {
                name: "Promoções",
                icon: "monetization_on",
                children: [],
                stores: []
            },
            {
                name: "Petshops",
                icon: "pets",
                children: [
                    { name: "Ração" },
                    { name: "Brinquedos" },
                    { name: "Casinhas" },
                    { name: "Roupinhas" },
                ],
                stores: [
                    {
                        name: "Petz Av. Pacaembu",
                        img: "https://i.pinimg.com/280x280_RS/31/c5/1c/31c51cb88888a925f52d2234f562c5de.jpg",
                        time: "48-58 min",
                        tax: "R$10,00"
                    },
                    {
                        name: "Petz Av. Pacaembu",
                        img: "https://i.pinimg.com/280x280_RS/31/c5/1c/31c51cb88888a925f52d2234f562c5de.jpg",
                        time: "48-58 min",
                        tax: "R$10,00"
                    },
                    {
                        name: "Petz Av. Pacaembu",
                        img: "https://i.pinimg.com/280x280_RS/31/c5/1c/31c51cb88888a925f52d2234f562c5de.jpg",
                        time: "48-58 min",
                        tax: "R$10,00"
                    },
                    {
                        name: "Petz Av. Pacaembu",
                        img: "https://i.pinimg.com/280x280_RS/31/c5/1c/31c51cb88888a925f52d2234f562c5de.jpg",
                        time: "48-58 min",
                        tax: "R$10,00"
                    }
                ]
            },
            {
                name: "Veterinários",
                icon: "medical_services",
                children: [],
                stores: []
            },
        ]

        routes.get("/", (req, res) => {
            res.render('home.html', {
                menuItems,
            });
        })

        routes.get("/catalogo", (req, res) => {
            res.render('petshop-catalog.html', {
                menuItems,
            });
        })

        routes.get("/produto", (req, res) => {
            res.render('produto.html', {
                menuItems,
            });
        })

        return routes;
    }
}

module.exports = {
    Router
}