import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Direccion/detail.scss'

const Detail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [rat, setRat] = useState([])
  useEffect(() => {
    obtenerDatos()
  }, [])
  const obtenerDatos = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await res.json()
    setProduct(data)
    setRat(data.rating)
  }
  return (
    <div className="detalles">
      <div className='header'>
      <h1>{product.title}</h1>
        <img src={product.image} width="350" height="350" alt=''/>
      </div>
      <div className="infor">
      <p>$/. {product.price}</p>
      <h4>{product.description}</h4>
        <div className="box">
        <div className="titles">
        <h3>Category : </h3>
        <h3> Rating: </h3>
        <li> Count: </li>
        <br/>
        <li> Rate: </li>
        </div>
        <div className="information">
        <h2>{product.category}</h2>
        <br/>
        <h3></h3>
        <h2>{rat.count}</h2>
        <h2/>
        <h2>{rat.rate}</h2>
        </div>
        </div>
        <div className="button">
        <Link className='text-link' to='/'>Volver a home</Link>
        </div>
      </div>
    </div>
  )
}
export default Detail
