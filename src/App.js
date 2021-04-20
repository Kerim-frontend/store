import { Route } from 'react-router';
import './app.scss'
import Nambar from './components/navbar/index';
import Home from './pages/home/home.jsx';
import Header from './components/header/index';
import Login from './login/index';
import Cart from './pages/cart/index';
function App() {
  return (
    <div className="wrapper">
          <Nambar />
          <Header />
          <Route exact path="/" render={() => <Home /> } />
          <Route exact path="/cart" render={() => <Cart /> } />
          <Route exact path="/login" render={() => <Login /> } />



    </div>
  );
}

export default App;
