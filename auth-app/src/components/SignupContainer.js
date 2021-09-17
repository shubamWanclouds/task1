import {signup} from '../redux'
import { connect } from 'react-redux'
import SignupView from "./SignupView";

const mapDispatchToProps = dispatch => {
  return {
    signup: data => dispatch(signup(data))
  }
}



export default connect (null, mapDispatchToProps) (SignupView)