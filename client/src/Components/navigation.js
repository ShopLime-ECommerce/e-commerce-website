import React from 'react'
import { NavLink, Link } from 'react-router-dom'

class Navigation extends React.Component {
	render() {
		return (
			<div className="App">
				<nav className="navbar navbar-expand-sm navbar-light bg-light">
					<ul className="navbar-nav mr-auto">
						<Link className="navbar-brand" href="" to="/">
							Home
						</Link>
						<li className="nav-item"></li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/map"></NavLink>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
}
export default Navigation
