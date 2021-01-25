import React from "react"

import s from "./navbar.module.scss"
import Logo from "../assets/images/logo.svg"

function Navbar() {
  return (
    <header>
      <img src={Logo} alt="loopstudios logo" className={s.logo} />

      <nav className="nav-wrapper">
        <ul className={s.nav}>
          <li className={s.nav_item}>About</li>
          <li className={s.nav_item}>Careers</li>
          <li className={s.nav_item}>Events</li>
          <li className={s.nav_item}>Products</li>
          <li className={s.nav_item}>Support</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
