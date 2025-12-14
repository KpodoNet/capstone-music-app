function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className="max-w-6xl mx-auto px-4 my-8">
      <div className="flex gap-2 justify-center">
        <input
          type="text"
          placeholder="Search songs or artists..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={onSearch}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
