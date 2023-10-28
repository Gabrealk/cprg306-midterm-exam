import Quote from "./quote";

import Heading from "./heading";

export default function FavouriteQuotes({ quotes, onRemoveFavourite }) {
  return (
    <section>
      <Heading title="My Favourite Quotes" />
      {quotes.length > 0
        ? quotes.map((quote) => (
            <Quote quote={quote} onRemoveFavourite={onRemoveFavourite} />
          ))
        : "No favourite quotes yet!"}
    </section>
  );
}
