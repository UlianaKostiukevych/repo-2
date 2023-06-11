it('should verify table data is sorted ascending', () => {
    cy.get("[role=columnheader]").eq(1).click();
    cy.get(".rt-tr-group .rt-td:nth-child(2)").then(items => {
        let unsortedLastName = items.map((index, html) => Cypress.$(html).text()).get();
        let sortedLastName = unsortedLastName.slice().sort();
        expect(unsortedLastName).to.deep.equal(sortedLastName);
        cy.wait(4000)

    cy.get("[role=columnheader]").eq(2).click();
    cy.get(".rt-tr-group .rt-td:nth-child(3)").then(items => {
        let unsortedAge = items.map((index, html) => Cypress.$(html).text()).get();
        let sortedAge = unsortedAge.slice().sort();
        expect(unsortedAge).to.deep.equal(sortedAge);
        cy.wait(4000)

    cy.get("[role=columnheader]").eq(3).click();
    cy.get(".rt-tr-group .rt-td:nth-child(4)").then(items => {
        let unsortedEmail = items.map((index, html) => Cypress.$(html).text()).get();
        let sortedEmail = unsortedEmail.slice().sort();
        expect(unsortedEmail).to.deep.equal(sortedEmail);
        cy.wait(4000)

    cy.get("[role=columnheader]").eq(4).click();
    cy.get(".rt-tbody [role='row'] > div:nth-child(5)").then(items => {
        let unsortedSalary = items.map((index, html) => Cypress.$(html).text()).get();
        let sortedSalary = unsortedSalary.slice().sort();
        expect(unsortedSalary).to.deep.equal(sortedSalary);
        cy.wait(4000)


       cy.get(".rt-tbody [role='row'] > div:nth-child(5)").then((salaryValues) => {
            function compareNumbers(a, b) {
              return a - b;}
            let salaryArray = [...salaryValues].map(el => el.textContent).filter(Number);
            let sortedSalaryArray = [...salaryArray].sort(compareNumbers);
            expect(salaryArray).to.deep.equal(sortedSalaryArray);
            })
            });

    /*cy.get("[role=columnheader]").eq(5).click();
    cy.get(".rt-tr-group .rt-td:nth-child(6)").then(items => {
        let unsortedDepartment = items.map((index, html) => Cypress.$(html).text()).get();
        let sortedDepartment = unsortedDepartment.slice().sort();
        expect(unsortedDepartment).to.deep.equal(sortedDepartment);
        cy.wait(4000)  */