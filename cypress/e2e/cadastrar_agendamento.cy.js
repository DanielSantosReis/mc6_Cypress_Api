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
                expect(resposta.body.bookingid).not.be.NaN;
                expect(resposta.body.booking.firstname).to.equal("Daniel");
                expect(resposta.body.booking.lastname).to.equal("Reis");
                expect(resposta.body.booking.totalprice).to.equal(400);
                expect(resposta.body.booking.depositpaid).to.equal(true);
                expect(resposta.body.booking.bookingdates.checkin).to.equal("2024-01-01");
                expect(resposta.body.booking.bookingdates.checkout).to.equal("2024-01-05");
                expect(resposta.body.booking.additionalneeds).to.equal("Breakfast");
            });
    });
});

