import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";


describe("Pruebas de Productos y Carrito en Sauce Demo",()=>{

    beforeEach(()=>{

        //Realizar el Login antes de cada test para asegurar que el usuario está autenticado
        LoginPage.visit();
        LoginPage.performLogin("standard_user","secret_sauce");

        // Aserción para confirmar el login
        cy.url().should('include', '/inventory.html');

    });

    it("ECTP-4: Añadir y verificar un producto en el carrito",{ jiraKey: 'ECTP-4' },()=>{

        // A continuación, los pasos para añadir al carrito
        ProductsPage.addToCartBackpack();
        ProductsPage.elements.cartBadge().should("have.text","1");


        // Ir al carrito de compras
        ProductsPage.goToCart();
        cy.url().should("include","/cart.html");
        cy.get(".cart_list").should("contain","Sauce Labs Backpack");

    });
    
});