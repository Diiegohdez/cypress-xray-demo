
class CheckoutPage {
    elements = {
        //Selectors
        checkoutButton: () => cy.get("[data-test='checkout']"),
        firstNameInput: () => cy.get("[data-test='firstName']"),
        lastNameInput: () => cy.get("[data-test='lastName']"),
        postalCodeInput: () => cy.get("[data-test='postalCode']"),
        continueButton: () => cy.get("[data-test='continue']"),
        finishButton: () => cy.get("[data-test='finish']"),
        completeHeader: () => cy.get(".complete-header")
    };


    //Actions
    clickCheckout() {
        this.elements.checkoutButton().click();
    }

    entershippingInformation(firstName, lastName, postalCode) {
        this.elements.firstNameInput().type(firstName);
        this.elements.lastNameInput().type(lastName);
        this.elements.postalCodeInput().type(postalCode);
    }

    continueToSumary() {
        this.elements.continueButton().click();
    }

    finishCheckout() {
        this.elements.finishButton().click();
    }
        
}

//Export the class
export default new CheckoutPage();