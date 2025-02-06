import './Navbar.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>Sobre</NavLink>
            <NavLink to={'./products'}>Produtos</NavLink>
        </nav>
    </div>
  )
}

export default Navbar