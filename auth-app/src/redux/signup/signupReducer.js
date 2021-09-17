import {SIGN_UP} from './signupTypes'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
  user: {
    uname:'',
    email:'',
    passwd:''
  }
}

const signupReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case SIGN_UP: return {
      user:action.payload
    }
    default: return state
  }
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['signupReducer']
}

export default persistReducer(persistConfig, signupReducer)
