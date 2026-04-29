import { InventoryLocators } from "../../pages/inventory/inventory.locators";
import { routes } from "../../support/constants/routes";

describe("Smoke: Login", () => {
  it("should login successfully with standard_user", () => {
    cy.fixture("users").then((data) => {
      cy.visit(routes.login);
      cy.login(data.users.standard, data.password);
      cy.url().should("include", routes.inventory);
      cy.get(InventoryLocators.inventoryList).should("be.visible");
    });
  });
});
