import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg'
import { ReactComponent as Website } from '../../assets/icons/website.svg'
import './index.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <span className="app-title"><img src="../TNNP_New_Logo.png" height="110px" width="110px"/><br></br>Nyandarua National Polytechnic <br></br>
          Research and Development Text Analyser</span>
          <ul className="social-links">
            <li>
              <a href="https://nyandaruanationalpoly.ac.ke/" target="_blank" rel="noreferrer">
                <Website />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
