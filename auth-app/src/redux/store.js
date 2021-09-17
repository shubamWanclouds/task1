import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from "redux-persist";
import signupReducer from './signup/signupReducer'

export const store = createStore(signupReducer,composeWithDevTools())
export const persistor = persistStore(store)

// export default {store, persistor}