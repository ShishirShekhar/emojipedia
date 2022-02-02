import React from "react";

import Card from "./components/Card";
import emojipedia from "./emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((props) => (
          <Card
            key={props.key}
            emoji={props.emoji}
            name={props.name}
            meaning={props.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
