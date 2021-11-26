import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})

export const fetchProducts = () => (dispath) => {
    dispath(setLoaded(false))
    axios.get(`https://store-9e14f-default-rtdb.europe-west1.firebasedatabase.app/pizzas.json`)
    .then(({ data }) => dispath(setProducts(data)))
}


export const setProducts = (items) => ({
    type: 'SET_PRODUCTS',
    payload: items,
}) 