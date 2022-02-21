import React from 'react'
import '../components/productcard.scss'
import Clock from '../Clock/clock'
class Productcard extends React.Component {
  constructor (props){
    super(props)
  }

  render () {
    const { id, title, image } = this.props.product
    return (
      <div className="product-card">
        <div className="image">
        <img src={image} width="100" height="50" />
        </div>
        <div className="name">
          {title}
        </div>
        <div className="box">
          <Clock id={id}/>
        </div>
      </div>
    )
  }
}

export default Productcard
