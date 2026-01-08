

describe('Buscar Dispositivo', () => {
    it('Deve buscar um dispositivo existente', () => {
        cy.request('GET',
            cy.visity ('https://api.restfull-api.dev/objects'), {
        }).then((resposta) => {
            expect(resposta.status).to.equal(200);
            expect(resposta.body.id).to.have.property('id', 3);
            expect(resposta.body.name).to.have.property('name', 'Aple iPhone 12 Pro Max');
        });
    });
});