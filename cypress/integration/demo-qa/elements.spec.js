import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import RadioButtonsPage from "../../pageObjects/RadioButtonsPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";
import ButtonsPage from "../../pageObjects/ButtonsPage";
import LinksPage from "../../pageObjects/LinkPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Filling in Text Boxes", () => {
      // Add scenario stuff here

      //inputs
      TextBoxPage.fullNameInputField.type("Ben Dover");
      TextBoxPage.emailInputField.type("DoverBoner@gmail.com");
      TextBoxPage.curAddressInputField.type("Vasja's garden");
      TextBoxPage.permAddressInputField.type("Vasja's basement");
      //submit
      TextBoxPage.submitbutton.click();

      //validtation
      TextBoxPage.paragraphName
        .should("exist")
        .should("be.visible")
        .should("contain", "Ben Dover");

      TextBoxPage.paragraphEmail.should("contain", "DoverBoner@gmail.com");

      TextBoxPage.paragraphCurAddress.should("contain", "Vasja's garden");

      TextBoxPage.paragraphPermAddress.should("contain", "Vasja's basement");
    });

    it("Filling in Text Boxes", () => {
      cy.fixture("textBoxData").then((data) => {
        TextBoxPage.fullNameInputField.type(data.fullName);
        TextBoxPage.emailInputField.type(data.email);
        TextBoxPage.curAddressInputField.type(data.curAddress);
        TextBoxPage.permAddressInputField.type(data.permAddress);

        TextBoxPage.submitbutton.click();

        TextBoxPage.paragraphName.should("contain", data.fullName);
        TextBoxPage.paragraphEmail.should("contain", data.email);
        TextBoxPage.paragraphCurAddress.should("contain", data.curAddress);
        TextBoxPage.paragraphPermAddress.should("contain", data.permAddress);
      });
    });
  });

  context("Check Box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it("Click checkboxes - Notes And general", () => {
      CheckBoxPage.expandAll.click();
      CheckBoxPage.checkBoxTitles.contains("Notes").click();
      CheckBoxPage.checkBoxTitles.contains("General").click();
      CheckBoxPage.checkResults
        .should("contain", "notes")
        .should("contain", "general");
    });

    it("Click checkboxes - Office", () => {
      CheckBoxPage.expandAll.click();
      CheckBoxPage.checkBoxTitles.contains("Office").click();
      CheckBoxPage.checkResults
        .should("contain", "office")
        .should("contain", "public")
        .should("contain", "private")
        .should("contain", "classified")
        .should("contain", "general");
    });
  });

  context("Radio buttons scenarios", () => {
    beforeEach(() => {
      RadioButtonsPage.visit();
    });

    it("Click Radio Buttons", () => {
      RadioButtonsPage.pressYesButton.click({ force: true });
      RadioButtonsPage.checkResults.should("contain", "Yes");
      RadioButtonsPage.pressImpressiveButton.click({ force: true });
      RadioButtonsPage.checkResults.should("contain", "Impressive");
      RadioButtonsPage.checkResults.should("exist").should("be.visible");
    });
  });

  context("Web Tables scenarios", () => {
    beforeEach(() => {
      WebTablesPage.visit();
    });

    it("Create User", () => {
      //create user
      WebTablesPage.pressAddButton.click();
      WebTablesPage.firstNameInputField.type("Ben");
      WebTablesPage.lastNameInputField.type("Dover");
      WebTablesPage.emailInputField.type("Dug@gmail.com");
      WebTablesPage.ageInputField.type("69");
      WebTablesPage.salaryInputField.type("420");
      WebTablesPage.departamentInputField.type("Influencer");
      WebTablesPage.pressSubmitButton.click();

      WebTablesPage.getRow.should("exist").should("be.visible");
      WebTablesPage.findRow("Dug@gmail.com").should("contain", "Dover");
      WebTablesPage.findRow("Dug@gmail.com").should("contain", "Ben");
    });

    it("Delete Users", () => {
      //delete user with email
      WebTablesPage.getRow.should("contain", "alden@example.com");
      WebTablesPage.deleteRow("alden@example.com").click();
      WebTablesPage.getRow.should("not.contain", "alden@example.com");
      WebTablesPage.getRow.should("contain", "kierra@example.com");
      WebTablesPage.deleteRow("kierra@example.com").click();
      WebTablesPage.getRow.should("not.contain", "kierra@example.com");
      WebTablesPage.getRow.should("contain", "cierra@example.com");
      WebTablesPage.deleteRow("cierra@example.com").click();
      WebTablesPage.getRow.should("not.contain", "cierra@example.com");
      //method that deletes based on email
    });
  });

  context("Buttons scenarios", () => {
    beforeEach(() => {
      ButtonsPage.visit();
    });

    it("Click all buttons", () => {
      ButtonsPage.pressDouble.dblclick();
      ButtonsPage.resultDouble
        .should("be.visible")
        .should("contain", "You have done a double click");
      ButtonsPage.pressRight.rightclick();
      ButtonsPage.resultRight
        .should("be.visible")
        .should("contain", "You have done a right click");
      ButtonsPage.pressDynamic.click();
      ButtonsPage.resultDynamic
        .should("be.visible")
        .should("contain", "You have done a dynamic click");
    });
  });

  context("Links scenarios", () => {
    beforeEach(() => {
      LinksPage.visit();
    });

    it.only("API intercepting", () => {
      //cy.intercept("GET", "created", { statusCode: 400 });
      LinksPage.createdLink.click();
      LinksPage.linkResponse.should("contain", "201");
    });
  });
});
