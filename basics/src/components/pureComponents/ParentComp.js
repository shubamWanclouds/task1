import React, { Component, Pure, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Shubam'
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Shubam' + Math.random()
			})
		}, 2000)
	}

	render() {
		console.log('*********Parent Comp render************')
		return (
			<div>
				Parent Component
				<RegComp name={this.state.name} />
				<PureComp name={this.state.name} />
			</div>
		)
	}
}

export default ParentComp