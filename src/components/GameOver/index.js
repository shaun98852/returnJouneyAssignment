import {Link} from 'react-router-dom'

import './index.css'

const GameOver = () => (
  <div className="overBackground">
    <div className="imageBox">
      <img
        src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1695143058/game-over_azyzu2.png"
        className="gameImage"
        alt="gameImage"
      />
    </div>

    <div className="playAgainBox">
      <div className="box">
        <h1 className="playAgain">PLAY AGAIN ?</h1>
      </div>

      <div className="yesNoBox">
        <Link to="/startGame" style={{textDecoration: 'none'}}>
          <div className="boxLeft">
            <h1 className="yesNoButton">Yes</h1>
          </div>
        </Link>

        <Link to="/" style={{textDecoration: 'none'}}>
          <div className="boxLeft">
            <h1 className="yesNoButton">No</h1>
          </div>
        </Link>
      </div>
    </div>
  </div>
)

export default GameOver
