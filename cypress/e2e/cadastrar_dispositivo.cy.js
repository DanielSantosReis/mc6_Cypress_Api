<reference types="cypress" />

describe('Cadastro de Dispositivo', () => {
    it ('Deve cadastrar um novo dispositivo com sucesso', () => {
        cypress.request('GET', 
            url, 'https://api.restfull-api.dev/objects/3', {
        });
    });
});