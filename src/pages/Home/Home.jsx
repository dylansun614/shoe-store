import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero/Hero"
import Category from "../../components/Category/Category"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import BestSeller from "../../components/BestSeller/BestSeller"
import Newsletter from "../../components/Newsletter/Newsletter"
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <FeaturedProducts />
      <BestSeller />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home