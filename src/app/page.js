"use client";
import HeroSection from "@/components/heroSection/HeroSection";
import Header from "@/components/header/Header";
import Technologies from "@/components/technologies/Technologies";
import Projects from "@/components/projects/Projects";
import Partners from "@/components/partners/Partners";
import Testimonials from "@/components/testimonials/Testimonials";
import Blogs from "@/components/blogs/Blogs";
import Actions from "@/components/actions/Actions";
import ContactSection from "@/components/contactSection/ContactSection";
import Footer from "@/components/footer/Footer";
import Services from "@/components/services/Services";

export default function Page() {
  return (
    <main>
      <Header /> 
      <HeroSection />
    <Services/>
    <Technologies/>
    <Projects/>
    <Partners/>
    <Testimonials/>
    <Blogs/>
    <Actions/>
    <ContactSection/>
    <Footer/>
    </main>
  );
}
