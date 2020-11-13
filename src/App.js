import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Entry from './components/Entry';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
          <Entry />
        </Router>
    </div>
  );
}

export default App;
