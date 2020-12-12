const stores = [
    {
        id: 1,
        name: "Petz - Av. Pacaembu",
        img: "https://i.pinimg.com/280x280_RS/31/c5/1c/31c51cb88888a925f52d2234f562c5de.jpg",
        time: "48-58 min",
        tax: "R$10,00",
        menuItemId: 1,
        products: [
            {
                id: 1,
                nomeProduto: "Ração Pedigree para cachorro",
                descricao: "Ração seca pedigree de 20kg para cachorro adulto.",
                valorProduto: "R$195,00",
                urlImagem: "https://www.petlove.com.br/images/products/223357/large/Ra%C3%A7%C3%A3o_Seca_Pedigree_para_C%C3%A3es_Adultos_Ra%C3%A7as_Pequenas_310484_1_20kg.jpg?1587403804"
            },
            {
                id: 2,
                nomeProduto: "Bolinha de tenis de borracha",
                descricao: "Bolinha de tenis de brinquedo feito de borracha. Ideal para cachorros pequenos.",
                valorProduto: "R$19,99",
                urlImagem: "https://www.extra-imagens.com.br/PetShop/cachorro/BrinquedosparaCaes/1501182823/1211465984/brinquedo-para-cachorro-bola-de-tenis-com-som-kit-com-2-pcs-1501182823.jpg"
            },
            {
                id: 3,
                nomeProduto: "Coleira para Cachorro",
                descricao: "Coleira estilizada ideal para cachorros de pequeno porte.",
                valorProduto: "R$59,99",
                urlImagem: "https://www.casasbahia-imagens.com.br/PetShop/cachorro/ColeirasGuias/12986553/1233496806/coleira-peitoral-para-cachorro-com-guia-adaptador-azul-m-12986553.jpg"
            },
            {
                id: 4,
                nomeProduto: "Casinha para gato",
                descricao: "Arranhador com toca e rede adorável para gatinhos.",
                valorProduto: "R$229,00",
                urlImagem: "https://www.royalpets.com.br/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/a/r/arranhador_casinha_com_rede_amarelo.jpg"
            },
            {
                id: 5,
                nomeProduto: "Bolsa transportadora de gatos",
                descricao: "Bolsa transportadora astronauta para gatos, respirável, transparente, com espaço.",
                valorProduto: "R$49,99",
                urlImagem: "https://ae01.alicdn.com/kf/HTB1.aDabL5G3KVjSZPxq6zI3XXaj/Bolsa-transportadora-astronauta-para-gatos-bolsa-respir-vel-para-transporte-de-animais-de-estima-o-transparente.jpg_q50.jpg"
            },
            {
                id: 6,
                nomeProduto: "Bebedouro para Pets",
                descricao: "Fonte Bebedouro para Cães e Gatos Premium Preto 110v.",
                valorProduto: "R$189,90",
                urlImagem: "https://buono.pet/wp-content/uploads/2018/07/fontebebedouropremium.jpg"
            },
        ]
    },
    {
        id: 2,
        name: "Cobasi - Guarulhos",
        img: "https://anymarket.com.br/wp-content/uploads/2019/05/cobasi.png",
        time: "30-40 min",
        tax: "R$7,50",
        menuItemId: 1,
        products: []
    },
    {
        id: 3,
        name: "Petshop do Seu Zé - Santo Amaro",
        img: "https://image.freepik.com/vetores-gratis/logotipo-de-petshop-para-gatos-e-caes_9645-750.jpg",
        time: "60-70 min",
        tax: "R$12,00",
        menuItemId: 1,
        products: []
    },
    {
        id: 4,
        name: "Maria dos Pets - Tatuapé",
        img: "https://dedcontabilidade.com.br/wp-content/uploads/2020/01/Gest%C3%A3o-Pet-Shop_Contabilidade-para-Pet-Shop_Aumentar-lucros-de-Pet-Shop.jpg",
        time: "20-25 min",
        tax: "R$5,00",
        menuItemId: 1,
        products: []
    }
];

const menuItems = [
    {
        id: 1,
        name: "Petshops",
        icon: "pets",
        children: [
            { name: "Ração" },
            { name: "Brinquedos" },
            { name: "Casinhas" },
            { name: "Roupinhas" },
        ],
        stores
    },
    {
        id: 2,
        name: "Promoções",
        icon: "monetization_on",
        children: [],
        stores: []
    },
//    {
//         name: "Produtos",
//         icon: "pets",
//         children: [
//             { name: "Ração" },
//             { name: "Brinquedos" },
//             { name: "Casinhas" },
//             { name: "Roupinhas" },
//         ],
//         stores: []
//     }, 
    {
        id: 3,
        name: "Veterinários",
        icon: "medical_services",
        children: [],
        stores: []
    },
];


module.exports = {
    menuItems,
    stores
}
