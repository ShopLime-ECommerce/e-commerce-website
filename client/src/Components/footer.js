import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="main-footer">
          <div className="container ">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                
                <ul className="list-unstyled">
                  <a href="#">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter-square"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Abverstis</a>
                  </li>
                  <li>
                    <a href="#">Carrer</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>Borough</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Manhattan</a>
                  </li>
                  <li>
                    <a href="#">Brooklyn</a>
                  </li>
                  <li>
                    <a href="#">Bronx</a>
                  </li>
                  <li>
                    <a href="#">Queens</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>Ressources</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">React.Js</a>
                  </li>
                  <li>
                    <a href="#">Express.Js</a>
                  </li>
                  <li>
                    <a href="#">Bootstrap</a>
                  </li>
                  <li>
                    <a href="#">ProSql</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>Developer</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Developers Profile</a>
                  </li>
                  <li>
                    <a href="#">Partner</a>
                  </li>
                  <li>
                    <a href="#">Carrer</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} QCC_Shoppers
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
