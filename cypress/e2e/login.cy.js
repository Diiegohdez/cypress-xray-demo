import LoginPage from "../pages/LoginPage";

describe("Autenticación de Usuario en Sauce Demo", () => {
    
        beforeEach(()=>{
        // Visitar la página de inicio de sesión antes de cada prueba
        LoginPage.visit();
    });

    it("ECTP-4: Inicio de Sesión de Usuario Estándar Exitoso",{ jiraKey: 'ECTP-4' },()=>{
        
        // Iniciar sesión con credenciales válidas
        LoginPage.performLogin('standard_user','secret_sauce');

        // Verificar que se ha iniciado sesión correctamente
        cy.url().should("include","/inventory.html");
        cy.get(".title").should("have.text","Products");

    });

    it("ECTP-5: Intento de Inicio de Sesión con Usuario Bloqueado",{ jiraKey: 'ECTP-5' },()=>{
        
        // Iniciar sesión con un usuario bloqueado
        LoginPage.performLogin('locked_out_user','secret_sauce');

        // Verificar que se muestra el mensaje de error
        cy.get('[data-test="error"]').should("be.visible")
        .and('contain', 'Epic sadface: Sorry, this user has been locked out.');
        cy.url().should('not.include', '/inventory.html');
    })
});