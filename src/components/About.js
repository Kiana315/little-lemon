import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Founded by two passionate chefs, Little Lemon brings the taste of the Mediterranean
          to the heart of Chicago. We are dedicated to delivering rich flavors,
          warm hospitality, and an unforgettable dining experience.
        </p>
        <p>
          Our recipes are passed down through generations and refined with a modern twist,
          combining fresh, locally sourced ingredients with traditional techniques.
        </p>
      </div>

      <div className="about-images">
        <img loading="lazy"  src={process.env.PUBLIC_URL + "/images/restaurant_chef_A.jpg"} alt="Grilled Mediterranean food" className="about-img bottom-img" />
        <img loading="lazy"  src={process.env.PUBLIC_URL + "/images/restaurant_chef_B.jpg"} alt="Our chefs at work" className="about-img top-img" />
      </div>
    </section>
  );
}

export default About;
