import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Entry from './components/Entry'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <div className="App">
        <Router>
            <Route path="/" exact component={Entry} />
			<Route path="/signup" exact component={Entry}/>
			<Route path="/login" exact component={Entry}/>
            <Route path="/home" exact component={Home}/>
        </Router>
    </div>
  );
}

export default App;
