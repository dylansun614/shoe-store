import "./App.css"

import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts"
import Category from "./components/Category/Category"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <FeaturedProducts />
    </>
  )
}

export default App