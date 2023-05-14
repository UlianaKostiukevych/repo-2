describe("Demoqa test suite", () => {
    it("Fill Text Box form", () => {
        cy.visit("/text-box");
        cy.get("#userName").type("Uliana Senenka");
        cy.get("#userEmail").type("testmail@eyepasta.com");
        cy.get("#currentAddress").type("Backer str, 221b, London");
        cy.get("#permanentAddress").type("Avengers Tower, New York");
        cy.get("#submit").click();
        cy.get("#output").should("exist");
        cy.get("#name").should("have.text", "Name:Uliana Senenka");
        cy.get("#email").should("have.text", "Email:testmail@eyepasta.com");
        cy.get("p#currentAddress").should("contain.text", "Current Address :Backer str, 221b, London");
        cy.get("p#permanentAddress").should("contain.text", "Permananet Address :Avengers Tower, New York");

    })
})