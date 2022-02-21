import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../Clock/clock.scss'

const Clock = ({ id }) => {
  const initialTime = new Date()
  const n = Math.random() * (10 - 6) + 50
  initialTime.setSeconds(initialTime.getSeconds() + n)
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [activo, setActivo] = useState(true)

  const savedCallback = useRef()
  useEffect(() => {
    savedCallback.current = setInterval(() => tick(), 1000)
    return function cleanup () {
      clearInterval(savedCallback.current)
    }
  }, [])
  const tick = () => {
    const auxiliarTime = new Date()
    const TimeStamp = new Date(initialTime - auxiliarTime)
    const timer = `${parseInt(TimeStamp / 60000).toString().padStart(2, 0)} : ${parseInt((TimeStamp / 1000) % 60).toString().padStart(2, 0)}`
    if (TimeStamp >= 0) {
      setTime(timer)
    }
    else {
      setActivo(false)
    }
  }
  return (
    <div className="clock">
      <div className="time">{time}</div>
      <div className="button">
        {activo ? <Link className='text-link' to={`/detail/${id}`}>Go to Detail</Link > : <Link className='text-link' to={'#'}>Go to Detail</Link>}
      </div>
    </div>
  )
}

export default Clock
