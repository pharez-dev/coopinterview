/// <reference types="Cypress" />
import { LoginPage } from "./pages/login_page";

const loginPage = new LoginPage();
describe("Page object model Practice", () => {
  /**
   * Can use it.skip or it.only
   * it.skip => skips a specific test
   * it.only => runs only the selected test
   * They work using the describe block
   **/
  /**
   * Before Each can be inside or outside the describe block
   *
   * They work using the describe block
   **/
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });
  it("Navigates to the url and logs in", () => {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    loginPage.clickOnWelcomeLink();
    //How to validate text on alert box
    // cy.on("window:alert", (txt) => {
    //   expect(txt).to.be.equal("message");
    // });
  });

  it("Navigates to the url and logs in with invalid password", () => {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin13");
    loginPage.clickLogin();
    loginPage.clickOnWelcomeLink();
    //How to validate text on alert box
    // cy.on("window:alert", (txt) => {
    //   expect(txt).to.be.equal("message");
    // });
  });
});
