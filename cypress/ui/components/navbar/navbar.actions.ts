import { NavbarLocators } from "./navbar.locators";

export const NavbarActions = {
  openCart() {
    cy.get(NavbarLocators.cart.link).click();
  },
};
