import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductBlock from '../../components/productBlock';
import './index.scss'
import { fetchProducts, setProducts } from '../../redux/actions/products';
import { addCart } from './../../redux/actions/cart';
import MyLoader from './../../components/productBlock/loader';
const Home = () => {
    const dispath =  useDispatch()
    React.useEffect(()=> {
        dispath(fetchProducts())
    }, [])

    const isLoaded = useSelector(({productReducer}) => productReducer.isLoaded)
    const state = useSelector(({productReducer}) => productReducer.items)
       const products = Object.keys(state).map((key) => {
        return { ...state[key] }
    });
    console.log(isLoaded)
    const cartProduct = Object.values(products)
    let categoryItems = ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert']
    const addToCartPizza =(obj) => {
        dispath(addCart(obj))
      }
    return (
        <div className="home">
            <div className="product__items">
                     {isLoaded ? ( cartProduct.map(item =>  <ProductBlock {...item} addToCartPizza={addToCartPizza}/>) ) : Array(4).fill(0).map((item, i) => <MyLoader key={i} />)}
            </div>
           
        </div>
    )
}

export default Home
