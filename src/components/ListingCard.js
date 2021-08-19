import React, {useState} from "react";

function ListingCard({listing, handleClick, handleDelete}) {
  const {id, description, image, location} = listing;
  const [starClicked, setStarClicked] = useState(false)

  function handleClick() {
    setStarClicked(!starClicked)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {starClicked ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> {location}</span>
        <button onClick={() => handleDelete(id)}  className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
