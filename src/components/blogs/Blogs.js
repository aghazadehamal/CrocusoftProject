"use client";

import BlogsDesktop from "./BlogsDesktop";
import BlogsMobile from "./BlogsMobile";

export default function Blogs() {
  return (
    <>
      <div className="hidden md:block">
        <BlogsDesktop />
      </div>
      <div className="md:hidden">
        <BlogsMobile />
      </div>
    </>
  );
}
