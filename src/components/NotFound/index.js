// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const notfoundImg = 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notfoundContaineris = isDarkTheme
        ? 'notfoundContainer darkis'
        : 'notfoundContainer lightis'
      return (
        <div className={notfoundContaineris}>
          <Navbar />
          <div className="notfoundcontent">
            <img src={notfoundImg} alt="not found" className="notfoundImg" />
            <h1 className="heading">Lost Your Way?</h1>
            <p className="para">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
