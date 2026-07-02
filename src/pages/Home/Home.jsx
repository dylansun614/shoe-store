import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero/Hero"
import Category from "../../components/Category/Category"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import BestSeller from "../../components/BestSeller/BestSeller"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <FeaturedProducts />
      <BestSeller />
    </>
  )
}

export default Home