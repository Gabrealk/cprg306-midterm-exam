"use client";

import { useState, useEffect } from "react";
import RandomQuote from "./random-quote";
import FavouriteQuotes from "./favourite-quotes";
import CustomQuote from "./custom-quote";

export default function Home() {
  const [favouriteQuotes, setFavouriteQuotes] = useState([]);

  function handleAddFavourite(quote) {
    if (quote && !favouriteQuotes.some((q) => q.id === quote.id)) {
      setFavouriteQuotes((prevQuotes) => [...prevQuotes, quote]);
    }
  }

  function handleRemoveFavourite(quote) {
    setFavouriteQuotes(favouriteQuotes.filter((q) => q.id !== quote.id));
  }

  return (
    <>
      <header>
        <div className="text-gray-500 text-right m-1">
          CPRG306 - Midterm Exam
        </div>
      </header>

      <main className="flex w-full p-2 sm:flex sm:justify-center">
        <div className="max-w-full w-full sm:max-w-lg">
          <h1 className="text-3xl font-bold text-center">
            Motivational Quote Genie
          </h1>

          <RandomQuote onAddFavourite={handleAddFavourite} />
          <hr className="my-4" />
          <FavouriteQuotes
            quotes={favouriteQuotes}
            onRemoveFavourite={handleRemoveFavourite}
          />
          <hr className="my-4" />
          <CustomQuote />
        </div>
      </main>
    </>
  );
}
