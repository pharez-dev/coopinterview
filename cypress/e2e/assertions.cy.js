/// <reference types="Cypress" />
describe("template spec", () => {
  it("Navigates to ecommerce site and adds to cart and makes payment", () => {
    cy.visit("https://askomdch.com");

    //Assertions example 1
    cy.get("#menu-item-1227 > .menu-link")
      .should("contain", "Store")
      .and("have.class", "menu-link")
      .and("be.visible")
      .click();
    //expect(cy.get("#menu-item-1227 > .menu-link").).to.be.equal("Store");
    cy.get(".post-1215 > .astra-shop-summary-wrap > .button").click();

    //cy.wait(3000) Cypress can wait for any number of milliseconds
    cy.get(".added_to_cart", { timeout: 10000 }).click();

    cy.get(".product-name > a").should("have.text", "Blue Shoes");

    cy.get(".checkout-button").click();

    cy.get("#billing_first_name").type("Brian");

    cy.get("#billing_last_name").type("Blast");

    cy.get("#billing_company").type("BilComp");

    cy.get(
      "#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection"
    );

    cy.get("#billing_address_1").type("Nai");

    cy.get("#billing_address_2").type("Ro");

    cy.get("#billing_city").type("Ron");

    cy.get("#select2-billing_state-container");

    cy.get("#billing_postcode").type("12345");

    cy.get("#billing_phone").type(1234567890);

    cy.get("#billing_email").type("abc@xyz.com");

    cy.get(".wc_payment_method.payment_method_bacs > label").click();

    cy.get("#place_order").click();

    cy.get(".woocommerce-notice").should(
      "have.text",
      "Thank you. Your order has been received."
    );
  });
});
