import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [author, setAuthor] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch({ author, keyword });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center mb-6 px-4 max-w-4xl mx-auto">
      <input
        type="text"
        placeholder="Search by author"
        className="p-2 border rounded-md w-full sm:w-1/2"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by keyword"
        className="p-2 border rounded-md w-full sm:w-1/2"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-brownDark text-white px-4 py-2 rounded-md shadow hover:bg-brownLight transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
