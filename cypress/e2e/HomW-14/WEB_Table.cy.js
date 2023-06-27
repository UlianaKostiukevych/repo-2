import { faker } from "@faker-js/faker";
const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomEmail = faker.internet.email();
const randomAge = faker.number.int({
    "min": 18,
    "max": 60
});
const randomSalary = faker.number.int({
    "min": 1000,
    "max": 6000
});
const randomDepartment = faker.person.jobArea();

const randomFirstName_2 = faker.person.firstName();
const randomLastName_2 = faker.person.lastName();
const randomEmail_2 = faker.internet.email();
const randomAge_2 = faker.number.int({
    "min": 18,
    "max": 60
});
const randomSalary_2 = faker.number.int({
    "min": 1000,
    "max": 6000
});
const randomDepartment_2 = faker.person.jobArea();

describe("Demoqa test suite - WEB Tables", () => {
    beforeEach(() => {
        cy.visit("webtables");
    });

    it("Create new user", () => {
        cy.get("#addNewRecordButton").click();
        cy.get("#firstName").type(randomFirstName);
        cy.get("#lastName").type(randomLastName);
        cy.get("#userEmail").type(randomEmail);
        cy.get("#age").type(randomAge);
        cy.get("#salary").type(randomSalary);
        cy.get("#department").type(randomDepartment);

        cy.get("#submit").click();
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(1)").should("have.text", `${randomFirstName}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(2)").should("have.text", `${randomLastName}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(3)").should("have.text", `${randomAge}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(4)").should("have.text", `${randomEmail}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(5)").should("have.text", `${randomSalary}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(6)").should("have.text", `${randomDepartment}`);
    });

    it("Edit user", () => {
        cy.get("#addNewRecordButton").click();
        cy.get("#firstName").type(randomFirstName);
        cy.get("#lastName").type(randomLastName);
        cy.get("#userEmail").type(randomEmail);
        cy.get("#age").type(randomAge);
        cy.get("#salary").type(randomSalary);
        cy.get("#department").type(randomDepartment);
        cy.get("#submit").click();

        cy.get(".action-buttons #edit-record-4").click();
        cy.get("#firstName").clear().type(randomFirstName_2);
        cy.get("#lastName").clear().type(randomLastName_2);
        cy.get("#userEmail").clear().type(randomEmail_2);
        cy.get("#age").clear().type(randomAge_2);
        cy.get("#salary").clear().type(randomSalary_2);
        cy.get("#department").clear().type(randomDepartment_2);
        cy.get("#submit").click();

        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(1)").should("have.text", `${randomFirstName_2}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(2)").should("have.text", `${randomLastName_2}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(3)").should("have.text", `${randomAge_2}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(4)").should("have.text", `${randomEmail_2}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(5)").should("have.text", `${randomSalary_2}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(6)").should("have.text", `${randomDepartment_2}`);
    });

    it("Delete user", () => {

        cy.get("#addNewRecordButton").click();
        cy.get("#firstName").type(randomFirstName);
        cy.get("#lastName").type(randomLastName);
        cy.get("#userEmail").type(randomEmail);
        cy.get("#age").type(randomAge);
        cy.get("#salary").type(randomSalary);
        cy.get("#department").type(randomDepartment);
        cy.get("#submit").click();
        cy.get(".action-buttons #delete-record-4").click();
        cy.get(".rt-tr-group:nth-child(4) .rt-td").each((cell) => {
            expect(cell).to.have.text("\u00a0");
        });
    });

    it("Search user", () => {
        cy.get("#addNewRecordButton").click();
        cy.get("#firstName").type(randomFirstName);
        cy.get("#lastName").type(randomLastName);
        cy.get("#userEmail").type(randomEmail);
        cy.get("#age").type(randomAge);
        cy.get("#salary").type(randomSalary);
        cy.get("#department").type(randomDepartment);

        cy.get("#submit").click();
        cy.get("#searchBox").type(randomFirstName)
        cy.get(".rt-tr-group:nth-child(1) .rt-td:nth-child(1)").should("have.text", `${randomFirstName}`)
        cy.get("#searchBox").clear().type(randomLastName);
        cy.get(".rt-tr-group:nth-child(1) .rt-td:nth-child(2)").should("have.text", `${randomLastName}`)
        cy.get("#searchBox").clear().type(randomAge);
        cy.get(".rt-tr-group:nth-child(1) .rt-td:nth-child(3)").should("have.text", `${randomAge}`);
        cy.get("#searchBox").clear().type(randomEmail);
        cy.get(".rt-tr-group:nth-child(1) .rt-td:nth-child(4)").should("have.text", `${randomEmail}`);
        cy.get("#searchBox").clear().type(randomAge);
        cy.get(".rt-tr-group:nth-child(1) .rt-td:nth-child(5)").should("have.text", `${randomSalary}`);
        cy.get("#searchBox").clear().type(randomDepartment);
        cy.get(".rt-tr-group:nth-child(1) .rt-td:nth-child(6)").should("have.text", `${randomDepartment}`);
    });

    it("Verify table data is sorted ascending", () => {
        cy.get("[role=columnheader]").eq(0).click();
        cy.get(".rt-tr-group .rt-td:nth-child(1)").then(items => {
            let unsortedFirstName = items.map((html) => Cypress.$(html).text()).get();
            unsortedFirstName = unsortedFirstName.filter((el) => el != "\u00a0");
            let sortedFirstName = unsortedFirstName.slice().sort();
            expect(unsortedFirstName).to.deep.equal(sortedFirstName);

            cy.get("[role=columnheader]").eq(1).click();
            cy.get(".rt-tr-group .rt-td:nth-child(2)").then(items => {
                let unsortedLastName = items.map((html) => Cypress.$(html).text()).get();
                unsortedLastName = unsortedLastName.filter((el) => el != "\u00a0");
                let sortedLastName = unsortedLastName.slice().sort();
                expect(unsortedLastName).to.deep.equal(sortedLastName);

                cy.get("[role=columnheader]").eq(2).click();
                cy.get(".rt-tr-group .rt-td:nth-child(3)").then(items => {
                    function compareAge(a, b) {
                        return a - b;
                    };
                    let unsortedAge = items.map((html) => Cypress.$(html).text()).get();
                    unsortedAge = unsortedAge.filter((el) => el != "\u00a0");
                    let sortedAge = unsortedAge.sort(compareAge);
                    expect(unsortedAge).to.deep.equal(sortedAge);

                    cy.get("[role=columnheader]").eq(3).click();
                    cy.get(".rt-tr-group .rt-td:nth-child(4)").then(items => {
                        let unsortedEmail = items.map((html) => Cypress.$(html).text()).get();
                        unsortedEmail = unsortedEmail.filter((el) => el != "\u00a0");
                        let sortedEmail = unsortedEmail.slice().sort();
                        expect(unsortedEmail).to.deep.equal(sortedEmail);

                        cy.get("[role=columnheader]").eq(4).click();
                        cy.get(".rt-tbody [role='row'] > div:nth-child(5)").then(items => {
                            function compareSalary(a, b) {
                                return a - b;
                            };
                            let unsortedSalary = items.map((html) => Cypress.$(html).text()).get();
                            unsortedSalary = unsortedSalary.filter((el) => el != "\u00a0");
                            let sortedSalary = unsortedSalary.sort(compareSalary);
                            expect(unsortedSalary).to.deep.equal(sortedSalary);

                            cy.get("[role=columnheader]").eq(5).click();
                            cy.get(".rt-tr-group .rt-td:nth-child(6)").then(items => {
                                let unsortedDepartment = items.map((html) => Cypress.$(html).text()).get();
                                unsortedDepartment = unsortedDepartment.filter((el) => el != "\u00a0");
                                let sortedDepartment = unsortedDepartment.slice().sort();
                                expect(unsortedDepartment).to.deep.equal(sortedDepartment);
                            });
                        });
                    });
                });
            });
        });
    });

    it("Verify table data is sorted descending", () => {
        cy.get("[role=columnheader]").eq(0).dblclick();
        cy.get(".rt-tr-group .rt-td:nth-child(1)").then(items => {
            let unsortedFirstName = items.map((html) => Cypress.$(html).text()).get();
            unsortedFirstName = unsortedFirstName.filter((el) => el != "\u00a0");
            let sortedFirstName = unsortedFirstName.slice().sort().reverse();
            expect(unsortedFirstName).to.deep.equal(sortedFirstName);

            cy.get("[role=columnheader]").eq(1).dblclick();
            cy.get(".rt-tr-group .rt-td:nth-child(2)").then(items => {
                let unsortedLastName = items.map((html) => Cypress.$(html).text()).get();
                unsortedLastName = unsortedLastName.filter((el) => el != "\u00a0");
                let sortedLastName = unsortedLastName.slice().sort().reverse();
                expect(unsortedLastName).to.deep.equal(sortedLastName);

                cy.get("[role=columnheader]").eq(2).dblclick();
                cy.get(".rt-tr-group .rt-td:nth-child(3)").then(items => {
                    function compareAge(a, b) {
                        return b - a;
                    };
                    let unsortedAge = items.map((html) => Cypress.$(html).text()).get();
                    unsortedAge = unsortedAge.filter((el) => el != "\u00a0");
                    let sortedAge = unsortedAge.sort(compareAge);
                    expect(unsortedAge).to.deep.equal(sortedAge);

                    cy.get("[role=columnheader]").eq(3).dblclick();
                    cy.get(".rt-tr-group .rt-td:nth-child(4)").then(items => {
                        let unsortedEmail = items.map((html) => Cypress.$(html).text()).get();
                        unsortedEmail = unsortedEmail.filter((el) => el != "\u00a0");
                        let sortedEmail = unsortedEmail.slice().sort().reverse();
                        expect(unsortedEmail).to.deep.equal(sortedEmail);

                        cy.get("[role=columnheader]").eq(4).dblclick();
                        cy.get(".rt-tbody [role='row'] > div:nth-child(5)").then(items => {
                            function compareSalary(a, b) {
                                return b - a;
                            };
                            let unsortedSalary = items.map((html) => Cypress.$(html).text()).get();
                            unsortedSalary = unsortedSalary.filter((el) => el != "\u00a0");
                            let sortedSalary = unsortedSalary.sort(compareSalary);
                            expect(unsortedSalary).to.deep.equal(sortedSalary);

                            cy.get("[role=columnheader]").eq(5).dblclick();
                            cy.get(".rt-tr-group .rt-td:nth-child(6)").then(items => {
                                let unsortedDepartment = items.map((html) => Cypress.$(html).text()).get();
                                unsortedDepartment = unsortedDepartment.filter((el) => el != "\u00a0");
                                let sortedDepartment = unsortedDepartment.slice().sort().reverse();
                                expect(unsortedDepartment).to.deep.equal(sortedDepartment);
                            });
                        });
                    });
                });
            });
        });
    });
}); 