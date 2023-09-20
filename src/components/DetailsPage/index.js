import {useHistory} from 'react-router-dom'

import {useState, useEffect, useContext} from 'react'
import Context from '../Context'
import './index.css'

const DetailsPage = () => {
  const value = useContext(Context)
  const history = useHistory()
  const [name, changeName] = useState('')
  const [email, changeEmail] = useState('')
  const [phoneNo, changePhoneNoe] = useState('')
  const [difficulty, changeDifficulty] = useState('Easy')
  const [nextPage, ShowNextPageOrNot] = useState(false)

  const detailUsers = e => {
    e.preventDefault()
    const tempObject = {name, email, phoneNo, difficulty}
    value.changeDetailsList(prevDetails => [...prevDetails, tempObject])
    value.changeCurrentUser(tempObject)
    ShowNextPageOrNot(prevState => !prevState)
  }

  useEffect(() => {
    if (name !== '' && email !== '' && phoneNo !== '') {
      history.replace('/startGame')
    }
  }, [nextPage])

  return (
    <div className="backColor">
      <h1 className="headings">Enter User Details</h1>
      <form className="userDetails" onSubmit={detailUsers}>
        <div className="nameInput">
          <div className="labelBox">
            <label className="nameLabel" htmlFor="userName">
              Name
            </label>
          </div>
          <input
            type="text"
            id="userName"
            className="inputName"
            value={name}
            onChange={e => {
              changeName(e.target.value)
            }}
          />
        </div>

        <div className="nameInput">
          <div className="labelBox">
            <label className="nameLabel" htmlFor="email">
              Email
            </label>
          </div>
          <input
            type="text"
            id="email"
            className="inputName"
            value={email}
            onChange={e => {
              changeEmail(e.target.value)
            }}
          />
        </div>

        <div className="nameInput">
          <div className="labelBox">
            <label className="nameLabel" htmlFor="email">
              Phone No
            </label>
          </div>
          <input
            type="text"
            id="email"
            className="inputName"
            value={phoneNo}
            onChange={e => {
              changePhoneNoe(e.target.value)
            }}
          />
        </div>

        <div className="nameInput">
          <div className="labelBox">
            <label className="nameLabel" htmlFor="email">
              Difficulty
            </label>
          </div>
          <select
            id="email"
            className="inputName"
            value={difficulty}
            onChange={e => {
              changeDifficulty(e.target.value)
            }}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="boxButton">
          <button className="enterButton" type="submit">
            ENTER
          </button>
        </div>
      </form>
    </div>
  )
}
export default DetailsPage
