import { faker } from "@faker-js/faker";
const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomEmail = faker.internet.email();
//const randomMobileNumber = faker.phone.number('097#######');
//const randomDateOfBirth = "18 jun 2000";

/*const randomDateOfBirth = faker.date.between({from:'1950-01-01T00:00:00.000Z', to:'now'});

faker.date.between('now', '2024/05/05').toLocaleDateString();
faker.date.between('1950-01-01T00:00:00.000Z', 'now') 

faker.date.between({ from, to }) 

/*const randomAge = faker.number.int({
    "min": 18,
    "max": 60
});
const randomSalary = faker.number.int({
    "min": 1000,
    "max": 6000
});*/
const randomDepartment = faker.person.jobArea();
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


describe("Demoqa test suite - Student Registration Form", () => {
    beforeEach(() => {
        cy.visit("automation-practice-form");
    });

    it("Fill student's registration form and validate entered data", () => {

        cy.get("#firstName").type(randomFirstName);
        cy.get("#lastName").type(randomLastName);
        cy.get("#userEmail").type(randomEmail);
        //cy.get(".col-md-9 col-sm-12:nth-child(2), #gender-radio-1").check();

        //cy.get(".custom-control custom-radio custom-control-inline:nth-child(2), custom-control-input").check();
        //cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(2)").should("have.text", `${randomLastName}`);

        cy.get("#userNumber").type(randomMobileNumber);
        //cy.get("#dateOfBirthInput").clear().type("18 jun 2000");

    })
        /*cy.get("#salary").type(randomSalary);
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






/*describe("Demoqa test suite - WEB Tables", () => {
    beforeEach(() => {
        cy.visit("automation-practice-form");
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
    });*/