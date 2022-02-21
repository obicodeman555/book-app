import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  {
    books {
      id
      title
      subtitle
      publisher
      featured
      price
      likes
      rating
      currency
      available_copies
      full_description
      number_of_purchases

      image_url
      release_date
      authors {
        name
      }
      tags {
        name
      }

      genres {
        name
      }
    }
  }
`;

export const GET_SINGLE_BOOK = gql`
  query book($id: ID!) {
    book(id: $id) {
      id
      title
      subtitle
      publisher
      featured
      price
      likes
      rating
      currency
      available_copies
      full_description
      number_of_purchases

      image_url
      release_date
      authors {
        name
      }
      tags {
        name
      }

      genres {
        name
      }
    }
  }
`;

// export const GET_CART_HIDDEN = gql`
//   query {
//     cartHidden @client
//   }
// `;
