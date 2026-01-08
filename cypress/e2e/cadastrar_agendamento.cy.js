import { expect } from "chai";

<reference types="cypress" />

describe("Cadastrar Reservas", () => {
    it("Deve cadastrar uma reserva com sucesso", () => {

        const payload = {
           "firstname": "Daniel",
           "lastname": "Reis",
           "totalprice": 400,
           "depositpaid": true,
              "bookingdates": {
                "checkin": "2024-01-01",
                "checkout": "2024-01-05"
              },
            "additionalneeds": "Breakfast",
        }
        cy.request({
            method: "POST",
            url: "https://restful-booker.herokuapp.com/booking",
            body: payload

        })
            .then((resposta) => {
                expect(resposta.status).to.equal(200);
            });
    });
});