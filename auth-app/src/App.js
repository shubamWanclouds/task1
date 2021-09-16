import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Signup from './components/Signup';
import Signup from './components/SignupContainer';
import Login from './components/Login';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </Switch>

        </Router>
    </div>
    </Provider>
  );
}

export default App;
