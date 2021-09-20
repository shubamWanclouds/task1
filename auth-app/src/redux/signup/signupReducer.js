import {SIGN_UP} from './signupTypes'

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

export default signupReducer
