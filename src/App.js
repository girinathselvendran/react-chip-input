import React from "react";
import "./App.css";
import ChipInput from "./components/ChipInput.js/ChipInput";

const userContacts = [
  { name: "Marina Augustine", email: "maugustine@example.com" },
  { name: "Nick Giannopoulos", email: "ngiannopoulos@example.com" },
  { name: "Narayana Garner", email: "ngarner@example.com" },
  { name: "Anita Gros", email: "agros@example.com" },
  { name: "Eegan Smith", email: "esmith@example.com" },
];

function App() {
  return (
    <div className="app">
      <h1>Chip Input Example</h1>
      <ChipInput userContacts={userContacts} />
    </div>
  );
}

export default App;
