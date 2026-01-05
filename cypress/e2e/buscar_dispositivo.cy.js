<reference types="cypress" />

describe('Buscar Dispositivo', () => {
    it ('Deve buscar um dispositivo existente', () => {
        cypress.request('GET', 
            url, '/objects/3', {
        });
    });
});