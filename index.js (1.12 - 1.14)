import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = ({ anecdotes, handleClick }) => {
  
  const [selected, setSelected] = useState(0);
  const [changes, setChanges] = useState([]);

  const handleChangeVotes = () => {
    setChanges(changes.concat(selected)
  )}

  const counts = {}
  changes.forEach(function(x) {
    counts[x] = (counts[x] || 0) + 1
  })

  const max = Math.max(...Object.values(counts))

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  const maxValue = getKeyByValue(counts, max)

  return (
    <div>
      <div> {anecdotes[selected]} </div>
      <div>
        Has {counts[selected]} votes.
      </div>
      <button onClick={() => setSelected(handleClick)}>
        Next anecdote
      </button>
      <button onClick={handleChangeVotes}> Vote </button>
      <div>
        <h1> Anecdote with most votes </h1> <div> {anecdotes[maxValue]} </div>
        <div>
          Has {max >= 0 ? max : ""} votes
        </div>
      </div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const handleClick = () => Math.floor(Math.random() * 6);

ReactDOM.render(
  <App anecdotes={anecdotes} handleClick={handleClick} />,
  document.getElementById("root")
);
