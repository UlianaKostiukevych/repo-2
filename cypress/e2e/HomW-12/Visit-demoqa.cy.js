describe("Demoqa test suite", () => {
        it("Visit site", () => {
            cy.visit("https://demoqa.com/text-box");
            cy.url().should("include", "/text-box");
        });
    })