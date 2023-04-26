import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import FirstFrame from "./components/FirstFrame";
import About from "./components/about";
import Blog from "./components/Blog";
import Cta from "./components/Cta";
import Testimonial from "./components/Testimonial";
import Forms from "./components/Form";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <FirstFrame />
      <About />
      <Testimonial />
      <Blog />
      <Cta />
      <Map />
      <Footer />
    </main>
  );
}
