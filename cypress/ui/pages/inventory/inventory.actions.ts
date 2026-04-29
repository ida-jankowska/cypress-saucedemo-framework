import { InventoryLocators } from "./inventory.locators";

export const InventoryActions = {
  addItemToCart(item: string) {
    cy.get(InventoryLocators.addToCartButton(item)).click();
  },
};
