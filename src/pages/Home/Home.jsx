import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero/Hero"
import Category from "../../components/Category/Category"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <FeaturedProducts />
    </>
  )
}

export default Home