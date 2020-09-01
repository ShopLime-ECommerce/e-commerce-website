import axios from 'axios'
import history from '../history'

const GET_PRODUCTS_FOR_CART = 'GET_PRODUCTS_FOR_CART'
const defaultProducts = []

const getProductsForCart = (products) => ({
	type: GET_PRODUCTS_FOR_CART,
	products,
})

export default function (state = defaultProducts, action) {
	switch (action.type) {
		case GET_PRODUCTS_FOR_CART:
			return action.products
		default:
			return state
	}
}
