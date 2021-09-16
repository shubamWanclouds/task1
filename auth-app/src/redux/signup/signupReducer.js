import {SIGN_UP} from './signupTypes'

const initialState = {
  uname:'',
  email:'',
  password:''
}

const signupReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case SIGN_UP: return {
      uname: action.payload.uname,
      email: action.payload.email,
      password: action.payload.passwd
    }
    default: return state
  }
}

export default signupReducer
