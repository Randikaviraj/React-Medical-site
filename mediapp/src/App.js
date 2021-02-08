import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch,} from 'react-router-dom'
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
