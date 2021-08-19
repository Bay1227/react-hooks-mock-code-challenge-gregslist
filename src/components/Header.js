import React, {useState} from "react";
import Search from "./Search";

function Header({filterResult}) {
 
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filterResult={filterResult} />
    </header>
  );
}

export default Header;
