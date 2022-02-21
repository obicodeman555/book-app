import { InMemoryCache } from "@apollo/client";

import { makeVar } from "@apollo/client";

export const cartHiddenVar = makeVar(true);
export const cartItemsVar = makeVar([]);
// export const quantityOfItemsVar = makeVar(1);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartHidden: {
          read() {
            return cartHiddenVar();
          },
        },

        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
      },
    },
  },
});
