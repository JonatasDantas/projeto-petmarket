const express = require('express');
const path = require('path')

class Router {
    routes() {
        const routes = express.Router();
        const menuItems = [
            {
                name: "Petshops",
                icon: "pets",
                children: [],
                stores: []
            },
            {
                name: "Promoções",
                icon: "monetization_on",
                children: [],
                stores: []
            },
            {
                name: "Produtos",
                icon: "pets",
                children: [
                    { name: "Ração" },
                    { name: "Brinquedos" },
                    { name: "Casinhas" },
                    { name: "Roupinhas" },
                ],
                stores: [
                    {
                        name: "Petz - Av. Pacaembu",
                        img: "https://i.pinimg.com/280x280_RS/31/c5/1c/31c51cb88888a925f52d2234f562c5de.jpg",
                        time: "48-58 min",
                        tax: "R$10,00"
                    },
                    {
                        name: "Cobasi - Guarulhos",
                        img: "https://anymarket.com.br/wp-content/uploads/2019/05/cobasi.png",
                        time: "30-40 min",
                        tax: "R$7,50"
                    },
                    {
                        name: "Petshop do Seu Zé - Santo Amaro",
                        img: "https://image.freepik.com/vetores-gratis/logotipo-de-petshop-para-gatos-e-caes_9645-750.jpg",
                        time: "60-70 min",
                        tax: "R$12,00"
                    },
                    {
                        name: "Maria dos Pets - Tatuapé",
                        img: "https://dedcontabilidade.com.br/wp-content/uploads/2020/01/Gest%C3%A3o-Pet-Shop_Contabilidade-para-Pet-Shop_Aumentar-lucros-de-Pet-Shop.jpg",
                        time: "20-25 min",
                        tax: "R$5,00"
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