import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'

import {
	AdminHome,
	Main,
	Checkout,
	Cart,
	Home,
	Login,
	Signup,
	UserHome,
	SingleProduct,
} from './components'
import { me, fetchProducts, fetchCategories, fetchCart } from './store'

class Routes extends Component {
	componentDidMount() {
		this.props.loadInitialData()
	}

	render() {
		const { isLoggedIn, role } = this.props

		return (
			<Router history={history}>
				<Main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/checkout" component={Checkout} />
						<Route
							path="/cart"
							render={() => <Cart container={true} column={true} />}
						/>
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
						<Route path="/products/:id" component={SingleProduct} />
						{isLoggedIn && (
							<Switch>
								{role === 'admin' ? (
									<Route path="/home" component={AdminHome} />
								) : (
									<Route path="/home" component={UserHome} />
								)}
							</Switch>
						)}
						<Route component={Login} />
					</Switch>
				</Main>
			</Router>
		)
	}
}

const mapState = (state) => {
	return {
		isLoggedIn: !!state.user.id,
		role: state.user.role,
	}
}

const mapDispatch = (dispatch) => {
	return {
		loadInitialData() {
			dispatch(me())
			dispatch(fetchProducts())
			dispatch(fetchCategories())
			dispatch(fetchCart())
		},
	}
}

export default connect(mapState, mapDispatch)(Routes)

Routes.propTypes = {
	loadInitialData: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
}
