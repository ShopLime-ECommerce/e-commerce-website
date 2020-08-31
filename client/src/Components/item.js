import React, { Component } from 'react'
import './item.css'

class Item extends Component {
	render() {
		return (
			<div className="col-md-4  item-wrapper">
				<div className=" img">
					<img src={this.props.imageUrl} className="image" />
				</div>
				<div className=" justify-content-center">
					<h5>{this.props.name}</h5>
					<h5>{this.props.description}</h5>
					<h4>$ {this.props.price}</h4>
				</div>
			</div>
		)
	}
}
export default Item

// export default data = {
//     products: [{
//         id:'1',
//         name: 'Avocado',
//         category: 'veggie',
//         image: '/images/avocadonew.jpg',
//         price: 7,
//         brand: 'Organic',
//         rating: 4.5,
//         numReviews: 10

//     },
//     {
//         id:'2',
//         name: 'Melon',
//         category: 'fruit',
//         image: '/images/fruit.jpg',
//         price: 5,
//         brand: 'Organic',
//         rating: 3.5,
//         numReviews: 10

//     },
//     {
//         id:'3',
//         name: 'Okra',
//         category: 'veggie',
//         image: '/images/fruit.jpg',
//         price: 5,
//         brand: 'Organic',
//         rating: 4,
//         numReviews: 8

//     },
// ]
// }
