import "./Hero.css"
import heroShoe from "../../assets/hero-shoe.jpg"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-label">NEW SEASON COLLECTION</p>
        <h1>GETTING RICH</h1>
        <p className="hero-text">Every step moves different.</p>
        <button>Shop Now</button>
      </div>

      <div className="hero-right">
        <img src={heroShoe} alt="GettingRich shoe" />
      </div>
    </section>
  )
}

export default Hero