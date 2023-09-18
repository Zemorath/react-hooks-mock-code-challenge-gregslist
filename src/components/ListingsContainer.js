import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {

  function handleDelete(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard listing={listing} key={listing.id} onDeleteListing={handleDelete}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
