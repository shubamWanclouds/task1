import { createStore } from "redux";
import signupReducer from './signup/signupReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(signupReducer,composeWithDevTools())

export default store