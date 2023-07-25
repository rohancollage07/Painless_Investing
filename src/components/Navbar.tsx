import { Link } from 'react-router-dom'
import '../pages/Main.css'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="logo">
        <Link to="/">Painless Investing</Link>
      </span>
      <ul className="links">
        <li>
          <Link to="/Screener">Screener</Link>
        </li>
        <li>
          <Link to="/Calculations">Calculations</Link>
        </li>
        <li>
          <Link to="/Mos">Margin of Safety</Link>
        </li>
        <li>
          <Link to="/References">References</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
