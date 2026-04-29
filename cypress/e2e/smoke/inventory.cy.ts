import { InventoryLocators } from "../../ui/pages/inventory/inventory.locators";

describe("Smoke: Inventory", () => {
  it("should load inventory after login", () => {
    cy.loginAsStandardUser();
    cy.get(InventoryLocators.inventoryList)
      .should("be.visible")
      .and("have.length.greaterThan", 0);
  });
});
