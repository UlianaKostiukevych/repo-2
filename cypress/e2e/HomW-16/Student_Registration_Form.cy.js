import { faker } from "@faker-js/faker";
const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomUserGender = { id: "1", name: "Male" };
const randomUserEmail = faker.internet.email();
const randomMobileNumber = faker.phone.number("097#######");
const randomDateOfBirth = faker.date.between({ from: "1950-01-01T00:00:00.000Z", to: "now" }).toLocaleDateString('en-US');
const randomUserSubject = "Maths";
const randomUserHobby_1 = { id: "1", name: "Sports" };
const randomUserHobby_3 = { id: "3", name: "Music" };

const randomUserFile = {
    file: "cypress/fixtures/test.jpg",
    name: "test.jpg",
};
const randomCurrentAddress = `${faker.location.country()}, ${faker.location.city()}, ${faker.location.streetAddress()}`;
const randomStateName = "Haryana";
const randomCityName = "Karnal";

describe("Demoqa test suite - Student Registration Form", () => {
    beforeEach(() => {
        cy.visit("automation-practice-form");
    });

    it("Fill student's registration form and validate entered data", () => {

        cy.get("#firstName").type(randomFirstName);
        cy.get("#lastName").type(randomLastName);
        cy.get("#userEmail").type(randomUserEmail);
        cy.get(`#gender-radio-${randomUserGender.id}`).check({ force: true }); //need to make it random
        cy.get("#userNumber").type(randomMobileNumber);
        cy.get("#dateOfBirthInput").type('{selectall}')
            .type(randomDateOfBirth)
            .type("{enter}");
        cy.get("#subjectsInput").type(randomUserSubject) //need to make it random
            .type("{enter}");
        cy.get(`#hobbies-checkbox-${randomUserHobby_1.id}`).check({ force: true }); //need to make it random
        cy.get(`#hobbies-checkbox-${randomUserHobby_3.id}`).check({ force: true }); //need to make it random
        cy.get("#uploadPicture").selectFile(randomUserFile.file);   //need to make it random
        cy.get("#currentAddress").type(randomCurrentAddress);
        cy.get(".css-1g6gooi #react-select-3-input").click({ force: true }).type(randomStateName) //need to make it random
            .type("{enter}");
        cy.get(".css-1g6gooi #react-select-4-input").click({ force: true }).type(randomCityName) //need to make it random
            .type("{enter}");
        cy.get("#submit").click({ force: true });

        cy.get(".table-responsive .table-striped")
            .should("contain", `${randomFirstName} ${randomLastName}`)
            .and("contain", randomUserEmail)
            .and("contain", randomUserGender.name)
            .and("contain", randomMobileNumber)
            //.and("contain", randomDateOfBirth)
            .and("contain", randomUserSubject)
            .and("contain", randomUserHobby_1.name)
            .and("contain", randomUserHobby_3.name)
            .and("contain", randomUserFile.name)
            .and("contain", randomCurrentAddress)
            .and("contain", `${randomStateName} ${randomCityName}`);
    });
});