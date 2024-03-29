import { faker } from "@faker-js/faker";

const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCurrentAddress = faker.address.streetAddress();
const randomPermamentAddress = faker.address.streetAddress();

describe("Demoqa test suite", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("text_box_url"));
  });

  it("Fill Text Box form", () => {
    cy.get("#userName").type(randomName);
    cy.get("#userEmail").type(randomEmail);
    cy.get("#currentAddress").type(randomCurrentAddress);
    cy.get("#permanentAddress").type(randomPermamentAddress);

    cy.get("#submit").click();
    cy.get("#output").should("exist");

    cy.get("#name").should("have.text", `Name:${randomName}`);
    cy.get("#email").should("have.text", `Email:${randomEmail}`);
    cy.get("p#currentAddress").should(
      "contain.text",
      `Current Address :${randomCurrentAddress}`,
    );
    cy.get("p#permanentAddress").should(
      "contain.text",
      `Permananet Address :${randomPermamentAddress}`,
    );
  });
});
