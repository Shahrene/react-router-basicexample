import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>

  </div>
);

const About = () => (
  <div>
    <h2>About</h2>

  </div>
);

const Products = ({ match }) => (
  <div>
    <h2>Products</h2>
    <ul>
      <li>
        <Link to={`${match.url}/Ipad`}>Ipad</Link>
      </li>
      <li>
        <Link to={`${match.url}/MacBookPro`}>Mac Book Pro</Link>
      </li>
      <li>
        <Link to={`${match.url}/iPhoneX`}>iPhoneX</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:productId`} component={Product} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a product.</h3>}
    />
  </div>
);

const Product = ({ match }) => (
  <div>
    <h3>{match.params.productId}</h3>
  </div>
);

export default BasicExample
