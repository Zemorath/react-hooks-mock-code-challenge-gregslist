import React, { useState, useEffect } from "react";

function Search({ listings, setListings }) {

  const [search, setSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    const query = search
    if (search === '') {
      fetch(`http://localhost:6001/listings`)
        .then((r) => r.json())
        .then((listings) => setListings(listings))
        
    } else {
      const filteredListings = listings.filter((listing) => {
        return listing.description.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      })
      setListings(filteredListings)
    }
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
