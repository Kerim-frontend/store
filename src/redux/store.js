import { combineReducers, createStore,compose,applyMiddleware  } from 'redux'
import productReducer from './reduser/products.js';
import cartReducer from './reduser/cart.js';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const redusers = combineReducers({
    productReducer,
    cartReducer
})

const store = createStore(redusers, composeEnhancers(applyMiddleware(thunk)))


export default store