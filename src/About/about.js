import { Link } from 'react-router-dom'
import '../About/about.scss'
const About = () => {
  return (
  <div className="about">
  <div className='image'>
  <img src='https://media-exp1.licdn.com/dms/image/C4D03AQHYZ351Qe5fNg/profile-displayphoto-shrink_200_200/0/1631283693967?e=1651104000&v=beta&t=Cb6yr2-NzEKCK1-rnN-kFxNvItJMUfghHZphcMZHgEw'></img>
  </div>
  <div className='information'>
  <p><h1>Name: </h1>Maritza Flor Salas Huamani</p>
      <p><h1>Description: </h1>I studied Computer and Systems Engineering at the San Antonio Abad National University of Cusco, I am from Cusco and I am learning react and styles css </p>
      <p><h1>I learnt:</h1>
          <li>Work consuming an API</li>
          <li>styles with sass</li>
          <li>Components and useState</li>
      </p>
      <p><h1>E-mail: </h1>161764@unsaac.edu.pe</p>
      <p><h1>Github: </h1>https://github.com/MariT29fsh</p>
      <div className="button">
          <Link className='text-link' to='/'>Volver a home</Link>
      </div>
  </div>

    </div>
  )
}
export default About
