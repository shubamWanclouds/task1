import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/HomeContainer';
import Signup from './components/SignupContainer';
import Login from './components/LoginContainer';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/Signup" exact component={Signup} />
        </Switch>

        </Router>
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
