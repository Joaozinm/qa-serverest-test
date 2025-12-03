import el from '../elements/LoginElements';

class LoginActions {

    acessarPagina() {
        cy.visit('/login');
    }

    preencherEmail(email) {
        el.emailInput().clear().type(email);
    }

    preencherSenha(senha) {
        el.passwordInput().clear().type(senha);
    }

    submeter() {
        el.submitButton().click();
    }

    realizarLogin(email, senha) {
        this.acessarPagina();
        this.preencherEmail(email);
        this.preencherSenha(senha);
        this.submeter();
    }

    validarMensagemErro(mensagem) {
        el.alertMessage().should('contain', mensagem);
    }
}

export default new LoginActions();
