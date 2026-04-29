import { CartLocators } from "../../ui/pages/cart/cart.locators";
import { InventoryActions } from "../../ui/pages/inventory/inventory.actions";
import { NavbarLocators } from "../../ui/components/navbar/navbar.locators";
import { NavbarActions } from "../../ui/components/navbar/navbar.actions";
import { PRODUCTS } from "../../support/constants/products";

describe("Smoke: Cart", () => {
  it("should add product to cart successfully", () => {
    cy.loginAsStandardUser();

    InventoryActions.addItemToCart(PRODUCTS.backpack.id);
    cy.get(NavbarLocators.cart.badge).should("contain", 1);

    NavbarActions.openCart();
    cy.get(CartLocators.cartItems).should("contain", PRODUCTS.backpack.name);
  });
});
