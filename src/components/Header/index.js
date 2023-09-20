import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="headerSection">
    <Link to="/">
      <div className="leftIcons">
        <img
          src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1695113765/icons8-squid-game-circle-guard-96_hk7qve.png"
          className="icons"
          alt="icons"
        />
        <img
          src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1695113756/icons8-squid-game-triangle-guard-96_jylnzg.png"
          className="icons"
          alt="icons"
        />
        <img
          src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1695113719/icons8-squid-game-square-guard-96_rqx1dd.png"
          className="icons"
          alt="icons"
        />
      </div>
    </Link>

    <div className="rightIcons">
      <Link to="/highScores" style={{textDecoration: 'none'}}>
        <h1 className="highScores">Highscores</h1>
      </Link>
    </div>
  </div>
)

export default Header
