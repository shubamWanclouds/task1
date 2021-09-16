import Signup from "./Signup";
import {signup} from '../redux'
import { connect } from 'react-redux'
const mapDispatchToProps = dispatch => ({
  
    signup: data => dispatch(signup(data))

})



export default connect (null, mapDispatchToProps) (Signup)