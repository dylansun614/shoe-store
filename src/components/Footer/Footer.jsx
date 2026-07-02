import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <h2>GR</h2>
          <p>
            Clean everyday sneakers designed
            for comfort and modern streetwear.
          </p>
        </div>

        <div className="footer-links">
          <h4>Shop</h4>

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Running</a>
          <a href="#">New Arrivals</a>
        </div>

        <div className="footer-links">
          <h4>Company</h4>

          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 GR. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;