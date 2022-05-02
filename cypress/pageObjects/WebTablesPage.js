import BasePage from "./BasePage";

class WebTablesPage extends BasePage {
  static get url() {
    return "/webtables";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }

  static get pressAddButton() {
    return cy.get("#addNewRecordButton");
  }

  static get firstNameInputField() {
    return cy.get("#firstName");
  }

  static get lastNameInputField() {
    return cy.get("#lastName");
  }

  static get emailInputField() {
    return cy.get("#userEmail");
  }

  static get ageInputField() {
    return cy.get("#age");
  }

  static get salaryInputField() {
    return cy.get("#salary");
  }

  static get departamentInputField() {
    return cy.get("#department");
  }

  static get pressSubmitButton() {
    return cy.get("#submit");
  }

  //validate
  static get getRow() {
    return cy.get("[role='rowgroup']");
  }

  static findRow(value) {
    return this.getRow.contains(value).parent();
  }

  static deleteRow(value) {
    return this.findRow(value).find("[title='Delete']");
  }
}

export default WebTablesPage;
