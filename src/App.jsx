import { useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./sections/Home";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Services from "./sections/Services";
import Products from "./sections/Products";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";



export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  },[]);
  return (
    <main className="relative">
      <Nav />
      <section className="">
        <Home />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <Products />
      </section>
      <section className="padding bg-bg-white">
        <Testimonial />
      </section>
      <section className="padding">
        <Contact />
      </section>
      <section className=' bg-primary-700 padding-x padding-t pb-8'>
        <Footer />
      </section>
      
    </main>
  )
}