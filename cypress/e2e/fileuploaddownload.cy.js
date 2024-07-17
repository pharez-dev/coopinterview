/// <reference types="Cypress" />
describe("File upload and download", () => {
  it("uploads file ", () => {
    cy.visit("https://trytestingthis.netlify.app/");

    // cy.get("#myfile").attachFile("wall2");
    //cy.get("input[type=file]").selectFile("./cypress/fixtures/example.json");
  });
  it("downloads file", () => {});
});
