import BasePage from "./BasePage";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }
  
  static get getListItems() {
    return cy.get(".list-group-item");
  }

  static get pressGridButton() {
    return cy.get("#demo-tab-grid");
  }

}

export default SelectablePage;
