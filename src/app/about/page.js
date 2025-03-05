import Actions from "@/components/actions/Actions";
import ContactSection from "@/components/contactSection/ContactSection";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/heroSection/HeroSection";
import Testimonials from "@/components/testimonials/Testimonials";
import CustomerSection from "../clients/customerSection";
import AboutBody from "./aboutBody";
import StatsSection from "./StatsSection";




export default function About() {
    return (
      <div >
      <Header/>
      <HeroSection/>
      <AboutBody/>
      <StatsSection/>
      <CustomerSection/>
      <Testimonials/>
      <Actions/>
      <ContactSection/>
      <Footer/>
      </div>
    );
  }
  