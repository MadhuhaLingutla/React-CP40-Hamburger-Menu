// Write your code here

import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
  width: '100vw',
  height: '100vh',
}

const Header = props => {
  const navigateToHome = () => {
    const {history} = props
    history.replace('/')
  }
  const navigateToAbout = () => {
    const {history} = props
    history.replace('/about')
  }

  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo-image"
        onClick={navigateToHome}
      />
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="Hamburger-button"
              testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="Hamburger-Menu-icon" />
            </button>
          }
          overlayStyle={overlayStyles}
        >
          {close => (
            <div className="popup-content">
              <button
                type="button"
                className="close-enclosing-button"
                testid="closeButton"
              >
                <IoMdClose className="close-button" onClick={() => close()} />
              </button>
              <ul className="content-container">
                <li className="option-container">
                  <Link to="/" className="link-item">
                    <AiFillHome className="option-icon" />
                    <h1 className="option-description">Home</h1>
                  </Link>
                </li>
                <li className="option-container" onClick={navigateToAbout}>
                  <Link to="/" className="link-item">
                    <BsInfoCircleFill className="option-icon" />
                    <h1 className="option-description">About</h1>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default withRouter(Header)
