"use client";

import { useState } from "react";
import Heading from "./heading";

export default function CustomQuote() {
  const [quotation, setQuotation] = useState("");
  const [author, setAuthor] = useState("");
  const [showUpSell, setShowUpSell] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setShowUpSell(true);
  }

  return (
    <section>
      <Heading title="Custom Quote" />
      <p>
        Add your own motivational quote to the list. It will be available for
        everyone to see!
      </p>
      <div className="bg-white shadow-md rounded-md p-4 m-1">
        <form onSubmit={handleSubmit}>
          <label className="block mb-1" htmlFor="quotation">
            Quotation
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2 mb-2"
            type="text"
            id="quotation"
            name="quotation"
            required
            onChange={(event) => setQuotation(event.target.value)}
          />
          <label className="block mb-1" htmlFor="author">
            Author
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2 mb-2"
            type="text"
            id="author"
            name="author"
            required
            onChange={(event) => setAuthor(event.target.value)}
          />
          <button className="mt-2 px-4 py-2 rounded-md bg-gray-300 hover:bg-emerald-300">
            Add
          </button>
        </form>
        {showUpSell && (
          <div className="mt-4 px-4 py-2 rounded-md bg-yellow-300">
            <p className="font-bold">What a great quote!</p>
            <p className="italic ml-2">
              &quot;{quotation}&quot; &ndash;
              {author}
            </p>
            <p>Upgrade now to premium to add your own quotes!</p>
            <button className="mt-2 px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-300 text-bold">
              Upgrade!
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
