import React from 'react'
import './index.scss'
const ProductBlock = ({id, imgUrl, name, price, addToCartPizza}) => {
  
    const onAddPizza = () => {
        const obj = {
          id,
          name, 
          imgUrl, 
          price,
        }
        addToCartPizza(obj)
      }
  console.log(id)
    return (
        <div className="product__wrapper">
            <img src={imgUrl} className="product__img" alt=""/>
           <h3 className="product__name">{name}</h3>
           <div className="product__price">$ {price}</div>
           <button onClick={onAddPizza} className="product__addCart">add cart</button>

        </div>
    )
}

export default ProductBlock
