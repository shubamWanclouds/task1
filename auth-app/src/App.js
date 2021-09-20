import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/HomeContainer';
import Signup from './components/SignupContainer';
import Login from './components/LoginContainer';
import GuardedRoute from './components/GuardedRoute'
import Dashboard from "./components/Dashboard";
import About from "./components/About";

function App() {
    
    let userData = JSON.parse(localStorage.getItem("userData"))

    return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact component={Login}  />
          <Route path="/signup" exact component={Signup} />
          <Route path="/dashboard" exact component={Dashboard} />

          <GuardedRoute path="/home" component={Home} auth = {userData["isLoggedIn"]} />
          <GuardedRoute path='/' component={Home} auth = {userData["isLoggedIn"]}/>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
