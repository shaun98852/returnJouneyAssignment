import {useState} from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import {GlobalStyle} from './styledComponents'
import Context from './components/Context'
import Home from './components/Home'
import DetailsPage from './components/DetailsPage'
import Header from './components/Header'
import StartGame from './components/StartGame'
import GameOver from './components/GameOver'
import WinPage from './components/WinPage'
import HighScores from './components/HighScores'
import './App.css'

const App = () => {
  const [detailsList, changeDetailsList] = useState([])
  const [currentUser, changeCurrentUser] = useState({})
  const [currentMode, changeMode] = useState('Easy')
  const [winners, inputWinners] = useState([])

  return (
    <Context.Provider
      value={{
        detailsList,
        changeDetailsList,
        currentMode,
        changeMode,
        currentUser,
        changeCurrentUser,
        winners,
        inputWinners,
      }}
    >
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gamePage" component={DetailsPage} />
          <Route exact path="/startGame" component={StartGame} />
          <Route exact path="/gameOver" component={GameOver} />
          <Route exact path="/winPage" component={WinPage} />
          <Route exact path="/highScores" component={HighScores} />
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
