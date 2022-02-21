import { useState, useEffect } from 'react'
import ProductList from '../productList/productsList'
import '../Home/home.scss'

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const url = 'https://fakestoreapi.com/products'
    fetch(url)
      .then((response) => response.json())
      .then((products) => setProducts(products))
      .catch((error) => console.log(error))
  })
  return (
            <div className='home'>
                <h1>Products</h1>
                <section className='box'>
                    <div className='products-container'>
                        < ProductList products={products}/>
                    </div>
                </section>
            </div>
  )
}

export default Home
