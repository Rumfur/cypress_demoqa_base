import BasePage from "./BasePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }

  static get fullNameInputField() {
    return cy.get("#userName");
  }

  static get emailInputField() {
    return cy.get("#userEmail");
  }

  static get curAddressInputField() {
    return cy.get("#currentAddress");
  }

  static get permAddressInputField() {
    return cy.get("#permanentAddress");
  }

  static get submitbutton() {
    return cy.get("#submit");
  }

  static get paragraphName(){
    return cy.get("#name");
  }

  static get paragraphEmail(){
    return cy.get("#email");
  }

  static get paragraphCurAddress(){
    return cy.get("p#currentAddress");
  }

  static get paragraphPermAddress(){
    return cy.get("p#permanentAddress");
  }
}

export default TextBoxPage;
