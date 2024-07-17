describe("Interview test", () => {
  it("Visits coop bank page and navigates through all the headers", () => {
    cy.visit("https://www.co-opbank.co.ke/");

    // cy.get("#menu-item-758 > a").click();
    cy.get("#menu-item-757 > a").click();
    cy.get("#menu-item-756 > a").click();

    cy.get("#menu-item-271381 > a").click();
    cy.get("#menu-item-754 > a").click();
    cy.get("#menu-item-753 > a").click();
    cy.get("#menu-item-752 > a").click();
    cy.get("#menu-item-750 > a").click();
    cy.get("#menu-item-749 > a").click();
    cy.get("#menu-item-16673 > a").click();
  });
  it("Visits coop bank page and navigates to personal banking and submits forms", () => {
    cy.visit("https://www.co-opbank.co.ke/personal-banking/");

    // cy.get("#menu-item-758 > a").click();
    cy.get("#menu-item-1255 > a").click();

    cy.get(
      ":nth-child(4) > .rounded-lg > .bg-secondary > .shadow > .flex"
    ).click();
    //Name
    cy.get("#input_1_1").type("Phares");
    cy.get("#input_1_2").type("0705154784");
    cy.get("#input_1_4").type("Nairobi");
    cy.get("#input_1_3").type("pharezwk@gmail.com");
    cy.get("#input_1_5").type("Where is the nearest branch");
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
  });
  it("Visits coop bank page investor relations and selects ", () => {
    cy.visit("https://www.co-opbank.co.ke/");
    cy.get("#menu-item-749 > a").click();
    cy.get(
      '[href="https://www.co-opbank.co.ke/investor_categories/press-releases/"]'
    ).click();
    cy.get(".sf-input-select").select(10);
  });
});

Cypress.on("uncaught:exception", (err) => {
  return false;
});
