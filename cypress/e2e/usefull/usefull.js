cy.get("[role=columnheader]").eq(0).click().should("have.class", "-sort-asc")
cy.get("[role=columnheader]").eq(0).dblclick().should("have.class", "-sort-desc")

let unsortedEmail = items.map((_, html) => Cypress.$(html).text().toLowerCase()).get();
let unsortedEmail = items.map((_, html) => Cypress.$(html).text()).get();

cy.get("[role='gridcell']")
    .contains(userData_1.randomEmail)
    .parent("[role='row']")
    .within(() => {
        cy.get("[id*='delete-record']").click();
    });

it("Search user", () => {
    cy.get("#searchBox").type(userData_1.randomFirstName)
    cy.get(".rt-tr-group:nth-child(1) .rt-td:nth-child(1)").should("have.text", `${userData_1.randomFirstName}`)
});

it("Verify table data is sorted ascending", () => {
    cy.get("[role=columnheader]").eq(0).click();
    cy.get(".rt-tr-group .rt-td:nth-child(1)").then(items => {
        let unsortedFirstName = items.map((_, html) => Cypress.$(html).text().toLowerCase()).get();
        unsortedFirstName = unsortedFirstName.filter((el) => el != "\u00a0");
        let sortedFirstName = unsortedFirstName.slice().sort();
        expect(unsortedFirstName).to.deep.equal(sortedFirstName);

        cy.get("[role=columnheader]").eq(2).click();
        cy.get(".rt-tr-group .rt-td:nth-child(3)").then(items => {
            function compareAge(a, b) {
                return a - b;
            };
            let unsortedAge = items.map((_, html) => Cypress.$(html).text().toLowerCase()).get();
            unsortedAge = unsortedAge.filter((el) => el != "\u00a0");
            let sortedAge = unsortedAge.sort(compareAge);
            expect(unsortedAge).to.deep.equal(sortedAge);


        });
    });
});

it("Verify table data is sorted descending", () => {
    cy.get("[role=columnheader]").eq(0).dblclick();
    cy.get(".rt-tr-group .rt-td:nth-child(1)").then(items => {
        let unsortedFirstName = items.map((_, html) => Cypress.$(html).text().toLowerCase()).get();
        unsortedFirstName = unsortedFirstName.filter((el) => el != "\u00a0");
        let sortedFirstName = unsortedFirstName.slice().sort().reverse();
        expect(unsortedFirstName).to.deep.equal(sortedFirstName);

        cy.get("[role=columnheader]").eq(2).dblclick();
        cy.get(".rt-tr-group .rt-td:nth-child(3)").then(items => {
            function compareAge(a, b) {
                return b - a;
            };
            let unsortedAge = items.map((_, html) => Cypress.$(html).text().toLowerCase()).get();
            unsortedAge = unsortedAge.filter((el) => el != "\u00a0");
            let sortedAge = unsortedAge.sort(compareAge);
            expect(unsortedAge).to.deep.equal(sortedAge);
        });
    });
});