import React, { PureComponent } from 'react'

class ParentComp extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("Pure Comp render");
		return (
			<div>
				Pure Component {this.props.name}
			</div>
		)
	}
}

export default ParentComp