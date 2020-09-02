import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'
import Header from './header'

const Main = (props) => {
	const { children, handleClick, isLoggedIn } = props

	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

const mapState = (state) => {
	return {
		isLoggedIn: !!state.user.id,
	}
}

const mapDispatch = (dispatch) => {
	return {
		handleClick() {
			dispatch(logout())
		},
	}
}

export default withRouter(connect(mapState, mapDispatch)(Main))

Main.propTypes = {
	children: PropTypes.object,
	handleClick: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
}
