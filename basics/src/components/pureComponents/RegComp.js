import React, { Component, Pure } from 'react'

class ParentComp extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log("Reg Comp render");
		return (
			<div>
				Regular Component {this.props.name}
			</div>
		)
	}
}

export default ParentComp