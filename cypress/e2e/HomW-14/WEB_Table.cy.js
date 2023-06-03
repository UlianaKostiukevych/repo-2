import { faker } from '@faker-js/faker';
const randomFirstName = faker.name.firstName(); 
const randomLastName = faker.name.lastName(); 
const randomEmail = faker.internet.email(); 
const randomAge = faker.datatype.number({
    'min': 18,
    'max': 60
}); 
const randomSalary = faker.datatype.number({
    'min': 1000,
    'max': 6000
}); 
const randomDepartment = faker.name.jobArea();


describe("Demoqa test suite", () => {
    beforeEach(() => {
        cy.visit("https://demoqa.com/webtables");
    });
    
    it("Create new user", () => {
        cy.get("#addNewRecordButton").click();
        cy.get("#firstName").type(randomFirstName);
        cy.get("#lastName").type(randomLastName);
        cy.get("#age").type(randomAge);
        cy.get("#userEmail").type(randomEmail);
        cy.get("#salary").type(randomSalary);
        cy.get("#department").type(randomDepartment);

        cy.get("#submit").click();
        //cy.get(".rt-tbody [role=rowgroup]").eq(3).should("exist");
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(1)").should("have.text", `${randomFirstName}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(2)").should("have.text", `${randomLastName}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(3)").should("have.text", `${randomAge}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(4)").should("have.text", `${randomEmail}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(5)").should("have.text", `${randomSalary}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(6)").should("have.text", `${randomDepartment}`);
        cy.get(".rt-thead -header:nth-child(1)").click();
    })
})