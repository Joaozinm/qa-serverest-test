class HomeElements {
    productCard = (index = 0) => cy.get('.card').eq(index);
    addToListButton = (index = 0) => cy.get('.card').eq(index).find('.btn');
    navListButton = () => cy.get('[data-testid="lista-de-compras"]');
    list = () => cy.get('[data-testid="shopping-cart-product-name"]');
}

export default new HomeElements();
