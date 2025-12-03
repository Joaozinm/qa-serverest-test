import { faker } from '@faker-js/faker';

Cypress.Commands.add('api_createUser', () => {
    const user = {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: "1234",
        administrador: "true"
    };

    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: user,
        failOnStatusCode: false
    }).then(res => {
        return { res, user };
    });
});

Cypress.Commands.add('api_createUser_normal', (isAdmin = false) => {
    const user = {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: "1234",

        administrador: isAdmin ? "true" : "false"
    };

    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: user,
        failOnStatusCode: false
    }).then(res => {

        if (res.status !== 201) {
            cy.log(`Erro ao criar usuário: ${JSON.stringify(res.body)}`)
        }
        return { res, user };
    });
});

Cypress.Commands.add('api_login', (email, password) => {
    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: { email, password },
        failOnStatusCode: false
    });
});
