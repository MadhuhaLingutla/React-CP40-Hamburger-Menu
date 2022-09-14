// Write your code here
import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const About = () => (
  <Link to="/about" className="link-item">
    <Header />
    <div className="component-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="component-image"
      />
    </div>
  </Link>
)

export default About
