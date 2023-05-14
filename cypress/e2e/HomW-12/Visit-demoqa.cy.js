describe("Demoqa test suite", () => {
    beforeEach(() => {
        cy.visit("/text-box");
        cy.url().should("include", "/text-box");
    })

    it("Fill Text Box form", () => {
        cy.get("#userName").type("Uliana Senenka");
        cy.get("#userEmail").type("testmail@eyepasta.com");
        cy.get("#currentAddress").type("Backer str, 221b, London");
        cy.get("#permanentAddress").type("Avengers Tower, New York");
        cy.get("#submit").click();
    })
})