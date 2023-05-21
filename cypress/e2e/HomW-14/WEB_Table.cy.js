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
        cy.get("#userEmail").type(randomEmail);
        cy.get("#age").type(randomAge);
        cy.get("#salary").type(randomSalary);
        cy.get("#department").type(randomDepartment);

        cy.get("#submit").click();
        cy.get(".rt-tbody").should("exist");

        cy.get("rt-tr-group(3)").should("have.text", `${randomFirstName}`);
    
    })
})