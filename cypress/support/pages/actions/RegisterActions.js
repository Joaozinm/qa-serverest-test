import el from '../elements/RegisterElements';

class RegisterActions {

    acessarPagina() {
        cy.visit('/cadastrarusuarios');
    }

    preencherNome(nome) {
        el.nameInput().type(nome);
    }

    preencherEmail(email) {
        el.emailInput().type(email);
    }

    preencherSenha(senha) {
        el.passwordInput().type(senha);
    }

    marcarAdministrador() {
        el.adminCheckbox().check();
    }

    submeter() {
        el.submitButton().click();
    }

    cadastrarUsuario(nome, email, senha, admin = false) {
        this.acessarPagina();
        this.preencherNome(nome);
        this.preencherEmail(email);
        this.preencherSenha(senha);

        if (admin) {
            this.marcarAdministrador();
        }

        this.submeter();
    }

    validarMensagemSucesso(msg) {
        el.alertMessage().should('contain', msg);
    }
}

export default new RegisterActions();
