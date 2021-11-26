import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductBlock from '../../components/productBlock';
import './index.css'
import { fetchProducts } from '../../redux/actions/products';
import { addCart } from './../../redux/actions/cart';
import MyLoader from './../../components/productBlock/loader';
const Home = ({searchFood}) => {
    const dispath =  useDispatch()
    React.useEffect(()=> {
        dispath(fetchProducts())
        // eslint-disable-next-line 
    }, [])

    const isLoaded = useSelector(({productReducer}) => productReducer.isLoaded)
    const state = useSelector(({productReducer}) => productReducer.items)
       const products = Object.keys(state).map((key) => {
        return { ...state[key] }
    });
    const cartProduct = Object.values(products)
    const addToCartPizza =(obj) => {
        dispath(addCart(obj))
      }
    return (
        <div className="home">
            <div className="product__items">
                     {isLoaded ? ( cartProduct.filter(item => item.name.toLocaleLowerCase().startsWith(searchFood.toLocaleLowerCase().trim())).map(item =>  <ProductBlock {...item} addToCartPizza={addToCartPizza}/>) ) : Array(4).fill(0).map((item, i) => <MyLoader key={i} />)}
            </div>
           
        </div>
    )
}

export default Home
