function Header() {
    return (
        <div className="logo-container">
            <img src={process.env.PUBLIC_URL + "/images/logo-md.png"} alt="Little Lemon logo" />
        </div>
    );
}
export default Header;
