import React, { Component } from 'react';
import LifecycleChildren from './LifecycleChildren';

class LifecycleParent extends Component {
  constructor(props) {
    super(props)
		this.state = {
			name: 'Shubam Dadhwal'
		}
		console.log('Parent Lifecycle constructor');
  }
  
  static getDerivedStateFromProps(props, state) {
		console.log('Parent Lifecycle getDerivedStateFromProps');
		return null;
	}

	componentDidMount() {
		console.log('Parent Lifecycle componentDidMount');
	}

  shouldComponentUpdate() {
		console.log('Parent Lifecycle shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('Parent Lifecycle getSnapshotBeforeUpdate');
    return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('Parent Lifecycle componentDidUpdate');
	}

  changeState = () => {
		this.setState({
			name: 'Life cycle Methods'
		})
	}

  render() {
    console.log('Parent Lifecycle render');
		console.log("hello");
    return (
      <div>
        <h3>Lifecycle Methods of Parent</h3>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleChildren />
      </div>
    )
  }
}

export default LifecycleParent
