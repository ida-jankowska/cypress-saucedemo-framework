/// <reference types="cypress" />

import { LoginLocators } from "../pages/login/login.locators";

Cypress.Commands.add("login", (user: string, password: string) => {
  cy.get(LoginLocators.usernameInput).type(user);
  cy.get(LoginLocators.passwordInput).type(password);
  cy.get(LoginLocators.loginButton).click();
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(user: string, password: string): Chainable<void>;
    }
  }
}

export {};
