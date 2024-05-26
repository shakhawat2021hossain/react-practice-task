import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">Cycle Hobe</h1>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Product</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </nav>
        </div>
    );
};

export default Header;