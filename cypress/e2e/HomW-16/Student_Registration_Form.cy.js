import { faker } from "@faker-js/faker";
const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomEmail = faker.internet.email();
//const randomGender = 
/*const randomMobileNumber = faker.phone.imei();
const randomDateOfBirth = 
const randomSubjects = 
const randomePicture = 
const randomCurrentAddress = faker.address.streetAddress();


const randomAge = faker.datatype.number({
    "min": 18,
    "max": 60
});

const randomDepartment = faker.name.jobArea();*/


describe("Demoqa test suite - WEB Tables", () => {
    beforeEach(() => {
        cy.visit("automation-practice-form");
    });

    it("Fill student's registration form and validate entered data", () => {

        cy.get("#firstName").type(randomFirstName);
        cy.get("#lastName").type(randomLastName);
        cy.get("#userEmail").type(randomEmail);
        cy.get(".col-md-9 col-sm-12, .custom-control custom-radio custom-control-inline:nth-child(1)").check();
    })
        /*cy.get("#age").type(randomAge);
        cy.get("#salary").type(randomSalary);
        cy.get("#department").type(randomDepartment);*/

        /*cy.get("#submit").click();
        cy.get(".(4) .rt-td:nth-child(1)").should("have.text", `${randomFirstName}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(2)").should("have.text", `${randomLastName}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(3)").should("have.text", `${randomAge}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(4)").should("have.text", `${randomEmail}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(5)").should("have.text", `${randomSalary}`);
        cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(6)").should("have.text", `${randomDepartment}`);*/

    });
//});
