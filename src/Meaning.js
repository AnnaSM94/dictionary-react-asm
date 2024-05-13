import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition: </strong>
        {props.meaning.definition}
      </p>
      <em>
        <strong>Example: </strong>
        {props.meaning.example}
      </em>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
