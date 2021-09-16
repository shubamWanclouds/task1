import { SIGN_UP } from "./signupTypes";

export const signup = (data) => {
  return {
    type: SIGN_UP,
    payload:data
  }
}
