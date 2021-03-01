import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch,} from 'react-router-dom'
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from './components/Pages/HomePage'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
