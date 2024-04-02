import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <div>
    <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/contato"}>Contato</Link>
    </ul>
    </div>
  )
}

export default NavBar

