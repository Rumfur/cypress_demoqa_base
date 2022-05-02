import BasePage from "./BasePage";

class ButtonsPage extends BasePage {
  static get url() {
    return "/buttons";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }

  static get pressDouble() {
    return cy.get("#doubleClickBtn");
  }

  static get resultDouble() {
    return cy.get("#doubleClickMessage");
  }

  static get pressRight() {
    return cy.get("#rightClickBtn");
  }

  static get resultRight() {
    return cy.get("#rightClickMessage");
  }

  static get pressDynamic() {
    return cy.get(".btn-primary").contains(/^Click Me/);
  }

  static get resultDynamic() {
    return cy.get("#dynamicClickMessage");
  }

  
}

export default ButtonsPage;
