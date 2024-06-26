import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Header = () => {
    const {logOut, user} = useContext(AuthContext);
    // console.log(user.email, user.displayName);
    
    const handleLogOut = () =>{
        logOut();
    }
    return (
        <div className="header">
            <Link to='/' className="logo">Cycle Hobe</Link>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                {
                    user && <>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                    </>
                }
                {
                    user ? <>
                        <span>{user.email}</span>
                        <a onClick={handleLogOut}>Sign Out</a>
                    </>
                    :
                    <>
                        <NavLink to='/register'>Register</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                    </>

                }
            </nav>
        </div>
    );
};

export default Header;