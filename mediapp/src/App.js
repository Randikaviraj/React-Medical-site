import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch,} from 'react-router-dom'
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from './components/Pages/HomePage';
import Footer from './components/Footer/Footer';
import AboutPage from "./components/Pages/AboutPage";
import HospitalPage from "./components/Pages/HospitalPage";
import DoctorsPage from "./components/Pages/DoctorsPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/about" exact component={AboutPage}/>
          <Route path="/hospitals" exact component={HospitalPage}/>
          <Route path="/doctors" exact component={DoctorsPage}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
