
class ProductsPage {
    //Selectors 
    elements = {
        productsTitle: () => cy.get(".title"),
        addToCardButton: () => cy.get("[data-test='add-to-cart-sauce-labs-backpack']"),
        cartBadge: () => cy.get(".shopping_cart_badge"),
        cartLink: () => cy.get(".shopping_cart_link"),
        removeButton: () => cy.get("[data-test='remove-sauce-labs-backpack']")
    }


    //Actions
    addToCartBackpack() {
        this.elements.addToCardButton().click();
    };

    goToCart() {
        this.elements.cartLink().click();
    };

}

//Export the class
export default new ProductsPage();