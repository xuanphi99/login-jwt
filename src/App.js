import './App.css';
import LoginForm from './components/LoginForm';
import ListEmployee from './components/ListEmployee';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
  <Router >
    <Switch >

      <Route path="/" exact component={ LoginForm} />
      <Route path="/employee" exact component={ ListEmployee} />
    </Switch >

  </Router>
  );
}

export default App;
