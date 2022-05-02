import BasePage from "./BasePage";

class RadioButtonsPage extends BasePage {
  static get url() {
    return "/radio-button";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }

  static get pressYesButton() {
    return cy.get("#yesRadio");
  }

  static get checkResults() {
    return cy.get(".text-success");
  }

  static get pressImpressiveButton() {
    return cy.get("#impressiveRadio");
  }

  static get pressNoButton() {
    return cy.get("#noRadio");
  }

}

export default RadioButtonsPage;

