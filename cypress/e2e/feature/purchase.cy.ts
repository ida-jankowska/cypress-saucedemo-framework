import { SidebarActions } from "../../ui/components/sidebar/sidebar.actions";
import { PRODUCTS } from "../../support/constants/products";
import { purchaseProducts } from "../../flows/purchase.flow";

const checkoutData = {
  firstName: "John",
  lastName: "Smith",
  postalCode: "12345",
};

describe("E2E: Purchase flow", () => {
  it("should complete purchase successfully", () => {
    cy.loginAsStandardUser();
    purchaseProducts([PRODUCTS.fleeceJacket], checkoutData);
    SidebarActions.logout();
  });
});
