import { InventoryActions } from "../ui/pages/inventory/inventory.actions";
import { NavbarLocators } from "../ui/components/navbar/navbar.locators";
import { NavbarActions } from "../ui/components/navbar/navbar.actions";
import { CartLocators } from "../ui/pages/cart/cart.locators";
import { CheckoutActions } from "../ui/pages/checkout/checkout.actions";
import { CheckoutLocators } from "../ui/pages/checkout/checkout.locators";
import { CHECKOUT_MESSAGES } from "../support/constants/messages/checkout.messages";

export const purchaseProducts = (
  products: { id: string; name: string }[],
  checkoutData: {
    firstName: string;
    lastName: string;
    postalCode: string;
  },
) => {
  products.forEach((product) => {
    InventoryActions.addItemToCart(product.id);
  });

  cy.get(NavbarLocators.cart.badge).should(
    "have.text",
    products.length.toString(),
  );

  NavbarActions.openCart();

  products.forEach((product) => {
    cy.get(CartLocators.cartItems).should("contain", product.name);
  });

  cy.get(CartLocators.checkoutButton).click();

  CheckoutActions.fillCheckoutData(checkoutData);

  cy.get(CheckoutLocators.continueButton).click();
  cy.get(CheckoutLocators.finishButton).click();

  cy.get(CheckoutLocators.orderCompletedHeader)
    .should("be.visible")
    .and("contain", CHECKOUT_MESSAGES.orderCompleted);
};
