'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const RegistrationSectionMobile = dynamic(() => import('./RegistrationSectionMobile'));
const RegistrationSectionDesktop = dynamic(() => import('./RegistrationSectionDesktop'));

export default function RegistrationSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return isMobile ? <RegistrationSectionMobile /> : <RegistrationSectionDesktop />;
}
