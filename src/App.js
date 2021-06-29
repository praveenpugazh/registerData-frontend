import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Registration from "./components/Registration/Registration";
import Content from "./components/Contents/Content";
import { GlobalState } from "./context/globalContext";
function App() {
  const [currentId, setCurrentId] = useState(null);
  return (
    <GlobalState>
      <Navbar />
      <Registration currentId={currentId} setCurrentId={setCurrentId} />
      <Content setCurrentId={setCurrentId} />
    </GlobalState>
  );
}

export default App;
