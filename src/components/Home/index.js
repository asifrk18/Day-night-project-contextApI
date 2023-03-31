// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const homelight = 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

const homedark = 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const hoemContaineris = isDarkTheme
        ? 'hoemContainer darkis'
        : 'hoemContainer lightis'

      const homelogois = isDarkTheme ? `${homedark}` : `${homelight}`

      return (
        <div className={hoemContaineris}>
          <Navbar />
          <div className="homecontent">
            <img src={homelogois} alt="home" className="homeImg" />
            <h1 className="heading">Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
