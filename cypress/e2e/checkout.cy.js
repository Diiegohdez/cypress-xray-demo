import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import CheckoutPage from "../pages/CheckoutPage";

describe("Pruebas del Proceso de Checkout en Sauce Demo",()=>{

        beforeEach(()=>{

        //Realizar el Login antes de cada test para asegurar que el usuario está autenticado
        LoginPage.visit();
        LoginPage.performLogin("standard_user","secret_sauce");

        // Aserción para confirmar el login
        cy.url().should('include', '/inventory.html');

        // Añade un producto y ve al carrito
        ProductsPage.addToCartBackpack();
        ProductsPage.elements.cartLink().click();
        cy.url().should('include', '/cart.html');

        // Espera a que el elemento del carrito con el producto sea visible
        cy.get('.cart_item').should('be.visible').and('contain', 'Sauce Labs Backpack');

    });

    it("ECTP-4: Completar el proceso de checkout exitosamente",{ jiraKey: 'ECTP-4' },()=>{

        // Proceder al checkout
        CheckoutPage.clickCheckout();
        cy.url().should("include","/checkout-step-one.html");

        // Completar la información del checkout
        CheckoutPage.entershippingInformation("John", "Doe", "12345");
        CheckoutPage.continueToSumary();
        cy.url().should("include","/checkout-step-two.html");
        cy.get(".summary_total_label").should("to.be.visible");

        // Finalizar la compra
        CheckoutPage.finishCheckout();
        cy.url().should("include","/checkout-complete.html");
        CheckoutPage.elements.completeHeader().should("contain","Thank you for your order!");
        ProductsPage.elements.cartBadge().should("not.exist");
        
    });
    
});