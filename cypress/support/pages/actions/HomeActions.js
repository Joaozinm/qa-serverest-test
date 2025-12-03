import el from '../elements/HomeElements';

class HomeActions {

    adicionarPrimeiroProdutoAListaDeCompras() {
        el.addToListButton(0).click();
    }

    acessarListaDeCompras() {
        el.navListButton().click();
    }

    validarProdutoNaLista() {
        el.list().should('be.visible').and('contain', 'Produto:')

    }
}

export default new HomeActions();
