// src/components/Specials.js
import './Specials.css';

function Specials() {
  const specials = [
    {
      name: "Greek salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: "/images/greek-salad.jpg",
    },
    {
      name: "Bruschetta",
      price: "$5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: "/images/bruschetta.jpg",
    },
    {
      name: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: "/images/lemon-dessert.jpg",
    },
  ];

  return (
    <section id="specials" className="specials">
      <div className="specials-header">
        <h2>This weeks specials!</h2>
        <button className="button-primary">Online Menu</button>
      </div>
      <div className="specials-cards">
        {specials.map((item, index) => (
          <div className="card" key={index}>
            <img 
              loading="lazy" 
              src={process.env.PUBLIC_URL + item.image} 
              alt={item.name} />
            <div className="card-content">
              <div className="card-title">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <a href="#" className="delivery-link">
                Order a delivery
                <img 
                  loading="lazy"
                  src={process.env.PUBLIC_URL + "/images/delivery.svg"} 
                  alt="delivery icon" 
                  className="delivery-icon" />
            </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
