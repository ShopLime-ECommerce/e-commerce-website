import axios from 'axios'
import history from '../history'

const GET_CATEGORIES = 'GET_CATEGORIES'

const defaultProducts = []

const getCategories = (categories) => ({ type: GET_CATEGORIES, categories })

export const fetchCategories = () => (dispatch) =>
	axios
		.get('/api/categories')
		.then((res) => dispatch(getCategories(res.data || defaultProducts)))
		.catch((err) => console.log(err))

export default function (state = defaultProducts, action) {
	switch (action.type) {
		case GET_CATEGORIES:
			return action.categories
		default:
			return state
	}
}
