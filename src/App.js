import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Registration from "./components/Registration/Registration";
import Content from "./components/Contents/Content";
import { GlobalState } from "./context/globalContext";
function App() {
  return (
    <GlobalState>
      <Navbar />
      <Registration />
      <Content />
    </GlobalState>
  );
}

export default App;
