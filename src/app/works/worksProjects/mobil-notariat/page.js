import Header from '@/components/header/Header'
import React from 'react'
import ChooseUsSection from './ChooseUsSection'
import MobileShowcase from './MobileShowcase'
import MobilNotariatHero from './MobilNotariatHero'
import OtherProjects from './ OtherProjects';
import Footer from '@/components/footer/Footer'

const Page = () => {
  return (
    <div>
      <Header/>
      <MobilNotariatHero/>
      <MobileShowcase/>
      <ChooseUsSection/>
<OtherProjects/>
<Footer/>
    </div>
  )
}

export default Page
