import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [modeButton, setModeButton] = useState(true);
  const appClass = !modeButton ? "App dark" : "App light"
  const handleClick  = () => {
    setModeButton(!modeButton)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{modeButton ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
