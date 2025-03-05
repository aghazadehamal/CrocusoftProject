'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/header/Header';
import ContactSection from '@/components/contactSection/ContactSection';
import Footer from '@/components/footer/Footer';
import WorksHero from './worksHero';





export default function Works() {
  

  return (
   
    <div>
    <Header/>
    <WorksHero/>
    <ContactSection/>
    <Footer/>
    </div>
  );
}
