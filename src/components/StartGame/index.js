import {useHistory} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import {PiTriangleBold} from 'react-icons/pi'
import Context from '../Context'

import './index.css'

const colorBox = [
  '#311CED',
  '#F01D11',
  '#1E77F7',
  '#27EF28',
  '#C218EF',
  '#F01D11',
  '#D6F026',
  '#27EF28',
  '#E0B12C',
  '#F01D11',
  '#27EF28',
  '#F01D11',
  '#27EF28',
  '#F01D11',
  '#27EF28',
  '#F01D11',
  '#27EF28',
  '#F01D11',
  '#27EF28',
  '#F01D11',
  '#27EF28',
]

const Modes = {Easy: 10, Medium: 15, Hard: 25}
const randomColor = Math.ceil(Math.random() * colorBox.length)
// const gameScenario = {
//   game: 'GAME ON',
//   gameOver: 'GAME OVER',
//   gameWon: 'GAME WON',
// }

const StartGame = () => {
  const value = useContext(Context)
  const history = useHistory()
  const [score, changeScore] = useState(0)
  const [time, changeTime] = useState(40)
  const [color, changeColor] = useState(colorBox[randomColor])
  const difficultyScore = Modes[value.currentUser.difficulty]

  const scoreFunction = () => {
    if (color === '#27EF28' && time > 0) {
      changeScore(prevScore => prevScore + 1)
    } else if (color === '#F01D11') {
      history.replace('/gameOver')
    }
  }

  useEffect(() => {
    if (time === 0 && score < difficultyScore) {
      history.replace('/gameOver')
    }
    if (time === 0 && score > difficultyScore) {
      value.inputWinners(prevState => [
        ...prevState,
        {...value.currentUser, score},
      ])
      history.replace('./winPage')
    }

    const timerId = setInterval(() => {
      const presentColor = Math.ceil(Math.random() * colorBox.length)
      changeColor(colorBox[presentColor])

      if (time > 0) {
        changeTime(prevTime => prevTime - 1)
      } else {
        changeColor('blue')
        clearInterval(timerId)
      }
    }, 1000)

    return () => clearInterval(timerId)
  }, [time])

  return (
    <div className="gameBackground">
      <div className="gameBox">
        <h1 className="gameHeading">Let the Game Begin</h1>
      </div>

      <div className="insructionBox">
        <div className="modesSection">
          <p className="mode">Mode :</p>
          <p className="levelParagraph">{value.currentUser.difficulty}</p>
        </div>

        <div className="modesSection">
          <p className="mode">Score To Beat :</p>
          <p className="levelParagraph">
            {Modes[value.currentUser.difficulty]}
          </p>
        </div>

        <div className="modesSection">
          <p className="mode">Time :</p>
          <p className="levelParagraph">40 Seconds</p>
        </div>
      </div>

      <div className="scoresSection">
        <div className="modesSection">
          <p className="mode">Time Remaining :</p>
          <p className="levelParagraph">{time} Seconds</p>
        </div>

        <div className="modesSection">
          <p className="mode">Score :</p>
          <p className="levelParagraph">{score}</p>
        </div>
      </div>

      <div className="boxGame">
        <PiTriangleBold className="gameIcon" style={{color: `${color}`}} />
      </div>

      <div className="buttonboxes">
        <button className="startbuttons" type="button" onClick={scoreFunction}>
          CLICK
        </button>
      </div>
    </div>
  )
}

export default StartGame
