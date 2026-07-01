import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">GR</h2>

      <ul className="nav-links">
        <li>Shop</li>
        <li>New Arrivals</li>
        <li>Collections</li>
        <li>About</li>
      </ul>

      <div className="icons">
        <span>🛒</span>
        <span>👤</span>
      </div>
    </nav>
  )
}

export default Navbar