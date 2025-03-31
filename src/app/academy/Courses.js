"use client";

import CoursesDesktop from "./CoursesDesktop";
import CoursesMobile from "./CoursesMobile";

export default function Courses() {
  return (
    <>
      <div className="hidden md:block">
        <CoursesDesktop />
      </div>
      <div className="md:hidden">
        <CoursesMobile />
      </div>
    </>
  );
}
