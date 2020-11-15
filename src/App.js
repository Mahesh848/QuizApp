import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Entry from './components/Entry'
import Home from './components/Home'
import Quiz from './components/Quiz'

function App() {
  return (
    <div className="App">
        <Router>
            <Route path="/" exact component={Entry} />
			<Route path="/signup" exact component={Entry}/>
			<Route path="/login" exact component={Entry}/>
            <Route path="/home" exact component={Home}/>
			<Route path="/quiz/:id" exact component={Quiz}/>
        </Router>
    </div>
  );
}

export default App;
