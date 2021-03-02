import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch,} from 'react-router-dom'
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from './components/Pages/HomePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
