import "./Newsletter.css"

function Newsletter() {
  return (
    <section className="newsletter">
      <p>JOIN THE CLUB</p>
      <h2>Get updates on new drops and exclusive offers.</h2>

      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  )
}

export default Newsletter