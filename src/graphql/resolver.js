import { GET_CART_HIDDEN } from "./queries";

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_args, { cache }) => {
      const { cartHidden } = cache.readQuery({ query: GET_CART_HIDDEN });
      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden },
      });
    },
  },
};
