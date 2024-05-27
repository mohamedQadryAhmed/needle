import { useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./sections/Home";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Services from "./sections/Services";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  },[]);
  return (
    <main className="relative bg-bg-white">
      <Nav />
      <section className="">
        <Home />
      </section>
      <section>
        <Services />
      </section>
      
    </main>
  )
}