import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Poke from './pages/Poke';
import Stars from './pages/Stars';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />

      <Route exact path="/Poke" component={Poke} />
      <Route exact path="/Stars" component={Stars} />

    </Router>
  );
}

export default App;
