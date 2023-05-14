import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="container">
        <Link to="/">Hogwarts Houses</Link>
        <Link to="/characters"> All characters </Link>
        <Link to="/characters/new">Create New Character</Link>
    </nav>
  )
}

export default NavBar