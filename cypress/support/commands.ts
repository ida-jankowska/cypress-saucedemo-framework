/// <reference types="cypress" />

import { LoginLocators } from "../ui/pages/login/login.locators";
import { routes } from "./constants/routes";

Cypress.Commands.add("login", (user: string, password: string) => {
  cy.get(LoginLocators.usernameInput).type(user);
  cy.get(LoginLocators.passwordInput).type(password);
  cy.get(LoginLocators.loginButton).click();
});

Cypress.Commands.add("loginAsStandardUser", () => {
  cy.fixture("users").then((users) => {
    cy.visit(routes.login);
    cy.login(users.usernames.standard, users.passwords.valid);
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(user: string, password: string): Chainable<void>;
      loginAsStandardUser(): Chainable<void>;
    }
  }
}

export {};
