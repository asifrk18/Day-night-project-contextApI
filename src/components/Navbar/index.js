// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const lightlogo =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
const darklogo =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

const lighttheme = 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
const darktheme = 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const navContaineris = isDarkTheme
        ? 'navContainer navdarkis'
        : 'navContainer navlightis'

      const optionsis = isDarkTheme ? 'options navdarkis' : 'options'

      const logois = isDarkTheme ? `${darklogo}` : `${lightlogo}`
      const themeis = isDarkTheme ? `${darktheme}` : `${lighttheme}`

      const ontoggleTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={navContaineris}>
          <img src={logois} alt="website logo" className="logo" />
          <ul className="navoptionCont">
            <Link to="/" className="style-Link">
              <li>
                <p className={optionsis}>Home</p>
              </li>
            </Link>
            <Link to="/about" className="style-Link">
              <li>
                <p className={optionsis}>About</p>
              </li>
            </Link>
          </ul>
          <button
            type="button"
            className="button"
            onClick={ontoggleTheme}
            testid="theme"
          >
            <img src={themeis} alt="theme" className="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
