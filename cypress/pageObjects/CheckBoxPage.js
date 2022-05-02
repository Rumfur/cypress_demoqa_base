import BasePage from "./BasePage";

class CheckBoxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }

  static get expandAll() {
    return cy.get("button[aria-label='Expand all']");
  }

  static get checkBoxTitles() {
    return cy.get(".rct-title");
  }

  static get checkResults() {
    return cy.get("#result");
  }

}

export default CheckBoxPage;

