import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <div>
            <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-around'}}>
                <li><Link exact to='/'>Home</Link></li>
                <li><Link exact to='/About'>About</Link></li>
                <li><Link exact to='/Contact'>Contact</Link></li>
                <li><Link exact to='/Profile'>Profile</Link></li>
            </ul>
        </div>
    );
}
export default Navbar;