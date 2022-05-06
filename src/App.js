import Navigation from "./Navigation";
import MainPage from "./MainPage";
import { useState } from "react";

function App() {
  const [cartContent, setCartContent] = useState([]);
  
  return (
    <div className="App">
      <Navigation cartContent={cartContent} />
      <MainPage cartContent={cartContent} setCartContent={setCartContent} />
    </div>
  );
}

export default App;
