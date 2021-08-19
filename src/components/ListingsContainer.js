import React from "react";
import ListingCard from "./ListingCard"


function ListingsContainer({listings, handleClick, handleDelete}) {
  console.log(listings)
  const listingCards = listings.map((listing) => (
    
    <ListingCard key={listing.id} listing={listing} handleClick={handleClick} handleDelete={handleDelete} />

  ))

  
  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
