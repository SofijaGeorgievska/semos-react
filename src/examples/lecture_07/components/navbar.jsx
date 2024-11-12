import { Link, NavLink } from "react-router-dom"

function Navbar()
{
    const linkStyle = {textDecoration: "none"}
    const activeLinkStyle = {fontWeight: "bold", color: "blue", textDecoration: "none"}

    return(
        <nav style={{backgroundColor: "#50854a", width: "100vw", height: "50px", display: "flex", alignItems: "center", position: "absolute", left: "0", top: "0"}} >
            <ul style={{display: "flex", gap: "20px", listStyle: "none"}}>
                <li><NavLink style={({isActive}) => (isActive ? activeLinkStyle : linkStyle) } to="/" >Home</NavLink></li>
                <li><Link to="/about" style={{textDecoration: "none"}} >About</Link></li>
                <li><Link to="/contact" style={{textDecoration: "none"}} >Contact</Link></li>
                <li><Link to="/auth" style={{textDecoration: "none"}} >Authentication</Link></li>
                <li><Link to="/auth/signin" style={{textDecoration: "none"}} >Sign In</Link></li>
                <li><Link to="/auth/signup" style={{textDecoration: "none"}} >Sign up</Link></li>
                <li><Link to="/profile" style={{textDecoration: "none"}} >Profile</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar