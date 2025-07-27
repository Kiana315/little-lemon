function Footer() {
  return (
    <footer>
        <div className="footer-logo">
            <img src="/images/logo.png" alt="Little Lemon logo" />
        </div>
        <div className="footer-nav">
            <h4>Doormat Navigation</h4>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            ...
            </ul>
        </div>
        <div className="footer-contact">
            <h4>Contact</h4>
            <p>Address</p>
            <p>Phone</p>
            <p>Email</p>
        </div>
        <div className="footer-social">
            <h4>Social Media Links</h4>
            <p>Facebook, Instagram, etc.</p>
        </div>
        </footer>

  );
}
export default Footer;