import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const API = "http://localhost:6001/listings"

function App() {
  const [listings, setListings] = useState([])
  const [result, setResult] = useState([])
  

  useEffect(() => {
    fetch (API)
    .then ((r) => r.json())
    .then (data => setListings (data))
  }, [])

  function filterResult(searchresult){
   const search = listings.filter((list)=> list.description.toLowerCase().includes(searchresult.toLowerCase())
    )
    setResult(search);
  } 
  
  function handleDelete(id) {
    fetch(`${API}/${id}`, {
      method: 'DELETE',
      
      headers: { 
        'Content-type': 'application/json',
        Accept: 'application/json',
      }
      }) 
      .then(() => setListings(listings.filter((list) => list.id !== id) ) )
    
    
  }



  return (
    <div className="app">
      <Header filterResult={filterResult}/>
      <ListingsContainer handleDelete={handleDelete} listings={result.length > 0 ? result : listings} />
    </div>
  );
}

export default App;
