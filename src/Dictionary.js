import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching a definition for ${keyword}...`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" required onChange={handleKeywordChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
