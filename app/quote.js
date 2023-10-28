export default function Quote({ quote, onAddFavourite, onRemoveFavourite }) {
  function handleAddFavourite() {
    onAddFavourite(quote);
  }

  function handleRemoveFavourite() {
    onRemoveFavourite(quote);
  }

  return (
    <div className="bg-white shadow-md rounded-md p-4 m-1">
      <p className="text-lg font-bold mb-2 italic">{quote.quotation}</p>
      <p className="text-gray-500">{quote.author || "Unknown"}</p>
      {onAddFavourite && (
        <button
          className={`mt-4 px-4 py-2 rounded-md hover:bg-emerald-300 ${
            quote.isFavourite ? "bg-emerald-600 text-white" : "bg-gray-300"
          }`}
          onClick={handleAddFavourite}
        >
          {quote.isFavourite ? "Unfavourite" : "Favourite"}
        </button>
      )}
      {onRemoveFavourite && (
        <button
          className="mt-4 px-4 py-2 rounded-md bg-gray-300 hover:bg-emerald-300"
          onClick={handleRemoveFavourite}
        >
          Remove
        </button>
      )}
    </div>
  );
}
