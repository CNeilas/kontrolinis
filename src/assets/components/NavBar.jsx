import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <h1>Books</h1>
      <ul>
        <li><Link className="Link" to={"/"}>Books</Link></li>
        <li><Link className="Link" to={"/registration"}>Registration</Link></li>
        <li><Link className="Link" to={"reviews"}>Reviews</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
