import React, {useState} from "react";



function Search({filterResult}) {
  const [keyword, setKeyword] = useState('')


  function handleSubmit(e) {
    e.preventDefault();
    filterResult(keyword)
  
    
    
  }
  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;


