import { faker } from "@faker-js/faker";
const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomEmail = faker.internet.email();
const randomAge = faker.datatype.number({
    "min": 18,
    "max": 60
});
const randomSalary = faker.datatype.number({
    "min": 1000,
    "max": 6000
});
const randomDepartment = faker.name.jobArea();

const randomFirstName_2 = faker.name.firstName();
const randomLastName_2 = faker.name.lastName();
const randomEmail_2 = faker.internet.email();
const randomAge_2 = faker.datatype.number({
    "min": 18,
    "max": 60
});
const randomSalary_2 = faker.datatype.number({
    "min": 1000,
    "max": 6000
});
const randomDepartment_2 = faker.name.jobArea();

describe("Demoqa test suite - WEB Tables", () => {
    beforeEach(() => {
        cy.visit("webtables");
    });

    it("Create and edit new user", () => {

        //Create new user
        cy.get("#addNewRecordButton").click();
        cy.get("#firstName").type(randomFirstName);
        cy.get("#lastName").type(randomLastName);
        cy.get("#age").type(randomAge);
        cy.get("#userEmail").type(randomEmail);
        cy.get("#salary").type(randomSalary);
        cy.get("#department").type(randomDepartment);

        cy.get("#submit").click();
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(1)").should("have.text", `${randomFirstName}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(2)").should("have.text", `${randomLastName}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(3)").should("have.text", `${randomAge}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(4)").should("have.text", `${randomEmail}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(5)").should("have.text", `${randomSalary}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(6)").should("have.text", `${randomDepartment}`);

        //Edit created user
        cy.get(".action-buttons #edit-record-4").click();
        cy.get("#firstName").clear();        
        cy.get("#firstName").type(randomFirstName_2);
        cy.get("#lastName").clear();
        cy.get("#lastName").type(randomLastName_2);
        cy.get("#age").clear();
        cy.get("#age").type(randomAge_2);
        cy.get("#userEmail").clear();
        cy.get("#userEmail").type(randomEmail_2);
        cy.get("#salary").clear();
        cy.get("#salary").type(randomSalary_2);
        cy.get("#department").clear();
        cy.get("#department").type(randomDepartment_2);

        cy.get("#submit").click();
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(1)").should("have.text", `${randomFirstName_2}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(2)").should("have.text", `${randomLastName_2}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(3)").should("have.text", `${randomAge_2}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(4)").should("have.text", `${randomEmail_2}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(5)").should("have.text", `${randomSalary_2}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(6)").should("have.text", `${randomDepartment_2}`);
    });

    it("Delete user", () => {

        cy.get(".action-buttons #delete-record-3").click();
        cy.get(".rt-tr-group:nth-child(3)").should("have.value", "");
    });

    it("Search user", () => {
        cy.get("#searchBox").click().type("Cierra")
        cy.get(".rt-tr-group:nth-child(1) .rt-td:nth-child(1)").should("have.text", "Cierra").wait(2000);
        cy.get("#searchBox").clear();
        cy.get("#searchBox").click().type("Cantrell");
        cy.get(".rt-tr-group:nth-child(1) .rt-td:nth-child(2)").should("have.text", "Cantrell").wait(2000);
        cy.get("#searchBox").clear();
        cy.get("#searchBox").click().type("29");
        cy.get(".rt-tr-group:nth-child(1) .rt-td:nth-child(3)").should("have.text", "29").wait(2000);
        cy.get("#searchBox").clear();
        cy.get("#searchBox").click().type("cierra@example.com");
        cy.get(".rt-tr-group:nth-child(1) .rt-td:nth-child(4").should("have.text", "cierra@example.com").wait(2000);
        cy.get("#searchBox").clear();
        cy.get("#searchBox").click().type("12000");
        cy.get(".rt-tr-group:nth-child(1) .rt-td:nth-child(5)").should("have.text", "12000").wait(2000);
        cy.get("#searchBox").clear();
        cy.get("#searchBox").click().type("Legal");
        cy.get(".rt-tr-group:nth-child(1) .rt-td:nth-child(6)").should("have.text", "Legal").wait(2000);
    });

    it("Verify table data is sorted ascending", () => {
        cy.get("[role=columnheader]").eq(0).click();
        cy.get(".rt-tr-group .rt-td:nth-child(1)").then(items => {
            let unsortedFirstName = items.map((index, html) => Cypress.$(html).text()).get();
            unsortedFirstName = unsortedFirstName.filter((el) => el != "\u00a0");
            let sortedFirstName = unsortedFirstName.slice().sort();
            expect(unsortedFirstName).to.deep.equal(sortedFirstName);
            cy.wait(3000);

            cy.get("[role=columnheader]").eq(1).click();
            cy.get(".rt-tr-group .rt-td:nth-child(2)").then(items => {
                let unsortedLastName = items.map((index, html) => Cypress.$(html).text()).get();
                unsortedLastName = unsortedLastName.filter((el) => el != "\u00a0");
                let sortedLastName = unsortedLastName.slice().sort();
                expect(unsortedLastName).to.deep.equal(sortedLastName);
                cy.wait(3000);

                cy.get("[role=columnheader]").eq(2).click();
                cy.get(".rt-tr-group .rt-td:nth-child(3)").then(items => {
                    function compareAge(a, b) {
                        return a - b;
                    };
                    let unsortedAge = items.map((index, html) => Cypress.$(html).text()).get();
                    unsortedAge = unsortedAge.filter((el) => el != "\u00a0");
                    let sortedAge = unsortedAge.sort(compareAge);
                    expect(unsortedAge).to.deep.equal(sortedAge);
                    cy.wait(3000);

                    cy.get("[role=columnheader]").eq(3).click();
                    cy.get(".rt-tr-group .rt-td:nth-child(4)").then(items => {
                        let unsortedEmail = items.map((index, html) => Cypress.$(html).text()).get();
                        unsortedEmail = unsortedEmail.filter((el) => el != "\u00a0");
                        let sortedEmail = unsortedEmail.slice().sort();
                        expect(unsortedEmail).to.deep.equal(sortedEmail);
                        cy.wait(3000);

                        cy.get("[role=columnheader]").eq(4).click();
                        cy.get(".rt-tbody [role='row'] > div:nth-child(5)").then(items => {
                            function compareSalary(a, b) {
                                return a - b;
                            };
                            let unsortedSalary = items.map((index, html) => Cypress.$(html).text()).get();
                            unsortedSalary = unsortedSalary.filter((el) => el != "\u00a0");
                            let sortedSalary = unsortedSalary.sort(compareSalary);
                            expect(unsortedSalary).to.deep.equal(sortedSalary);
                            cy.wait(3000);

                            cy.get("[role=columnheader]").eq(5).click();
                            cy.get(".rt-tr-group .rt-td:nth-child(6)").then(items => {
                                let unsortedDepartment = items.map((index, html) => Cypress.$(html).text()).get();
                                unsortedDepartment = unsortedDepartment.filter((el) => el != "\u00a0");
                                let sortedDepartment = unsortedDepartment.slice().sort();
                                expect(unsortedDepartment).to.deep.equal(sortedDepartment);
                                cy.wait(3000);
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
            let unsortedFirstName = items.map((index, html) => Cypress.$(html).text()).get();
            unsortedFirstName = unsortedFirstName.filter((el) => el != "\u00a0");
            let sortedFirstName = unsortedFirstName.slice().sort().reverse();
            expect(unsortedFirstName).to.deep.equal(sortedFirstName);
            cy.wait(3000);

            cy.get("[role=columnheader]").eq(1).dblclick();
            cy.get(".rt-tr-group .rt-td:nth-child(2)").then(items => {
                let unsortedLastName = items.map((index, html) => Cypress.$(html).text()).get();
                unsortedLastName = unsortedLastName.filter((el) => el != "\u00a0");
                let sortedLastName = unsortedLastName.slice().sort().reverse();
                expect(unsortedLastName).to.deep.equal(sortedLastName);
                cy.wait(3000);

                cy.get("[role=columnheader]").eq(2).dblclick();
                cy.get(".rt-tr-group .rt-td:nth-child(3)").then(items => {
                    function compareAge(a, b) {
                        return b - a;
                    };
                    let unsortedAge = items.map((index, html) => Cypress.$(html).text()).get();
                    unsortedAge = unsortedAge.filter((el) => el != "\u00a0");
                    let sortedAge = unsortedAge.sort(compareAge);
                    expect(unsortedAge).to.deep.equal(sortedAge);
                    cy.wait(3000);

                    cy.get("[role=columnheader]").eq(3).dblclick();
                    cy.get(".rt-tr-group .rt-td:nth-child(4)").then(items => {
                        let unsortedEmail = items.map((index, html) => Cypress.$(html).text()).get();
                        unsortedEmail = unsortedEmail.filter((el) => el != "\u00a0");
                        let sortedEmail = unsortedEmail.slice().sort().reverse();
                        expect(unsortedEmail).to.deep.equal(sortedEmail);
                        cy.wait(3000);

                        cy.get("[role=columnheader]").eq(4).dblclick();
                        cy.get(".rt-tbody [role='row'] > div:nth-child(5)").then(items => {
                            function compareSalary(a, b) {
                                return b - a;
                            };
                            let unsortedSalary = items.map((index, html) => Cypress.$(html).text()).get();
                            unsortedSalary = unsortedSalary.filter((el) => el != "\u00a0");
                            let sortedSalary = unsortedSalary.sort(compareSalary);
                            expect(unsortedSalary).to.deep.equal(sortedSalary);
                            cy.wait(3000);

                            cy.get("[role=columnheader]").eq(5).dblclick();
                            cy.get(".rt-tr-group .rt-td:nth-child(6)").then(items => {
                                let unsortedDepartment = items.map((index, html) => Cypress.$(html).text()).get();
                                unsortedDepartment = unsortedDepartment.filter((el) => el != "\u00a0");
                                let sortedDepartment = unsortedDepartment.slice().sort().reverse();
                                expect(unsortedDepartment).to.deep.equal(sortedDepartment);
                                cy.wait(3000);
                            });
                        });
                    });
                });
            });
        });
    });
});  