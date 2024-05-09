import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching a definition for ${keyword}...`);

    let apiKey = "ta02bo301b5c9f2330749b3160203dc0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
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
