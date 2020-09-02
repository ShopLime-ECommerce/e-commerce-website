import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../src/store'

export default class AddItems_Cart extends Component {
	constructor(props) {
		super(props)
		this.state = {
			addAlert: false,
		}
	}

	handleAddToCart(id, price) {
		this.showAlert()
		this.props.handleAddToCartDispatch(id, price)
	}

	showAlert() {
		this.setState({ addAlert: true }, () => {
			setTimeout(this.hideAlert.bind(this), 500)
		})
	}

	hideAlert() {
		this.setState({ addAlert: false })
	}

	mapDispatch = (dispatch) => {
		return {
			handleAddToCartDispatch(id, price) {
				dispatch(addToCart(id, price))
			},
		}
	}
	render() {
		const { product } = this.props
		return (
			<div>
				{this.state.addAlert ? (
					<button className="btn btn-default no-border">
						<span className="glyphicon glyphicon-ok" aria-hidden="true" /> Added
						to Cart!
					</button>
				) : (
					this.renderAddButton(product)
				)}
				<button
					className="btn btn-default"
					onClick={() => this.handleAddToCart(product.id, product.price)}
				>
					Add To Cart
				</button>
			</div>
		)
	}
}
