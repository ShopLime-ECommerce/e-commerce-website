import axios from 'axios'
import history from '../history'

const GET_PRODUCTS = 'GET_PRODUCTS'

const defaultProducts = []

const getProducts = (products) => ({ type: GET_PRODUCTS, products })

export const fetchProducts = () => (dispatch) =>
	axios
		.get('/api/products/')
		.then((res) => dispatch(getProducts(res.data || defaultProducts)))
		.catch((err) => console.log(err))

export const fetchCategoryThunk = (categoryId) => (dispatch) =>
	axios
		.get(`/api/categories/${categoryId}`)
		.then((res) => dispatch(getProducts(res.data || defaultProducts)))
		.catch((err) => console.log(err))

export const fetchSearchThunk = (term) => (dispatch) =>
	axios
		.get(`/api/search/${term}`)
		.then((res) => dispatch(getProducts(res.data || defaultProducts)))
		.catch((err) => console.log(err))

export default function (state = defaultProducts, action) {
	switch (action.type) {
		case GET_PRODUCTS:
			return action.products
		default:
			return state
	}
}
