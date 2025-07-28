import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="/#hero">Home</a></li>
        <li><a href="/#specials">Specials</a></li>
        <li><a href="/#about">About</a></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/">Order Online</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
  );
}
export default Nav;
