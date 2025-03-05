import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import AcademyHero from './academyHero';
import Courses from './Courses';
import RegistrationSection from "./RegistrationSection";





export default function Academy() {
    return (
      <div >
      <Header/>
      <AcademyHero/>
      <Courses/>
      <RegistrationSection/>
      <Footer/>
      </div>
    );
  }
  