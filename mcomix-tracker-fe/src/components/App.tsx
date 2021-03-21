import React, { Component } from 'react';

class App extends Component {

	renderNavigation() {
		return (<div>Navigation</div>);
	}

	render() {
		return (
			<div>
				<h1>My App!</h1>
				{this.renderNavigation()}
			</div>
		);
	}
}

export default App;
