import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
 
} from 'react-router-dom';
import Home from './pages/home'
import Navigation from './Components/navigation'
import Footer from './Components/footer'


class App extends React.Component {
  render() {
    return (
      <div className="root">
        <Router>
          <Navigation/>
            <div className="container-fluid main-page">
             <div className="row justify-content-center ">
              <Switch >
                <Route path="/" component={Home} />
              </Switch>
              </div>
            </div>
    
          <Footer />
        </Router>
        </div>
    );
  }
}
export default App;
