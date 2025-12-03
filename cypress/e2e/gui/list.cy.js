import Login from '../../support/pages/actions/LoginActions';
import Home from '../../support/pages/actions/HomeActions';

describe('E2E - Fluxo da Lista de Compras', () => {

    it('Deve realizar fluxo de adicionar produto a lista de compras', () => {


        cy.api_createUser_normal().then(({ user }) => {


            Login.realizarLogin(user.email, user.password);


            Home.adicionarPrimeiroProdutoAListaDeCompras();


            Home.acessarListaDeCompras();


            Home.validarProdutoNaLista();
        });
    });
});
