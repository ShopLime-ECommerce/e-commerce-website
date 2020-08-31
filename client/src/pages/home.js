// import React from 'react'
// import Item from '../Components/item'

// class Home extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			marchandises: [],
// 		}
// 	}
// 	componentDidMount() {
// 		fetch('/items')
// 			.then((res) => res.json())
// 			.then((items) => {
// 				this.setState({
// 					marchandises: items,
// 				})
// 			})
// 			.catch((error) => {
// 				console.log(error)
// 			})
// 	}

// 	render() {
// 		console.log(this.state.marchandises)
// 		return (
// 			<div className="container-fluid">
// 				<div className="row justify-content-center">
// 					{this.state.marchandises.map((item) => (
// 						<Item {...item} key={item.id} />
// 					))}
// 				</div>
// 			</div>
// 		)
// 	}
// }
// export default Home
// import React from 'react';
// import data from '../data'

// function HomeScreen(props) {
//     return <ul className="products">
         
//               {
//                   data.products.map(product =>
            
//                 <li>
//                   <div className="product"> 
//                   <img className="product-image" src={product.image} alt="product"></img>
//                    <div className="product-name">
//                     <Link to={'/product/' + product.id}>{product</Link>"}>{product.name}</a>   
//                 </div>
//                    <div className="product-brand">{product.brand}</div>
//                     <div className="product-price">${product.price}</div>
//                     <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
//             </div>
//              </li>) 
            
//               }      
//         </ul>
    
//     <div>=HomeScreen</div>
// }
// export default HomeScreen;