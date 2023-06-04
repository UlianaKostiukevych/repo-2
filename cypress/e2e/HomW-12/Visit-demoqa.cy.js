import { faker } from '@faker-js/faker';
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
        cy.get("p#currentAddress").should("contain.text", `Current Address :${randomCurrentAddress}`);
        cy.get("p#permanentAddress").should("contain.text", `Permananet Address :${randomPermamentAddress}`)  
    })
})




/*cy.get('.rt-tbody').find(".rt-tr-group").its('length').then((length) => {
    lenBefore = length;
    cy.log(String(length + 1))

    cy.get('.rt-tbody').find(".rt-tr-group").its('length').to.deep.equal(lenAfter - 1);*/


//cy.get('.rt-tbody').find(".rt-tr-group").its('length').then((length) => {
                //cy.log('Initial table Length is: ' + lenBefore);
    
                //expect(lenBefore).to.equal(lenBefore + 1);
    
            //cy.get(".action-buttons #delete-record-4").wait(3000).click();
    
    
            /*cy.get('.rt-tbody').find(".rt-tr-group").its('length').then((lenAfter) => {
                lenAfter = lenBefore - 1;
    
                cy.log('After table Length is: ' + lenAfter);
                expect(lenBefore).to.equal(lenAfter - 1);*/
   

/*it.only('should verify table data is sorted ascending', () => {
    cy.get("[role=columnheader]").eq(0).click()

    cy.get(".rt-tbody .rt-tr-group").each(($row, rowIndex) => {

        cy.wrap($row).find(".rt-tr-group:nth-child() .rt-td:nth-child(1)").each(($cell, cellIndex) => {
            cy.wrap($cell).contains(tableDaataSortAsc[rowIndex][cellIndex]);
        })

    })
      });*/

      cy.get(".rt-tbody [role=rowgroup]")
      .find(".rt-td")
      .then((rows) => {
          rows.toArray().forEach((element) => {
          if (document.getElementById("dated").innerHTML.should('be.not.empty')) {
          //rows.index(element) will give you the row index
  
             cy.log(rows.index(element));
          }