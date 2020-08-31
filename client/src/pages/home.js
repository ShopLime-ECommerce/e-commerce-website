import React from 'react'
import Item from '../Components/item'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			marchandises: [],
		}
	}
	componentDidMount() {
		fetch('/items')
			.then((res) => res.json())
			.then((items) => {
				this.setState({
					marchandises: items,
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}

	render() {
		console.log(this.state.marchandises)
		return (
			<div className="container-fluid">
				<div className="row justify-content-center">
					{this.state.marchandises.map((item) => (
						<Item {...item} key={item.id} />
					))}
				</div>
			</div>
		)
	}
}
export default Home
