import { LoginLocators } from "../../pages/login/login.locators";
import { SidebarLocators } from "./sidebar.locators";

export const SidebarActions = {
  logout() {
    cy.get(SidebarLocators.openSidebarButton).click();
    cy.get(SidebarLocators.logoutButton).click();
    cy.get(LoginLocators.loginBox).should("be.visible");
  },
};
