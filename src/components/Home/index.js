import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="background">
    <div className="boxs">
      <div className="leftSides">
        <div className="buttonBoxes">
          <Link to="/gamePage">
            <button className="startButton" type="button">
              Start The Game
            </button>
          </Link>
        </div>
      </div>
      <div className="rightSides">
        <img
          src="https://cdn.pixabay.com/photo/2021/11/19/00/55/costume-6807834_640.png"
          className="image"
          alt="homeImage"
        />
      </div>
    </div>
  </div>
)

export default Home
