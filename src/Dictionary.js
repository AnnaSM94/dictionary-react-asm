import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "ta02bo301b5c9f2330749b3160203dc0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="Search-input"
              required
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
            <input type="submit" className="Search-button" value="Search" />
          </form>
          <div className="hint">
            suggested words: garden, sunset, river, holiday...
          </div>
        </section>
        <Results className="results" results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
