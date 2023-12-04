"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const snacks = [
    {
        snack: "burger",
        name: "Zero-Mac",
        description: "O artesanal tamanho família recheado com três carnes suculentas, queijo zero lactose e bacon.",
        price: 25.5,
        image: "https://img.freepik.com/free-photo/side-view-burger-with-beef-meat-melted-cheese-vegetables-wooden-board_140725-11865.jpg",
    },
    {
        snack: "burger",
        name: "Extra Bacon",
        description: "Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo zero lactose e carne.",
        price: 23.5,
        image: "https://img.freepik.com/free-photo/burger-with-fries_181624-2761.jpg",
    },
    {
        snack: "burger",
        name: "Big Carne",
        description: "Uma carne artesanal de primeira qualidade com 4cm de altura e uma salada completa com alface, cebola, tomate e outros.",
        price: 18.0,
        image: "https://img.freepik.com/free-photo/delicious-cheeseburger-with-french-fries_23-2148290584.jpg",
    },
    {
        snack: "burger",
        name: "Carne dupla",
        description: "Já pensou em comer aquele sanduíche com carne dupla e saborosa, recheada com queijo zero lactose, molho e salada? Então você pensou exatamente nesse hambúrguer.",
        price: 20,
        image: "https://img.freepik.com/free-photo/vertical-shot-delicious-hamburger-wooden-plate-with-black-wall_181624-45483.jpg",
    },
    {
        snack: "pizza",
        name: "Batata zero",
        description: "Pizza de batata recheada com queijo zero lactose, cebola.",
        price: 25,
        image: "https://img.freepik.com/free-psd/delicious-potato-onion-caramelized-pizza-isolated-transparent-background_191095-18123.jpg",
    },
    {
        snack: "pizza",
        name: "Lombo canadense zero",
        description: "Pizza recheada com lombo canadense, mussarela, ovo, batata, tendo uma borda recheada com catupiri zero lactose.",
        price: 28.5,
        image: "https://img.freepik.com/free-photo/hawaiian-pizza_1203-2455.jpg",
    },
    {
        snack: "pizza",
        name: "Frango + batata doce",
        description: "Pizza recheada com frango, catupiri zero lactose, queijo zero lactose e batata doce.",
        price: 24,
        image: "https://img.freepik.com/free-photo/hawaiian-pizza_74190-2500.jpg",
    },
    {
        snack: "pizza",
        name: "Napolitana",
        description: "Pizza recheada com queijo zero lactose, mussarela, tomate, tendo uma borda recheada com catupiry zero lactose.",
        price: 30,
        image: "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg",
    },
    {
        snack: "drink",
        name: "Coca-Cola 2L",
        description: "A tradicional Coca-Cola que a família brasileira adora.",
        price: 12,
        image: "https://i.imgur.com/Lg3aKhf.jpg",
    },
    {
        snack: "drink",
        name: "Guaraná Antarctica",
        description: "O irresistível e saboroso Guaraná Antarctica em sua versão de latinha.",
        price: 6.5,
        image: "https://i.imgur.com/hOBrOIm.jpg",
    },
    {
        snack: "drink",
        name: "Suco de Abacaxi",
        description: "Suco natural de abacaxi com leves incrementos de algumas hortaliças para fortificar sua saúde.",
        price: 8,
        image: "https://i.imgur.com/VV9qTMh.jpg",
    },
    {
        snack: "drink",
        name: "Suco de Laranja",
        description: "Suco natural de laranja para você que é amante dessa fruta.",
        price: 8,
        image: "https://i.imgur.com/2Lf2gHy.jpg",
    },
    {
        snack: "ice-cream",
        name: "Casquinha",
        description: "Sorvete zero lactose na casquinha crocante e saborosa que nossos clientes amam.",
        price: 4.5,
        image: "https://i.imgur.com/YGmeoCm.jpg",
    },
    {
        snack: "ice-cream",
        name: "Chocolate com granulado",
        description: "Sorvete de chocolate zero lactose com granulados para você se deliciar.",
        price: 6,
        image: "https://i.imgur.com/osAHOLe.jpg",
    },
    {
        snack: "ice-cream",
        name: "Flocos",
        description: "O tradicional flocos vem com cobertura em chocolate tudo zero lactose.",
        price: 7,
        image: "https://i.imgur.com/qgnFLiy.jpg",
    },
];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.snack.createMany({
            data: snacks,
            skipDuplicates: true,
        });
    });
}
main()
    .catch((error) => {
    console.error(error);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
