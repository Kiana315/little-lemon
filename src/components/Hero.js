import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, 
          focused on traditional recipes served with a modern twist.
        </p>
        <Link to="/booking">
          <button className='button-primary'>Reserve a Table</button>
        </Link>
      </div>
      <div className="hero-image">
        <img src={process.env.PUBLIC_URL + "/images/hero-image.jpg"} alt="Delicious Mediterranean dish" />
      </div>
    </section>
  );
}

export default Hero;
