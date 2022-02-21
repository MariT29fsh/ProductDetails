import { Routes, Route } from 'react-router-dom'
// Components
import About from './About/about'
import Home from './Home/home'
import Detail from './Direccion/detail'
const App = () => {
  return (
    <div className='App'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='detail/:id' element={<Detail/>}/>
          </Routes>
    </div>
  )
}

export default App
