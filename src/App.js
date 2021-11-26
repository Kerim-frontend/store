import { Route } from 'react-router';
import './app.css'
import Nambar from './components/navbar/index';
import Home from './pages/home/home.jsx';
import Header from './components/header/index';
import Cart from './pages/cart/index';
import { useState } from 'react';
function App() {
  const [searchFood, setSearchFood] = useState('')
  return (
    <div className="wrapper">
          <Nambar />
          <Header setSearchFood={setSearchFood}/>
          <Route exact path="/" render={() => <Home searchFood={searchFood}/> } />
          <Route exact path="/cart" render={() => <Cart /> } />
    </div>
  );
}

export default App;
