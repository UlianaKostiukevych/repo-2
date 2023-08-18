const API_URL = Cypress.env("API_BASE_URL");
let token;

describe("Create API tests", () => {
  context("Create Token endpoint", () => {
    it("POST - Create Token", () => {
      cy.request({
        url: `${API_URL}/auth`,
        method: "POST",
        body: {
          username: "admin",
          password: "password123",
        },
      }).then((response) => {
        expect(response.status).to.be.eq(200);
        token = response.body.token;
      });
    });

    it("GET - Get booking Id", () => {
      cy.request({
        url: `${API_URL}/booking`,
        method: "GET",
      }).then((response) => {
        expect(response.status).to.be.eq(200);
        expect(response.body).to.be.a("Array");
      });
      cy.wait(1000);
    });

    it("GET - Get booking", () => {
      cy.request({
        url: `${API_URL}/booking/7`,
        method: "GET",
      }).then((response) => {
        expect(response.status).to.be.eq(200);
        expect(response.body.firstname).to.be.a("String");
        expect(response.body.lastname).to.be.a("String");
        expect(response.body.totalprice).to.be.a("Number");
        expect(response.body.depositpaid).to.be.a("Boolean");
        expect(response.body.bookingdates).to.be.a("Object");
        expect(response.body.additionalneeds).to.be.a("String");
      });
    });
    it("POST - Create booking", () => {
      cy.request({
        url: `${API_URL}/booking`,
        method: "POST",
        body: {
          firstname: "Jim",
          lastname: "Brown",
          totalprice: 111,
          depositpaid: true,
          bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01",
          },
          additionalneeds: "Breakfast",
        },
      }).then((response) => {
        expect(response.status).to.be.eq(200);
        expect(response.body.booking.firstname).to.be.eq("Jim");
        expect(response.body.booking.lastname).to.be.eq("Brown");
        expect(response.body.booking.totalprice).to.be.eq(111);
        expect(response.body.booking.depositpaid).to.be.eq(true);
        expect(response.body.booking.bookingdates.checkin).to.be.eq(
          "2018-01-01",
        );
        expect(response.body.booking.bookingdates.checkout).to.be.eq(
          "2019-01-01",
        );
        expect(response.body.booking.additionalneeds).to.be.eq("Breakfast");
      });
    });

    it("PUT - Update booking", () => {
      cy.request({
        url: `${API_URL}/booking/7`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Cookie: `token=${token}`,
        },
        body: {
          firstname: "Uliana",
          lastname: "Senenka",
          totalprice: 1000,
          depositpaid: false,
          bookingdates: {
            checkin: "2024-01-01",
            checkout: "2024-03-03",
          },
          additionalneeds: "Massage",
        },
      }).then((response) => {
        expect(response.status).to.be.eq(200);
        expect(response.body.firstname).to.be.eq("Uliana");
        expect(response.body.lastname).to.be.eq("Senenka");
        expect(response.body.totalprice).to.be.eq(1000);
        expect(response.body.depositpaid).to.be.eq(false);
        expect(response.body.bookingdates.checkin).to.be.eq("2024-01-01");
        expect(response.body.bookingdates.checkout).to.be.eq("2024-03-03");
        expect(response.body.additionalneeds).to.be.eq("Massage");
      });
    });

    it("PATCH - Partial Update booking", () => {
      cy.request({
        url: `${API_URL}/booking/7`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Cookie: `token=${token}`,
        },
        body: {
          firstname: "Victor",
          lastname: "Petushkov",
        },
      }).then((response) => {
        expect(response.status).to.be.eq(200);
        expect(response.body.firstname).to.be.eq("Victor");
        expect(response.body.lastname).to.be.eq("Petushkov");
        expect(response.body.totalprice).to.be.eq(1000);
        expect(response.body.depositpaid).to.be.eq(false);
        expect(response.body.bookingdates.checkin).to.be.eq("2024-01-01");
        expect(response.body.bookingdates.checkout).to.be.eq("2024-03-03");
        expect(response.body.additionalneeds).to.be.eq("Massage");
      });
    });
    it("DELETE - Delete booking", () => {
      cy.request({
        url: `${API_URL}/booking/7`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Cookie: `token=${token}`,
        },
      }).then((response) => {
        expect(response.status).to.be.eq(201);
      });
    });
  });
});
