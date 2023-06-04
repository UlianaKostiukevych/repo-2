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

const randomFirstName_2 = faker.name.firstName(); 
const randomLastName_2 = faker.name.lastName(); 
const randomEmail_2 = faker.internet.email(); 
const randomAge_2 = faker.datatype.number({
    'min': 18,
    'max': 60
}); 
const randomSalary_2 = faker.datatype.number({
    'min': 1000,
    'max': 6000
}); 
const randomDepartment_2 = faker.name.jobArea();


let lenBefore;
let lenAfter;

describe("Demoqa test suite - WEB Tables", () => {
    beforeEach(() => {
        cy.visit("https://demoqa.com/webtables");
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

    it.only("Search user", () => {
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

    it.only("Sort columns", () => {

});
 
    
    



   