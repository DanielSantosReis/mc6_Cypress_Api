import { expect } from "chai";
import { before } from "mocha";

<reference types="cypress" />

describe("Cadastrar Reservas", () => {
 
    let token;  
    //hooks
    //antes de todos os cenarios
    before(() => {
        console.log("Chamando antes de tudo!");

            cy.request({
            method: "POST",
            url: "https://restful-booker.herokuapp.com/booking",
            body: {
                "username": "admin",
                "password": "password123"
            },
        }).then((resposta) => {
            token = resposta.body.token
            console.log("Token gerado: " + token);
        })
    });

    //antes de cada cenario
    beforeEach(() => {
        console.log("Chamando antes de cada cenario!");
    });

    //depois de todos os cenarios
    after(() => {
        console.log("Chamando depois de tudo!");
    });

    //depois de cada cenario
    afterEach(() => {
        console.log("Chamando depois de cada cenario!");
    });

   
    
});

