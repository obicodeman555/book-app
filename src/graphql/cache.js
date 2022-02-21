import { InMemoryCache } from "@apollo/client";

import { makeVar } from "@apollo/client";

export const cartHiddenVar = makeVar(true);
export const quantityOfItemsVar = makeVar(1);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartHidden: {
          read() {
            return cartHiddenVar();
          },
        },
      },
    },
  },
});
