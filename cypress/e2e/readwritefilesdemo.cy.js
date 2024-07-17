/// <reference types="Cypress" />
beforeEach(() => {
  cy.fixture("example.json").as("test_data");
});
describe("Reading files", () => {
  it("Read files using Fixture", function () {
    cy.fixture("example.json").then((data) => {
      cy.log(data.name);
      cy.log(data.email);
      cy.log(data.body);
    });

    //this keyword will not work in arrow functions
    cy.log(`Fixtures example with **this keyword** ${this.test_data.name}`);

    cy.get("@test_data").then((data) => {
      cy.log(`This is the test data ${data.name}`);
    });
  });
  it("Reads files using readFile()", () => {
    cy.readFile("./cypress/fixtures/example.json").then((data) => {
      cy.log(data);
    });
  });

  it("Writes to file", () => {
    cy.writeFile("./writtenfiles/sample.txt", "Hello, this is written\n");
    cy.writeFile("./writtenfiles/sample.txt", "I am learning\n", {
      flag: "a+",
    });
  });
});
