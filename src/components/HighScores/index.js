import {useContext} from 'react'
import Context from '../Context'
import './index.css'

const HighScores = () => {
  const value = useContext(Context)
  const requiredList = value.winners.sort((a, b) => b.score - a.score)

  return (
    <div className="back">
      <div className="topSection">
        <img
          src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1695161532/medal_iufdu7.png"
          className="badgeIcons"
          alt="badgeIcons"
        />
        <h1 className="headings">LEADERBOARD</h1>
        <img
          src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1695161532/medal_iufdu7.png"
          className="badgeIcons"
          alt="badgeIcons"
        />
      </div>

      <div className="leaderBoard">
        <div className="top">
          <h1 className="Sno">S.No</h1>
          <h1 className="Name">Name</h1>
          <h1 className="phoneNo">Phone No</h1>
          <h1 className="Score">Score</h1>
        </div>

        <ul className="ulList">
          {requiredList.map(eachItem => (
            <li className="tops" key={value.winners.indexOf(eachItem)}>
              <h1 className="Sno">{value.winners.indexOf(eachItem) + 1}</h1>
              <h1 className="Name">{eachItem.name}</h1>
              <h1 className="phoneNo">{eachItem.phoneNo}</h1>
              <h1 className="Score">{eachItem.score}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HighScores
