import React, { Component } from 'react';

class NavBar extends Component {
	state = {
		count: this.props.totalItem
	};
	render() {
		// console.log('props', this.props);
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-md">
					<a className="navbar-brand" href="#">
						Navbar <span className={this.checkStyle()}>{this.checkCount()}</span>
					</a>
				</div>
			</nav>
		);
	}
	checkCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
	checkStyle() {
		const { count } = this.state;

		return count === 0 ? ' badge  text-white bg-danger badge-sm' : 'bg-primary badge  text-white badge-sm';
	}
}

export default NavBar;
