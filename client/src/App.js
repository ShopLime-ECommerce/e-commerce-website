import React from 'react'
<<<<<<< HEAD


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Navigation from './Components/navigation'
import Footer from './Components/footer'

export default class App extends React.Component {
	render() {
		return (
			<div className="root">
				<Router>
					<Navigation />
					<div className="container-fluid main-page">
						<div className="row justify-content-center ">
							<Switch>
								<Route path="/" component={Home} />
							</Switch>
						</div>
					</div>
					<Footer />
				</Router>
			</div>
		)
	}

}



// import React from 'react';
// import data from '/data'
// import {BrowserRouter, Route, Link }from 'react-router-dom'
// import './App.css';
// import HomeScreen from ',/Screens/HomeScreen'
// import ProductScreen from ',/Screens/ProductScreen'

// function App() {
//     const openMenu = () =>{
//         document.querySelector(".sidebar").classList.add("open");
//     }
//     const closeMenu = () => {
//         document.querySelector(".sidebar").classList.remove("open");
//     }
//   return (
//       <BrowserRouter>
//     <div className="grid-container">
//     <header className="header"> 
//         <div className="brand">
//             <button onClick={openMenu}>
//             &#9776;
//             </button>
//             <Link to="/">amazona</Link>
//             <a href="index.html">amazona</a>
//         </div>
//         <div className="header-links">
//             <a href="cart.html">Cart</a>
//             <a href="signin.html">Sign In</a>
//         </div>
//     </header>
//     <aside className="sidebar">
//         <h3>Shopping Categories</h3>
//          <button className="sidebar-close-button" onClick={closeMenu}>X</button>
//         <ul>
//             <li>
//                 <a href="index.html">Fruits</a>
//             </li>

//                 <li>
//                     <a href="index.html">Veggies</a>
//                 </li>

//         </ul>
//     </aside>
//     <main className="main"> 
//         <div className="content">
//             <Route path="/products/:id"component={HomeScreen} />
//             <Route path="/" exact={true} component={HomeScreen} />
           
           
//     </div>
//     </main> 
   
//     <footer className="footer">
//         All right reserved.
//     </footer>
// </div>

// </BrowserRouter>
//   );
// }

// export default App;
