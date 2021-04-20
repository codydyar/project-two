
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// component Imports
import Header from './components/Header.js'
import HomePage from './components/HomePage.js'
import Footer from './components/Footer.js'
import SearchPage from './components/SearchPage.js'

//css imports
import './styles/App.module.css';

//app.js
function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/search" component={SearchPage}/>
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
