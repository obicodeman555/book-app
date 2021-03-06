export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
  return newNumber;
};

export const getReleaseYear = (date) => {
  const releaseDate = new Date(date);
  const year = releaseDate.getFullYear();
  return year;
};

export const getAuthors = (bookAuthors) => {
  let authors = bookAuthors.map((author) => author.name);
  return authors.join(", ");
};

export const getTags = (bookTags) => {
  const tags = bookTags.map((tag) => tag.name);
  return tags.join(", ");
};
export const getGenres = (bookGenres) => {
  const genres = bookGenres.map((genre) => genre.name);
  return genres.join(", ");
};

export const hasAvailableCopies = (numberOfCopies) => {
  return numberOfCopies > 0;
};

export const getReleaseDate = (date) => {
  const releaseDate = new Date(date);

  const month = releaseDate.toLocaleString("en-US", { month: "long" });
  const day = releaseDate.toLocaleString("en-US", { day: "2-digit" });
  let year = releaseDate.getFullYear();

  return `${day} ${month}, ${year}`;
};
