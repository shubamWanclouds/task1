import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import signupReducer from './signup/signupReducer'

export const store = createStore(signupReducer,composeWithDevTools())

