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

function Card({imageSrc, onCardClick}) {
  return (
    <div className="card" onClick={onCardClick}>
      <img src={imageSrc} alt="image" className="card-img" />
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
