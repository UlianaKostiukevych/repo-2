import { faker } from "@faker-js/faker";
const userData_1 = returnUserData();
const userData_2 = returnUserData();

describe("Demoqa test suite - WEB Tables", () => {
  beforeEach(() => {
    cy.visit("webtables");
    cy.get("#addNewRecordButton").click();
    fillUserForm(userData_1);
  });

  it("Create new user", () => {
    verifyUserForm(userData_1);
  });

  it("Edit user", () => {
    cy.get(".action-buttons #edit-record-4").click();
    fillUserForm(userData_2);
    verifyUserForm(userData_2);
  });

  it("Delete user", () => {
    cy.get("#delete-record-4").click();
    cy.get(".rt-tr-group:nth-child(4) .rt-td").each((cell) => {
      expect(cell).to.have.text("\u00a0");
    });
  });

  it("Search user", () => {
    searchUser(userData_1);
  });

  it("Verify table data is sorted ascending", () => {
    sortColumnByAsc(0);
    sortColumnByAsc(1);
    sortColumnByAscForNumbers(2);
    sortColumnByAsc(3);
    sortColumnByAscForNumbers(4);
    sortColumnByAsc(5);
  });

  it("Verify table data is sorted descending", () => {
    sortColumnByDesc(0);
    sortColumnByDesc(1);
    sortColumnByDescForNumbers(2);
    sortColumnByDesc(3);
    sortColumnByDescForNumbers(4);
    sortColumnByDesc(5);
  });
});

function returnUserData() {
  return {
    randomFirstName: faker.person.firstName(),
    randomLastName: faker.person.lastName(),
    randomEmail: faker.internet.email(),
    randomAge: faker.number.int({
      min: 18,
      max: 60,
    }),
    randomSalary: faker.number.int({
      min: 1000,
      max: 6000,
    }),
    randomDepartment: faker.person.jobArea(),
  };
}

function fillUserForm(userData_1) {
  cy.get("#firstName").clear().type(userData_1.randomFirstName);
  cy.get("#lastName").clear().type(userData_1.randomLastName);
  cy.get("#userEmail").clear().type(userData_1.randomEmail);
  cy.get("#age").clear().type(userData_1.randomAge);
  cy.get("#salary").clear().type(userData_1.randomSalary);
  cy.get("#department").clear().type(userData_1.randomDepartment);
  cy.get("#submit").click();
}

function verifyUserForm(userData_1) {
  cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(1)").should(
    "have.text",
    `${userData_1.randomFirstName}`,
  );
  cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(2)").should(
    "have.text",
    `${userData_1.randomLastName}`,
  );
  cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(3)").should(
    "have.text",
    `${userData_1.randomAge}`,
  );
  cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(4)").should(
    "have.text",
    `${userData_1.randomEmail}`,
  );
  cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(5)").should(
    "have.text",
    `${userData_1.randomSalary}`,
  );
  cy.get(".rt-tr-group:nth-child(4) .rt-td:nth-child(6)").should(
    "have.text",
    `${userData_1.randomDepartment}`,
  );
}

function searchUser(userData_1) {
  cy.get("#searchBox").clear().type(userData_1.randomFirstName);
  cy.get(".rt-tr-group:nth-child(1)").should(
    "contain.text",
    `${userData_1.randomFirstName}`,
  );
  cy.get("#searchBox").clear().type(userData_1.randomLastName);
  cy.get(".rt-tr-group:nth-child(1)").should(
    "contain.text",
    `${userData_1.randomLastName}`,
  );
  cy.get("#searchBox").clear().type(userData_1.randomAge);
  cy.get(".rt-tr-group:nth-child(1)").should(
    "contain.text",
    `${userData_1.randomAge}`,
  );
  cy.get("#searchBox").clear().type(userData_1.randomEmail);
  cy.get(".rt-tr-group:nth-child(1)").should(
    "contain.text",
    `${userData_1.randomEmail}`,
  );
  cy.get("#searchBox").clear().type(userData_1.randomSalary);
  cy.get(".rt-tr-group:nth-child(1)").should(
    "contain.text",
    `${userData_1.randomSalary}`,
  );
  cy.get("#searchBox").clear().type(userData_1.randomDepartment);
  cy.get(".rt-tr-group:nth-child(1)").should(
    "contain.text",
    `${userData_1.randomDepartment}`,
  );
}

function sortColumnByAsc(columnHeaderIndex) {
  cy.get("[role=columnheader]").eq(columnHeaderIndex).click();
  cy.get(`.rt-tr-group .rt-td:nth-child(${columnHeaderIndex + 1})`).then(
    (items) => {
      let unsortedFirstName = items
        .map((_, html) => Cypress.$(html).text().toLowerCase())
        .get();
      unsortedFirstName = unsortedFirstName.filter((el) => el != "\u00a0");
      let sortedFirstName = unsortedFirstName.slice().sort();
      expect(unsortedFirstName).to.deep.equal(sortedFirstName);
    },
  );
}

function sortColumnByAscForNumbers(columnHeaderIndex) {
  cy.get("[role=columnheader]").eq(columnHeaderIndex).click();
  cy.get(`.rt-tr-group .rt-td:nth-child(${columnHeaderIndex + 1})`).then(
    (items) => {
      function compareNumbers(a, b) {
        return a - b;
      }
      let unsortedAge = items
        .map((_, html) => Cypress.$(html).text().toLowerCase())
        .get();
      unsortedAge = unsortedAge.filter((el) => el != "\u00a0");
      let sortedAge = unsortedAge.sort(compareNumbers);
      expect(unsortedAge).to.deep.equal(sortedAge);
    },
  );
}

function sortColumnByDesc(columnHeaderIndex) {
  cy.get("[role=columnheader]").eq(columnHeaderIndex).dblclick();
  cy.get(`.rt-tr-group .rt-td:nth-child(${columnHeaderIndex + 1})`).then(
    (items) => {
      let unsortedFirstName = items
        .map((_, html) => Cypress.$(html).text().toLowerCase())
        .get();
      unsortedFirstName = unsortedFirstName.filter((el) => el != "\u00a0");
      let sortedFirstName = unsortedFirstName.slice().sort().reverse();
      expect(unsortedFirstName).to.deep.equal(sortedFirstName);
    },
  );
}

function sortColumnByDescForNumbers(columnHeaderIndex) {
  cy.get("[role=columnheader]").eq(columnHeaderIndex).dblclick();
  cy.get(`.rt-tr-group .rt-td:nth-child(${columnHeaderIndex + 1})`).then(
    (items) => {
      function compareNumbers(a, b) {
        return b - a;
      }
      let unsortedAge = items
        .map((_, html) => Cypress.$(html).text().toLowerCase())
        .get();
      unsortedAge = unsortedAge.filter((el) => el != "\u00a0");
      let sortedAge = unsortedAge.sort(compareNumbers);
      expect(unsortedAge).to.deep.equal(sortedAge);
    },
  );
}
