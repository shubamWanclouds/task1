import { connect } from 'react-redux'
import HomeView from "./HomeView";

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect (mapStateToProps) (HomeView)