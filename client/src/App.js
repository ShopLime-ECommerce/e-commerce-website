import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/home'
import Dropdown from 'react'

export default class App extends React.Component {
	openMenu = () => {
		document.querySelector('.sidebar').classList.add('open')
	}

	closeMenu = () => {
		document.querySelector('.sidebar').classList.remove('open')
	}
	render() {
		return (
			<BrowserRouter>
				<div className="grid-container">
					<header className="header">
						<link
							rel="stylesheet"
							href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
						/>
						<div className="brand">
							<button onClick={this.openMenu}>&#9776;</button>
							<Link to="/">Amazona</Link>
						</div>
						<div className="header-links">
							<a href="cart.html">
								<i class="fas fa-shopping-cart"></i>
							</a>
							<Dropdown>
								<Dropdown.Toggle variant="success" id="dropdown-basic">
									Sign In
									<Dropdown.Menu>
										<Dropdown.Item href="#">Login</Dropdown.Item>
										<Dropdown.Item href="#">Logout</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown.Toggle>
							</Dropdown>
						</div>
					</header>
					<aside className="sidebar">
						<h3>Shopping Categories</h3>
						<button className="sidebar-close-button" onClick={this.closeMenu}>
							X
						</button>
						<ul>
							<li>
								<a href="index.html">Fruits</a>
							</li>
							<li>
								<a href="index.html">Veggies</a>
							</li>
						</ul>
					</aside>
					<main className="main">
						<div className="content">
							<Route path="/products/:id" component={Home} />
							<Route path="/" exact={true} component={Home} />
						</div>
					</main>
					<footer className="footer">All right reserved.</footer>
				</div>
			</BrowserRouter>
		)
	}
}
