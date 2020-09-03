import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import Home from './components/home';
import store from './store'

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister()
