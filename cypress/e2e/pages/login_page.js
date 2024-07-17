export class LoginPage {
  username_textbox = 'input[name="username"]';
  password_textbox = 'input[name="password"]';
  login_button = ".oxd-button";

  enterUsername(username) {
    cy.get(this.username_textbox).type(username);
  }

  enterPassword(password) {
    cy.get(this.password_textbox).type(password);
  }

  clickLogin() {
    cy.get(this.login_button).click();
  }

  clickOnWelcomeLink() {
    cy.get(".oxd-userdropdown-tab").click();
  }
}
