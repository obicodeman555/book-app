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
