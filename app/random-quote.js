"use client";

import { useState, useEffect } from "react";
import Heading from "./heading";
import Quote from "./quote";

const MAX_QUOTE_ID = 1639;

async function fetchQuote(id) {
  let response = await fetch(
    `https://cprg306-midterm-exam-api.vercel.app/api/${id}`
  );
  let data = await response.json();
  return data;
}

export default function RandomQuote({ onAddFavourite }) {
  const [quote, setQuote] = useState(null);

  async function loadRandomQuote() {
    const id = Math.floor(Math.random() * (MAX_QUOTE_ID + 1));
    const newQuote = await fetchQuote(id);
    newQuote.id = id;
    setQuote(newQuote);
  }

  useEffect(() => {
    loadRandomQuote();
  }, []);

  return (
    <section>
      <Heading title="Keeping you motivated every day!" />
      {quote ? (
        <Quote quote={quote} onAddFavourite={onAddFavourite} />
      ) : (
        "Loading..."
      )}
      <button
        className="mt-4 px-4 py-2 w-full rounded-md bg-gray-300 hover:bg-emerald-300"
        onClick={loadRandomQuote}
      >
        Next Quote
      </button>
    </section>
  );
}
