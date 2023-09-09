import React from 'react'
import './Tic-tack-game/Board'
import './App.css'
import Board from './Tic-tack-game/Board'

const App = () => {
  return (
    <>
      <div>
        <h1 style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '3rem'
        }} >Tic-Tac-Toe-Game</h1>
      </div>
      <div>
        <Board/>
      </div>
    </>
  )
}

export default App
