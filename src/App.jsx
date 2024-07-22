import React, { useEffect, useState } from 'react'
import line from '../src/assets/pattern-divider-desktop.svg'
import { BsFillDice5Fill } from "react-icons/bs";
import './App.css'


const App = () => {
  const [advice, setAdvice] = useState('')
  function clickMe(){
    fetch('https://api.adviceslip.com/advice')
    .then((res)=> res.json())
    .then((data)=>{
        setAdvice(data.slip.advice)
    })
  }

  useEffect(()=>{
    fetch('https://api.adviceslip.com/advice')
    .then((res)=> res.json())
    .then((data)=>{
        setAdvice(data.slip.advice)
    })
  },[])
  return (
    <div className='bod'>
      <div className='join'>
      <h1>Advice #</h1>
      <p>"{advice}"</p>
          <img className='line' src={line} alt="line" />
          <BsFillDice5Fill onClick={clickMe} className='dic'  />
      </div>
    </div>
  )
}

export default App
