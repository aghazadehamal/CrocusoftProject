

'use client';

import CustomerSectionDesktop from './CustomerSectionDesktop';
import CustomerSectionMobile from './CustomerSectionMobile';

export default function CustomerSection() {
  return (
    <>
      <div className="hidden md:block">
        <CustomerSectionDesktop />
      </div>
      <div className="md:hidden">
        <CustomerSectionMobile />
      </div>
    </>
  );
}
