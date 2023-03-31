// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const aboutlight =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

const aboutdark = 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboveContaineris = isDarkTheme
        ? 'hoemContainer darkis'
        : 'hoemContainer lightis'

      const abovelogois = isDarkTheme ? `${aboutdark}` : `${aboutlight}`

      return (
        <div className={aboveContaineris}>
          <Navbar />
          <div className="aboutcontent">
            <img src={abovelogois} alt="about" className="aboutImg" />
            <h1 className="about-heading">About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
