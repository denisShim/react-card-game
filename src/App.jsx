import { useState } from 'react'
import './App.css'

import chase from './assets/chase_icon.png'
import everest from './assets/everest_icon.png'
import marshall from './assets/marshall_icon.png'
import rocky from './assets/rocky_icon.png'
import rubble from './assets/rubble_icon.png'
import skye from './assets/skye_icon.png'
import tracker from './assets/tracker_icon.png'
import zuma from './assets/zuma_icon.png'

function Card({imageSrc}) {
  const[isActive, setIsActive] = useState(false);
  const hadleFlipCard = () => {
    setIsActive(!isActive)
  }
  return (
    <div className={`card ${isActive ? "card-toggle" : ""}`} onClick={hadleFlipCard}>
      <div className="card-inner">
        <div className="card-front">
          <h1>?</h1>
        </div>
        <div className="card-back">
          <img src={imageSrc} alt="image" className="card-img" />
        </div>
      </div>
    </div>
  )
}

function GameBoard() {
  return(
    <div className="game-board">
      <Card imageSrc={chase} />
      <Card imageSrc={everest} />
      <Card imageSrc={marshall} />
      <Card imageSrc={rocky} />
      <Card imageSrc={rubble} />
      <Card imageSrc={skye} />
      <Card imageSrc={tracker} />
      <Card imageSrc={zuma} />
      <Card imageSrc={chase} />
      <Card imageSrc={everest} />
      <Card imageSrc={marshall} />
      <Card imageSrc={rocky} />
      <Card imageSrc={rubble} />
      <Card imageSrc={skye} />
      <Card imageSrc={tracker} />
      <Card imageSrc={zuma} />
    </div>
  )
}

function App() {
  

  return (
    <>
      <GameBoard />

    </>
  )
}


export default App
