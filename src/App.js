import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Entry from './components/Entry'
import Home from './components/Home'
import Quiz from './components/Quiz'

function App() {
  return (
    <div className="App">
        <Router>
            <Route path="/QuizApp" exact component={Entry} />
            <Route path="/QuizApp/signup" exact component={Entry}/>
            <Route path="/QuizApp/login" exact component={Entry}/>
            <Route path="/QuizApp/home" exact component={Home}/>
			      <Route path="/QuizApp/quiz/:id" exact component={Quiz}/>
        </Router>
    </div>
  );
}

export default App;
