import Header from "@/components/Header";
import About from "@/components/About";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
const index = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Features/>
      <Pricing/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default index
