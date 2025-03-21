
import "../components/Hero.css"


const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p>
          Browse through our diverse range of meticulously crafted garments, designed
          to bring out your individuality and cater to your sense of style.
        </p>
        <button className="shop-btn">Shop Now</button>
        <div className="hero-stats">
          <div>
            <p className="stat-number">200+</p>
            <p>International Brands</p>
          </div>
          <div>
            <p className="stat-number">2,000+</p>
            <p>High-Quality Products</p>
          </div>
          <div>
            <p className="stat-number">30,000+</p>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;