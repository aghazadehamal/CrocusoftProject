"use client";

import BlogSectionDesktop from "./BlogSectionDesktop";
import BlogSectionMobile from "./BlogSectionMobile";

export default function BlogSection() {
  return (
    <>
      <div className="hidden md:block">
        <BlogSectionDesktop />
      </div>
      <div className="md:hidden">
        <BlogSectionMobile />
      </div>
    </>
  );
}
