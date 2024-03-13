import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <>
        <nav>
            <ul className="navbar">
                <li>
                    <NavLink to='query'>Запросы</NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar