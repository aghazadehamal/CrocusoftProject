'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const HeroSectionMobile = dynamic(() => import('./HeroSectionMobile'));
const HeroSectionDesktop = dynamic(() => import('./HeroSectionDesktop'));

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isMobile ? <HeroSectionMobile /> : <HeroSectionDesktop />;
}
