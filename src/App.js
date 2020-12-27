import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const handleDelete = (id) => {
    const newList = people.filter((person) => person.id !== id);
    setPeople(newList);
  };
  return (
    <main>
      <section className="container">
        <h3>
          {people.length > 1
            ? `${people.length} birthdays today`
            : `${people.length} birthday today`}{" "}
        </h3>
        <List people={people} handleDelete={handleDelete} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
