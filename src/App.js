import React from 'react';

function Food({ fav }) {
  return <h1>I like {fav}.</h1>;
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="JIMIN" />
      <Food fav="kimchi" />
      <Food fav="Pasta" />
      <Food fav="Pizza" />
      <Food fav="Chicken" />
    </div>
  );
}


export default App;
