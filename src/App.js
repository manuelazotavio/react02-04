import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'

function App() {
  return (
    <Router>
      <ul>
        <li>
          Home
        </li>
        <li>
          Contato
        </li>
      </ul>
      <Routes>
        <Route exact path='/' >
          <Home />
        </Route>
        <Route path='/contato'>
          <Contato />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
