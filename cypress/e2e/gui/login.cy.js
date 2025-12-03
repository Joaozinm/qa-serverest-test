import Login from '../../support/pages/actions/LoginActions';

describe('E2E - Login de Usuário', () => {

    it('Deve realizar login com sucesso (massa criada via API)', () => {

        // Cria usuário via API antes do teste
        cy.api_createUser().then(({ user }) => {

            Login.acessarPagina();
            Login.preencherEmail(user.email);
            Login.preencherSenha(user.password);
            Login.submeter();

            cy.url().should('include', '/home');
        });
    });
});
