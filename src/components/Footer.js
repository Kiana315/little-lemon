import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-logo">
                <img src="/images/logo-lg.png" alt="Little Lemon logo" />
            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><a href="/#hero">Home</a></li>
                        <li><a href="/#specials">Specials</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><Link to="/booking">Reservations</Link></li>
                   
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Contact</h4>
                    <ul>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Social Media Links</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

  );
}
export default Footer;