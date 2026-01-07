import { expect } from "chai";

<reference types="cypress" />

describe('Cadastrar Dispositivo', () => {
    it('Deve cadastrar um novo dispositivo', () => {

        const dado = {
                    data: {
                    year: 2020,
                    price: 1099.99,
                    cpu: 'Apple A14 Bionic',
                    camera: '12MP'
                },
        }

        cy.request({
            method:"POST",
            url: '/objects',
            body: dado

        })
            .then((resposta) => {
                expect(resposta.status).to.equal(200);
                expect(resposta.body.id).not.to.empty;
                expect(resposta.body.createdAt).not.to.empty;
                expect(resposta.body.name).to.equal('Apple iPhone 12 Pro Max');
             });
    });
});