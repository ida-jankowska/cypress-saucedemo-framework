import { CheckoutLocators } from "./checkout.locators";

export const CheckoutActions = {
  fillCheckoutData(data: {
    firstName: string;
    lastName: string;
    postalCode: string;
  }) {
    cy.get(CheckoutLocators.firstName).type(data.firstName);
    cy.get(CheckoutLocators.lastName).type(data.lastName);
    cy.get(CheckoutLocators.postalCode).type(data.postalCode);
  },
};
