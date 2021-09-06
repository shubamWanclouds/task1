import React, { Component } from 'react'

class LifecycleChildren extends Component {
  constructor(props) {
    super(props)
		this.state = {
			name: 'Shubam Dadhwal'
		}
		console.log('Children Lifecycle constructor');
  }
  
  static getDerivedStateFromProps(props, state) {
		console.log('Children Lifecycle getDerivedStateFromProps');
		return null;
	}

	componentDidMount() {
		console.log('Children Lifecycle componentDidMount');
	}

  shouldComponentUpdate() {
		console.log('Children Lifecycle shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('Children Lifecycle getSnapshotBeforeUpdate');
    return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('Children Lifecycle componentDidUpdate');
	}

  render() {
    console.log('Children Lifecycle render');
    return (
      <div>
        <h3>Lifecycle Methods of Children</h3>
      </div>
    )
  }
}

export default LifecycleChildren
