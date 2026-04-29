import { InventoryLocators } from "../../ui/pages/inventory/inventory.locators";
import { LoginLocators } from "../../ui/pages/login/login.locators";
import { AUTH_ERRORS } from "../../support/constants/messages/auth.messages";
import { routes } from "../../support/constants/routes";

describe("Smoke: Login", () => {
  it("should login successfully with standard_user", () => {
    cy.fixture("users").then((users) => {
      cy.visit(routes.login);
      cy.login(users.usernames.standard, users.passwords.valid);
      cy.url().should("include", routes.inventory);
      cy.get(InventoryLocators.inventoryList).should("be.visible");
    });
  });

  it("should block authentication and show error for locked account", () => {
    cy.fixture("users").then((users) => {
      cy.visit(routes.login);
      cy.login(users.usernames.locked, users.passwords.valid);
      cy.get(LoginLocators.errorMessage)
        .should("be.visible")
        .and("contain", AUTH_ERRORS.lockedUser);
    });
  });

  it("should deny login and display error for invalid credentials", () => {
    cy.fixture("users").then((users) => {
      cy.visit(routes.login);
      cy.login(users.usernames.standard, users.passwords.invalid);
      cy.get(LoginLocators.errorMessage)
        .should("be.visible")
        .and("contain", AUTH_ERRORS.invalidCredentials);
    });
  });
});
