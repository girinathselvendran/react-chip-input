import React from "react";
import "./App.css";
import ChipInput from "./components/ChipInput.js/ChipInput";

const userContacts = [
  { name: "Marina Augustine", email: "maugustine@example.com",image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" },
  { name: "Nick Giannopoulos", email: "ngiannopoulos@example.com",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU" },
  { name: "Narayana Garner", email: "ngarner@example.com",image:"https://st.depositphotos.com/1770836/1372/i/450/depositphotos_13720689-stock-photo-young-businesswoman.jpg" },
  { name: "Anita Gros", email: "agros@example.com",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXlSumxxwaHkb4X8Ce6Iq6r4YssHyhccypw&usqp=CAU" },
  { name: "Eegan Smith", email: "esmith@example.com",image:"https://img.freepik.com/free-vector/confident-businessman-with-smile_1308-133771.jpg" },
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
