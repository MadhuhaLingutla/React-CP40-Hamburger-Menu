// Write your code here

import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <Link to="/" className="link-item">
    <Header />
    <div className="component-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="component-image"
      />
    </div>
  </Link>
)

export default Home
