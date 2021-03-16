import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../navbar/Navbar.scss'

function NavBar() {
    return (
        // <Navbar>
        //     <Navbar.Brand href="/">Navbar</Navbar.Brand>
        //     <Nav>
        //         <Link className="nav-link active" exact to='/'>Home</Link>
        //         <Link className="nav-link" exact to='/About'>About</Link>
        //         <Link className="nav-link" exact to="/Contact">Contact</Link>
        //         <Link className="nav-link" exact to="/Profile">Profile</Link>
        //     </Nav>
        // </Navbar>
        <Navbar>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav as="ul">
                <Nav.Item as="li">
                    <NavLink className="nav-link" activeClassName="is-active" exact to='/'>Home</NavLink>
                </Nav.Item>
                <Nav.Item as="li">
                    <NavLink className="nav-link" activeClassName="is-active" exact to='/About'>About</NavLink>
                </Nav.Item>
                <Nav.Item as="li">
                    <NavLink className="nav-link" activeClassName="is-active" exact to='/Contact'>Contact</NavLink> 
                </Nav.Item>
                <Nav.Item as="li">
                    <NavLink className="nav-link" activeClassName="is-active" exact to='/Profile'>Profile</NavLink>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}
export default NavBar;