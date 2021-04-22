//functional imports
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// component Imports
import HomePage from './components/HomePage.js'
import SearchPage from './components/SearchPage.js'
import AboutPage from './components/AboutPage.js'

//css imports
import './styles/App.module.css';

//app.js
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage}/>
        <Route path="/search" component={SearchPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/about" component={AboutPage}/>
      </div>
    </Router>
  );
}

export default App;
