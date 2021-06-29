import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './components/header/Header';
import ProductListing from './components/productListing/ProductListing';
import ProductDetails from './components/productDetail/ProductDetails';
const App = ()=> {
  return (
    <div className="App">
    <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
