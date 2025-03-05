"use client";

import { useState } from "react";
import Image from "next/image";

import Header from "@/components/header/Header";
import ServicesHero from "./servicesHero";
import ServicesProjects from "./servicesProjects";
import ContactSection from "@/components/contactSection/ContactSection";
import Footer from "@/components/footer/Footer";



export default function Services() {
 

  return (
    <div>
   <Header/>
   <ServicesHero/>
     <ServicesProjects/>
     <ContactSection/>
     <Footer/>
    </div>
  );
}
